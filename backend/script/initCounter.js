// This can be done manually or you can automate it with an initialization script
const Counter = require('./models/Counter');

async function initCounter() {
  const existingCounter = await Counter.findOne({ name: 'bookingId' });
  
  if (!existingCounter) {
    const newCounter = new Counter({ name: 'bookingId', sequence_value: 1 });
    await newCounter.save();
    console.log('Counter initialized!');
  }
}

initCounter().catch(console.error);
