import jwt from 'jsonwebtoken';

const jwtAuth = (req, res, next) => {
  const { jwtToken } = req.cookies.jwtToken;
  jwt.verify(jwtToken, 'secretkey', (err, decoded) => {
    if (err) res.status(401).json({ success: false, msg: 'login to continue' });
    else {
      const userPayload = decoded;
      req.userId = userPayload.userId;
      next();
    }
  });
};

export default jwtAuth;
