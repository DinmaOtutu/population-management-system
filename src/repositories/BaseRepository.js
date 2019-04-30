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

  /**
   * @description Fetch documents by field
   * @param {object} Model
   * @param {string} field
   * @param {any} value
   * @returns {Document} Resolves to array of documents.
   */
  static async findByField(Model, field, value) {
    try {
      const documents = await Model.find({ [field]: value }).exec();
      return documents;
    } catch (error) {
      throw error;
    }
  }

  /**
   * @description Fetch all documents
   * @param {object} Model
   * @param {object} options Query options
   * @returns {Document} Resolves to array of documents.
   */
  static async findAll(Model) {
    try {
      const documents = await Model.find();
      return documents;
    } catch (error) {
      throw error;
    }
  }
}

export default BaseRepository;
