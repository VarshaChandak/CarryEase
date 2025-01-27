\from flask import Flask, request, jsonify
import joblib
import pandas as pd
from sklearn.preprocessing import LabelEncoder

# Initialize Flask app
app = Flask(__name__)

# Load the trained model
model = joblib.load('model.pkl')

# Load label encoders (assuming you used these for categorical variables)
time_of_day_encoder = LabelEncoder()
season_encoder = LabelEncoder()

# Define a function for dynamic discount calculation
def calculate_dynamic_discount(original_price, booking_count, day_of_week, time_of_day, season):
    try:
        time_of_day_encoded = time_of_day_encoder.transform([time_of_day])[0]
        season_encoded = season_encoder.transform([season])[0]
        
        new_data = pd.DataFrame({
            'booking_count': [booking_count],
            'day_of_week': [day_of_week],
            'time_of_day': [time_of_day_encoded],
            'season': [season_encoded],
            'original_price': [original_price]
        })
        
        predicted_discount = model.predict(new_data)[0]
        predicted_discount = max(0, min(predicted_discount, 100))
        
        final_price = original_price * (1 - predicted_discount / 100)
        
        return predicted_discount, final_price
    
    except Exception as e:
        print(f"Error during dynamic discount calculation: {e}")
        return None, None

# Define the API endpoint
@app.route('/predict_discount', methods=['POST'])
def predict_discount():
    data = request.get_json()  # Get JSON data from POST request
    original_price = data['original_price']
    booking_count = data['booking_count']
    day_of_week = data['day_of_week']
    time_of_day = data['time_of_day']
    season = data['season']
    
    dynamic_discount, final_price = calculate_dynamic_discount(
        original_price, booking_count, day_of_week, time_of_day, season
    )
    
    if dynamic_discount is not None:
        return jsonify({
            'dynamic_discount': dynamic_discount,
            'final_price': final_price
        })
    else:
        return jsonify({'error': 'Error calculating the discount'}), 400

# Run the Flask app
if __name__ == '__main__':
    app.run(debug=True)
