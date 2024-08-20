const User = require("../models/User");
const bcrypt = require("bcrypt");

const saltRounds = 10;
const createUserService = async (name, password, email) => {
  try {
    //hash user password
    const hashPassword = await bcrypt.hash(password, saltRounds);
    let result = await User.create({
      name: name,
      email: email,
      password: hashPassword,
    });
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};
const loginService = async (password,email) => {
   
  try {
    //fetch by emai
    const user = await User.findOne({ email:email });
    if (user) {
      const isMatchPassword = await bcrypt.compare(password,user.password);
      if (!isMatchPassword) {
        return {
          EC: 2,
          EM: "email/password không tồn tại",
        };
      } else {
        return {
            EC: 0,
            user: {
                email: user.email,
                name: user.name,
            }
        }
      }
    } else {
      return {
        EC: 1,
        EM: "email/password không tồn tại",
      };
    } 
  } catch (error) {
    console.log(error);
    return null;
}
};
module.exports = {
  createUserService,
  loginService,
};
