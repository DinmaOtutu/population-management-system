import BaseRepository from '../repositories/BaseRepository';
import Location from '../models/Location';
/**
 * @class CompanyController
 */
class LocationController {
  /**
     *@description Creates a new company
     *@param  {Object} req - Request sent to the router
     *@param  {object} res - Response sent from the controller
     *@returns {object} - status code, message and updated users details
     *@memberof UsersController
     */
  static async createLocation(req, res) {
    try {
      const { male, female, location } = req.body;
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

export default LocationController;
