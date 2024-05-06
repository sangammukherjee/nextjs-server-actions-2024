import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  address: String,
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
