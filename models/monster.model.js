import mongoose from "mongoose";

const monsterSchema = new mongoose.Schema(
    // define the schema for the monster model
    {
        id: {
            // auto-increment the id
            type: Number,
            required: [true, "ID is required"],
            unique: true,
            default: 0,
            autoIncrement: true,
        },
        name: {
            type: String,
            required: [true, "Name is required"],
        },
        username: {
            type: String,
            required: false,
        },
        email: {
            type: String,
            required: [true, "Email is required"],
        },
        address: {
            street: {
                type: String,
                required: false,
            },
            suite: {
                type: String,
                required: false,
            },
            city: {
                type: String,
                required: false,
            },
            zipcode: {
                type: String,
                required: false,
            },
            geo: {
                lat: {
                    type: String,
                    required: false,
                },
                lng: {
                    type: String,
                    required: false,}
            }
        },
        phone: {
            type: String,
            required: [true, "Phone number is required"],
        },
        website: {
            type: String,
            required: false,
        },
        company: {
            name: {
                type: String,
                required: false,
            },
            catchPhrase: {
                type: String,
                required: false,
            },
            bs: {
                type: String,
                required: false,
            }
        },
        image_url: {
            type: String,
            required: false,
        }
    },
    {
        timestamps: true
    }
);

const Monster = mongoose.model("Monster", monsterSchema);

export default Monster;



