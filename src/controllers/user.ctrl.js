const UserService = require("../services/user.srv");
const bcrypt = require("bcrypt");
const UserController = {
register: async (req, res) => {
  try {
    const { email, password } = req.body;
    // Check if user already exists
    const existingUser = await UserService.findUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }
    //hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    // Create new user
    const newUser = await UserService.createUser(email, hashedPassword);
    return res.status(201).json({
      message: "User Registered successfully",
      user: {
        id: newUser.id,
        email: newUser.email,
      },
    });
    
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
},
Login : async (req,res) => {
  try {
    const { email, password } = req.body;
    // Check if user exists
    const existingUser = await UserService.findUserByEmail(email);
    if (!existingUser) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }
    // Check password
    const isPasswordValid = await bcrypt.compare(password, existingUser.password);
    if (!isPasswordValid) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }
    //create the token 
    const token = await existingUser.generateAuthToken();
    return res.status(200).json({
      message: "Login successful",
      user: {
        token: token,
        id: existingUser.id,
        email: existingUser.email,
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
}
}

module.exports = UserController;
