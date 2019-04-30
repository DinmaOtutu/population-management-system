import errorValidationHandler from './errorHandler';

const verifyUserInput = {
  locationRequestBody: (req, res, next) => {

    errorValidationHandler(req, res, next);
  }
};

export default verifyUserInput;
