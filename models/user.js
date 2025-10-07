"use server"
import mongoose from "mongoose";
import { Schema} from "mongoose";

const userSchema = new Schema({
    name: { type: String },
    email: { type: String, required: true},
    username: { type: String, required: true },
    profilePicture: { type: String },
    coverPicture: { type: String },
    profile: {type: Object},
});

export const User = (mongoose.models && mongoose.models.User) ||  mongoose.model("User", userSchema);


// import mongoose from "mongoose";
// import { Schema} from "mongoose";

// const userSchema = new Schema({
//     name: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     username: { type: String, required: true, unique: true },
//     profilePicture: { type: String },
//     coverPicture: { type: String },
// });

// export const User = (mongoose.models && mongoose.models.User) ||  mongoose.model("User", userSchema);
