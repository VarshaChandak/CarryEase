const { PythonShell } = require('python-shell');

// Function to calculate the discount by calling the Python script
exports.calculateDiscount = (req, res) => {
    const { original_price, booking_count, day_of_week, time_of_day, season } = req.body;
    
    // Prepare arguments to send to Python script
    let options = {
        args: [original_price, booking_count, day_of_week, time_of_day, season]
    };

    // Call the Python script
    PythonShell.run('discount_model.py', options, (err, results) => {
        if (err) {
            console.log("Error running Python script:", err);
            return res.status(500).json({ error: 'Failed to calculate discount' });
        }

        // Parse the results returned by Python (discount and final price)
        let [predicted_discount, final_price] = results[0].split(',').map(val => parseFloat(val));

        // Return the discount and final price in the response
        return res.json({
            discount: predicted_discount,
            final_price: final_price
        });
    });
};
