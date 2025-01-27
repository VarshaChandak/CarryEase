import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles

const BookingPage = () => {
  const [coolies, setCoolies] = useState([]); // State to store available coolies
  const [selectedCoolie, setSelectedCoolie] = useState(""); // State to store selected coolie
  const [pickupLocation, setPickupLocation] = useState(""); // Pickup location
  const [dropoffLocation, setDropoffLocation] = useState(""); // Dropoff location
  const [luggage, setLuggage] = useState({
    small: 0,
    medium: 0,
    large: 0,
  });

  useEffect(() => {
    // Fetch coolies from the backend API
    axios.get('http://localhost:5000/api/coolies')
      .then((response) => {
        setCoolies(response.data);
      })
      .catch((error) => {
        console.error('Error fetching coolies:', error);
      });
  }, []);

  // Handle coolie selection
  const handleCoolieSelection = (event) => {
    setSelectedCoolie(event.target.value); // Set the selected coolie
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4 text-primary">Booking Page</h1>

      {/* Pickup Location */}
      <div className="mb-4">
        <label htmlFor="pickupLocation" className="form-label">Pickup Location</label>
        <input
          id="pickupLocation"
          className="form-control"
          placeholder="Enter pickup location"
          value={pickupLocation}
          onChange={(e) => setPickupLocation(e.target.value)}
        />
      </div>

      {/* Dropoff Location */}
      <div className="mb-4">
        <label htmlFor="dropoffLocation" className="form-label">Dropoff Location</label>
        <input
          id="dropoffLocation"
          className="form-control"
          placeholder="Enter dropoff location"
          value={dropoffLocation}
          onChange={(e) => setDropoffLocation(e.target.value)}
        />
      </div>

      {/* Coolie Selection */}
      <div className="mb-4">
        <label htmlFor="coolieSelect" className="form-label">Select Coolie</label>
        <select
          id="coolieSelect"
          className="form-select"
          value={selectedCoolie}
          onChange={handleCoolieSelection}
        >
          <option value="">Select a Coolie</option>
          {coolies.map((coolie) => (
            <option key={coolie._id} value={coolie._id}>
              {coolie.name} - {coolie.status}
            </option>
          ))}
        </select>
      </div>

      {/* Luggage Selection */}
      <div className="mb-4">
        <h4>Luggage Details</h4>

        <div className="row">
          <div className="col-md-4">
            <label className="form-label">Small Luggage</label>
            <select
              className="form-select"
              value={luggage.small}
              onChange={e => setLuggage({...luggage, small: e.target.value})}
            >
              {[...Array(5).keys()].map(i => (
                <option key={i} value={i}>{i}</option>
              ))}
            </select>
          </div>

          <div className="col-md-4">
            <label className="form-label">Medium Luggage</label>
            <select
              className="form-select"
              value={luggage.medium}
              onChange={e => setLuggage({...luggage, medium: e.target.value})}
            >
              {[...Array(5).keys()].map(i => (
                <option key={i} value={i}>{i}</option>
              ))}
            </select>
          </div>

          <div className="col-md-4">
            <label className="form-label">Large Luggage</label>
            <select
              className="form-select"
              value={luggage.large}
              onChange={e => setLuggage({...luggage, large: e.target.value})}
            >
              {[...Array(5).keys()].map(i => (
                <option key={i} value={i}>{i}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Submit button */}
      <div className="text-center">
        <button
          className="btn btn-success"
          onClick={() => alert(`Booking confirmed with Coolie ID: ${selectedCoolie}`)} // Placeholder for actual booking logic
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
};

export default BookingPage;
