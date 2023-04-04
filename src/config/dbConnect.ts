import mongoose from 'mongoose';

export const connectDB = async (connectionString: string) => {
  try {
    if (connectionString.length) {
      await mongoose.connect(connectionString);
    } else {
      throw new Error(`Empty connection path was provided`);
    }
  } catch (error) {
    console.error(`DB error: ${error}`);
  }
};
