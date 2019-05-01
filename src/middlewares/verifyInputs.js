import errorValidationHandler from './errorHandler';

const verifyUserInput = {
  locationRequestBody: (req, res, next) => {
    req.check('female', 'number of female number is required').trim().notEmpty();
    req.check('male', ' number of male is required').trim().notEmpty();
    req.check('male', 'Male input should be a number').isInt();
    req.check('female', 'Female input should be a number').isInt();
    req.check('name', 'Name is required').trim().notEmpty();
    req.check('location', 'Location is required').trim().notEmpty();
    
    errorValidationHandler(req, res, next);
  },

  updateLocationRequestBody: (req, res, next) => {
    req.check('id', 'Invalid location ID').isMongoId();
    req.check('id', 'Location ID is required').trim().notEmpty();

    errorValidationHandler(req, res, next);
  },

  deleteLocationRequestBody: (req, res, next) => {
    req.check('id', 'Invalid location ID').isMongoId();
    req.check('id', 'Location ID is required').trim().notEmpty();

    errorValidationHandler(req, res, next);
  }
};

export default verifyUserInput;
