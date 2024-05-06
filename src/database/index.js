import mongoose from "mongoose";

const connectToDB = async () => {
  const url =
    "mongodb+srv://sangammukherjee2022:sangam2024@cluster0.xmyzton.mongodb.net/";

  mongoose
    .connect(url)
    .then(() => console.log("Database connection is successful"))
    .catch((e) => console.log(e));
};

export default connectToDB;
