// require mongoose and bcrypt
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// make schema
const Schema = mongoose.Schema;
// define schema
const userSchema = new Schema({
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
});

// static signup method
userSchema.statics.signup = async function (email, password) {
  const exists = await this.findOne({ email });

  if (exists) {
    throw Error("Email already in use   ");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ email, password: hash });
  return user;
};

//  make and export module called user ("user's collection" in DB)
module.exports = mongoose.model("User", userSchema);
