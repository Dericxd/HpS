import dotenv from "dotenv";
import Server from "./server/server";
import mongoose from "mongoose";

dotenv.config();

const server = new Server();

const conn = async () => {
  try {
    mongoose.set("useFindAndModify", false);
    mongoose.Promise = global.Promise;
    await mongoose.connect(String(process.env.URL_DB), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
     console.log("La conexion a la bd se ha realizado bien");
    await server.start(3000)
  } catch (error) {
    console.log(error);
  }
};

conn();
