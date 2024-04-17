const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  verificationToken: { type: String },
  verificationTokenExpirey: { type: Date },
  isVerified: { type: Boolean, default: false },
  isAdmin: { type: Boolean, default: false },
});

const User = mongoose.models.MyUsers || mongoose.model("MyUsers", userSchema);

module.exports = {
  User,
};
