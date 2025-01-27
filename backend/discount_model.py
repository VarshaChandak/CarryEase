import pandas as pd
from sklearn.preprocessing import LabelEncoder
from sklearn.linear_model import LinearRegression

# Pre-trained model and encoders (ensure these are saved from previous model training)
time_of_day_encoder = LabelEncoder()
season_encoder = LabelEncoder()
model = LinearRegression()

# Load your saved model and encoders (assuming you've saved them after training)
# For example, use pickle to load a trained model and encoders
# import pickle
# model = pickle.load(open("model.pkl", "rb"))
# time_of_day_encoder = pickle.load(open("time_of_day_encoder.pkl", "rb"))
# season_encoder = pickle.load(open("season_encoder.pkl", "rb"))


# Example function to calculate dynamic discount
def calculate_dynamic_discount(
    original_price, booking_count, day_of_week, time_of_day, season
):
    try:
        # Map 'time_of_day' and 'season' inputs to numerical values
        time_of_day_encoded = time_of_day_encoder.transform([time_of_day])[0]
        season_encoded = season_encoder.transform([season])[0]

        # Prepare input data for prediction
        new_data = pd.DataFrame(
            {
                "booking_count": [booking_count],
                "day_of_week": [day_of_week],
                "time_of_day": [time_of_day_encoded],
                "season": [season_encoded],
                "original_price": [original_price],
            }
        )

        # Predict the discount
        predicted_discount = model.predict(new_data)[0]

        # Ensure the discount is within a valid range (0% - 100%)
        predicted_discount = max(0, min(predicted_discount, 100))

        # Calculate the final price after applying the discount
        final_price = original_price * (1 - predicted_discount / 100)

        return predicted_discount, final_price

    except Exception as e:
        print(f"Error during dynamic discount calculation: {e}")
        return None, None
