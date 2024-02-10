import mongoose from "mongoose";

const monsterSchema = new mongoose.Schema({
    {
        name: {
            type: String,
            required: true,
        },
        imageUrl: {
            type: String,
            required: true,
        }
    }
});
