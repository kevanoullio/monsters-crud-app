import mongoose from "mongoose";

mongoose.set("strictQuery", true);

export const connectDB = async () => {
    const url = "mongodb://localhost:27017/monsters-crud-app";
    try {
        const connection = await mongoose.connect(url, {
            useUnifiedTopology: true,
        });
        console.log(`Database connected sucessfully: ${connection.connection.host}`);
    } catch (error) {
        console.error("Failed to connect database: ", error);
        process.exit(1);
    }
};
