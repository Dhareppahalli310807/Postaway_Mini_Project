// third party imports
import jwt from 'jsonwebtoken';

//local imports
import UserModel from './user.model.js';

export default class UserController {
  // get all users in the app, can be used by admin.
  getAllUsers(req, res) {
    const users = UserModel.getAllUsers();
    return res.status(200).json({ success: true, users });
  }
  // signin up a user
  signUp(req, res) {
    const { name, email, password } = req.body;
    UserModel.addUser(name, email, password);
    return res
      .status(201)
      .json({ success: true, msg: 'User Sign up successfully' });
  }
  // loggin in a user
  signIn(req, res) {
    const { email, password } = req.body;
    const user = UserModel.loginUser(email, password);
    // creating token to send in response
    const token = jwt.sign(
      { userId: user.id, userEmail: user.email },
      'secretkey',
      { expiresIn: '1h' }
    );
    //saving token and userId in cookie with 15min of time, after that cookie expires
    res
      .status(201)
      .cookie('jwtToken', token, { maxAge: 900000, httpOnly: false })
      .cookie('userId', user.id, { maxAge: 900000, httpOnly: false })
      .json({ success: true, msg: 'Login Successfull', token });
  }
}
