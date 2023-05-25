import AppError from '../utils/AppError.js';

const urlNotFoundError = (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} in this server`, 404));
};

export default urlNotFoundError;
