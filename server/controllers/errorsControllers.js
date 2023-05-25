const sendErrorDev = (err, res) => {
  const { statusCode, status, message } = err;

  res.status(statusCode || 500).json({
    status: status || 'error',
    error: err,
    message,
    stack: err.stack,
  });
};

const sendErrorProd = (err, res) => {
  const { isOperational, statusCode, status, message } = err;

  if (isOperational) {
    res.status(statusCode).json({
      status,
      message,
    });
  } else {
    res.status(500).json({
      status: 'error',
      message: 'Something went very wrong',
    });
  }
};

const globalErrorHandler = async (err, req, res, next) => {
  if (process.env.NODE_ENV === 'development') {
    sendErrorDev(err, res);
  }

  if (process.env.NODE_ENV === 'production') {
    sendErrorProd(err, res);
  }
};

export { globalErrorHandler };
