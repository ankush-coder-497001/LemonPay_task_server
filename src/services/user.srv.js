const UserModel = require("../models/user.model");
const UserServices = {
  findUserByEmail : async (UserEmail)=>{
    try {
      const user = await UserModel.findOne({ email: UserEmail });
      return user;
    } catch (error) {
      throw new Error("Error finding user by email: " + error.message);
    }
  },
  createUser : async(UserEmail, UserPassword)=>{
    try {
      const newUser = await UserModel.create({
        email: UserEmail,
        password: UserPassword,
      });
      return newUser;
    } catch (error) {
      throw new Error("Error creating user: " + error.message);
    }
  }
}

module.exports = UserServices;