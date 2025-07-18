
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import TwitterProvider from "next-auth/providers/twitter";
import GithubProvider from "next-auth/providers/github";
import AppleProvider from "next-auth/providers/apple";
import connectDB from "@/db/connectDB";
import { User } from "@/models/user";
// import { Collection, createConnection } from "mongoose";

export const authOptions = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET
        }),
        TwitterProvider({
            clientId: process.env.TWITTER_CLIENT_ID,
            clientSecret: process.env.TWITTER_CLIENT_SECRET
        }),
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        AppleProvider({
            clientId: process.env.APPLE_ID,
            clientSecret: process.env.APPLE_SECRET
        })
    ], callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            // console.log(user, account, profile, email, credentials)
            if (account.provider === 'github') {
                await connectDB();
                const currentUser = await User.findOne({ email: user.email })
                if (!currentUser) {
                    const newUser = await User.create({
                        name: profile.name,
                        email: user.email,
                        username: profile.login,
                        profile: {"name": profile.name, "username": profile.login , "email": user.email , "profileImage": '' , "coverImage": ''}
                    })
                    await newUser.save()
                }
            }
            return true
        },
        async session({ session, token, user }) {
            // console.log("session", session, "\ntoken", token, "\nuser", user)
            const dbUser = await User.findOne({email: session.user.email})
            session.user.name = dbUser.name
            // console.log(dbUser)

            return session
        }
    }
})


export { authOptions as GET, authOptions as POST }
