const errorValidationHandler = (req, res, next) => {
  const error = req.errorValidations();
  const errorValidations = [];
  if (error) {
    error.map(err => errorValidations.push(err.msg));
    return res.status(400).json({
      error: errorValidations
    });
  }
  next();
};

export default errorValidationHandler;
