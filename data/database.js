import mongoose from "mongoose";

//database connection starts from here
export const connectDB = () => {
  mongoose
    .connect(process.env.MONGODB_URL, {
      dbName: "backend_api",
    })
    .then((c) => {
      console.log(`Database Connected with ${c.connection.host}`);
    })
    .catch((e) => console.log(e));
};
