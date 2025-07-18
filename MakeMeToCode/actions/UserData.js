"use server"
import React from 'react'
import connectDB from '@/db/connectDB'
import { User } from '@/models/user'

export const userProfileDB = async (mail) => {
    await connectDB();
    const username = await User.findOne({ email: mail })
    return username.profile;
}

export const usernameData = async (ClientUsername) => {
    await connectDB();
    console.log(ClientUsername);
    const userprofile = await User.findOne({ username: ClientUsername });
    console.log(userprofile);
}

// export const userProfileDB = async (mail) => {
//     await connectDB();
//     // console.log(mail)
//     const username = await User.findOne({ email: mail })
//     // console.log(username.profile)
//     return username.profile;
// }

// export const userProfileDB = async (mail) => {
//     await connectDB();
//     // console.log(mail)
//     const username = await User.findOne({ email: mail })
//     // console.log(username.profile)
//     return username.profile;
// }
