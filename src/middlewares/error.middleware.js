export class customErrorHandler extends Error {
    constructor(statusCode, errMessage, success) {
      super(errMessage);
      this.statusCode = statusCode;
      this.success = success;
    }
  }
  
  export const errorHandlerMiddleware = (err, req, res, next) => {
    if (err instanceof customErrorHandler) {
      return res
        .status(err.statusCode)
        .json({ success: err.success, msg: err.message });
    }
    console.log(err.message);
    res.status(500).json({
      success: false,
      msg: 'Oops! Something went wrong... Please try again later!',
    });
  };
  