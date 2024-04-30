import winston from 'winston';
// Write your code here
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'request-logging' },
  transports: [new winston.transports.File({ filename: 'info.log' })],
});
export const loggerMiddleware = async (req, res, next) => {
  // Write your code here
  if (!req.url.includes('users')) {
    const logData = `${req.url} - ${JSON.stringify(req.body)}`;
    logger.info(logData);
  }
  next();
};
export default loggerMiddleware;
