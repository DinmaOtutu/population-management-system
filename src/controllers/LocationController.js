import BaseRepository from '../repositories/BaseRepository';
import Location from '../models/Location';
/**
 * @class CompanyController
 */
class LocationController {
  /**
     *@description Creates a new location
     *@param  {Object} req - Request sent to the router
     *@param  {object} res - Response sent from the controller
     *@returns {object} - status code, message and updated users details
     *@memberof LocationController
     */
  static async createLocation(req, res) {
    try {
      const {
        name, male, female, location
      } = req.body;
      const options = {
        name, male, female, location
      };
      const createLocation = await BaseRepository.create(Location, options);
      return res.status(201).json({ message: 'Successfully created a location', createLocation });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  /**
     *@description gets all location
     *@param  {Object} req - Request sent to the router
     *@param  {object} res - Response sent from the controller
     *@returns {object} - status code, message and updated users details
     *@memberof LocationController
     */
  static async getLocation(req, res) {
    try {
      const getLocation = await BaseRepository.findAll(Location);
      const locationSummary = getLocation.map((location) => {
        const malePopulation = location.male;
        const femalePopulation = location.female;
        const locationArea = location.location;
        const name = `Recorded by ${location.name}`;
        const totalPopulation = malePopulation + femalePopulation;
        return {
          name, malePopulation, femalePopulation, totalPopulation, locationArea
        };
      });
      return res.status(200).json({ message: 'Successfully created a location', locationSummary });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  /**
     *@description Creates a new location
     *@param  {Object} req - Request sent to the router
     *@param  {object} res - Response sent from the controller
     *@returns {object} - status code, message and updated users details
     *@memberof LocationController
     */
  static async updateLocation(req, res) {
    try {
      const { id } = req.params;
      const {
        name, male, female, location
      } = req.body;
      const checkLocation = await BaseRepository.findById(Location, id);
      if (!checkLocation) return res.status(404).json({ error: 'This location does not exist' });
      const options = {
        name: name || checkLocation.name,
        male: male || checkLocation.male,
        female: female || checkLocation.female,
        location: location || checkLocation.location
      };
      const updateLocation = await BaseRepository.update(Location, { _id: id }, options);
      return res.status(200).json({ message: 'Successfully updated a location', updateLocation });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  /**
     *@description DELETE a location
     *@param  {Object} req - Request sent to the router
     *@param  {object} res - Response sent from the controller
     *@returns {object} - status code, message and updated users details
     *@memberof LocationController
     */
  static async deleteLocation(req, res) {
    try {
      const { id } = req.params;
      const checkLocation = await BaseRepository.findByIdAndRemove(Location, id);
      if (!checkLocation) return res.status(404).json({ error: 'This location does not exist' });
      return res.status(200).json({ message: 'Successfully deleted a location' });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

export default LocationController;
