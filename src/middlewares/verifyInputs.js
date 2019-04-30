import errorValidationHandler from './errorHandler';

const verifyUserInput = {
  locationRequestBody: (req, res, next) => {
    req.check('female', 'Female number is required').trim().notEmpty();
    req.check('male', 'Male number is required').trim().notEmpty();
    errorValidationHandler(req, res, next);
  }
};

export default verifyUserInput;
