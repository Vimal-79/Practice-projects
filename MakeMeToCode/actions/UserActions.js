"use server"
import React from 'react'
import mongoose from 'mongoose'
import connectDB from '@/db/connectDB'
import { User } from '@/models/user'

const POST = async (data, session) => {
    await connectDB();
    const userdb = await User.findOne({ email: session.user.email });
    for (const value in data) {
        const element = data[value];

        //Only update what is changed
        if (element) {
            const newdata = await User.updateOne({ email: session.user.email }, [{ $set: { profile: { [value]: element } } }]);
        }
    }
    console.log("data posted to server ")
}

export default POST