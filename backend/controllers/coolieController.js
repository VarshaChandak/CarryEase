import { find, findByIdAndUpdate } from '../models/coolies';

// Fetch available coolies near a location
const fetchAvailableCoolies = async (longitude, latitude, maxDistance = 5000) => {
  try {
    const coolies = await find({
      availability: true,
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [longitude, latitude],
          },
          $maxDistance: maxDistance,
        },
      },
    });
    return coolies;
  } catch (error) {
    throw new Error(`Error fetching coolies: ${error.message}`);
  }
};

// Update coolie availability
const updateCoolieAvailability = async (coolieId, availability) => {
  try {
    const updatedCoolie = await findByIdAndUpdate(
      coolieId,
      { availability, status: availability ? 'online' : 'offline' },
      { new: true }
    );
    return updatedCoolie;
  } catch (error) {
    throw new Error(`Error updating coolie: ${error.message}`);
  }
};

export default { fetchAvailableCoolies, updateCoolieAvailability };
