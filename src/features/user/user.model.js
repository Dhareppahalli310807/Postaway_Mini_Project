import { customErrorHandler } from '../../middlewares/error.middleware.js';

export default class UserModel {
  constructor(id, name, email, password) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
  }
  //get all users array
  static getAllUsers() {
    return users;
  }
  //signing up a user
  static addUser(name, email, password) {
    // input validation
    if (!name) {
      throw new customErrorHandler(400, 'Name cannot be empty', false);
    } else if (name.length < 3) {
      throw new customErrorHandler(
        400,
        'Name should be more than 3 characters',
        false
      );
    }
    if (!email) {
      throw new customErrorHandler(400, 'Email cannot be empty', false);
    }
    if (!password) {
      throw new customErrorHandler(400, 'Password cannot be empty', false);
    } else if (password.length < 7) {
      throw new customErrorHandler(
        400,
        'Password must be more than 8 characters',
        false
      );
    }
    // creating a user
    const newUser = new UserModel(users.length + 1, name, email, password);
    //checking if a user with same email exists
    const existingUser = users.find((user) => user.email === newUser.email);
    if (existingUser) {
      throw new customErrorHandler(
        400,
        'User Already exists. Please Login.',
        false
      );
    }
    users.push(newUser);
  }
  //Login user
  static loginUser(email, password) {
    //if user email is correct in req.body then check for password
    const isUserEmailCorrect = users.find((u) => u.email === email);
    // if user email incorrect then user must not exist
    if (!isUserEmailCorrect) {
      throw new customErrorHandler(
        404,
        'User not present. Please Register.',
        false
      );
    }
    // if user password is matched then send user object to controller
    const isUserPasswordCorrect = isUserEmailCorrect.password === password;
    // if user password not matched then user must have entered wrong password
    if (isUserEmailCorrect && !isUserPasswordCorrect) {
      throw new customErrorHandler(400, 'Invalid credentials', false);
    }

    return isUserEmailCorrect;
  }
}

let users = [
  new UserModel(1, 'Dhareppa', 'dharepps@gmail.com', 'Deva@123-+'),
  new UserModel(2, 'Pandya', 'pandya@gmail.com', 'Pandya@123-+'),
];
