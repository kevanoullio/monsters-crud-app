import mongoose from "mongoose";

mongoose.set("strictQuery", true);

export const connectDB = async () => {
    const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_NAME}.xfriqsx.mongodb.net/?retryWrites=true&w=majority`;
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
