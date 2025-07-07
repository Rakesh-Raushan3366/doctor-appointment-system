import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
    mongoose.connection.on('connected', () => console.log('Database connected'));
    await mongoose.connect(`${process.env.MONGODB_URI}`) // /prescripto
};

export default connectDB;