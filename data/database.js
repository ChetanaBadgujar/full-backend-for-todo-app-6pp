import mongoose from "mongoose";

//database connection starts from here
export const connectDB = () => {
  mongoose
    .connect(process.env.MONGODB_URL, {
      dbName: "backend_api",
    })
    .then(() => {
      console.log("Database connected");
    })
    .catch((e) => console.log(e));
};
