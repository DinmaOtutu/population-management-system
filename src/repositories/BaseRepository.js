/**
 * @description Base repository
 * @class BaseRepository
 */
class BaseRepository {
  /**
     * @description Create a new document
     * @param {object} Model
     * @param {object} options
     * @returns {Document} Returns a newly created document.
     */
  static async create(Model, options) {
    try {
      const document = await Model.create(options);
      return document;
    } catch (error) {
      throw error;
    }
  }
}

export default BaseRepository;
