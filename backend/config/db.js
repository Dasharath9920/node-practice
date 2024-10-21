import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

export const connectToDb = async () => {
   try {
      const connect = await mongoose.connect(process.env.CONNECTION_STRING);
      console.log('connected to db: ',connect.connection.host)
   } catch(err) {
      console.log("something went wrong: ",err);
      process.exit(1);
   }
}

process.on('SIGINT',async () => {
   await mongoose.disconnect();
   console.log('MongoDB disconnected due to application termination');
   process.exit(0);
})