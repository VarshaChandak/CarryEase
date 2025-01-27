from flask import Flask, request, jsonify
import joblib  # For scikit-learn models, use tensorflow if using a TensorFlow model
import numpy as np

app = Flask(__name__)

# Load the trained model (ensure the model is saved as 'model.pkl')
model = joblib.load(
    "model.pkl"
)  # Or use tensorflow.keras.models.load_model('model.h5') for TensorFlow models


@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.get_json()  # Receive data from POST request
        features = np.array(data["features"]).reshape(
            1, -1
        )  # Ensure features are shaped for the model

        # Get prediction from the model
        prediction = model.predict(features)

        # Send the prediction back as a JSON response
        return jsonify({"prediction": prediction.tolist()})
    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(
        debug=True, port=5001
    )  # Make sure Flask runs on a different port than your Node.js backend
