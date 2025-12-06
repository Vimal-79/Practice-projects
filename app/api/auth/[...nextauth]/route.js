
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import TwitterProvider from "next-auth/providers/twitter";
import GithubProvider from "next-auth/providers/github";
import AppleProvider from "next-auth/providers/apple";
import connectDB from "@/db/connectDB";
import { User } from "@/models/user";
// import { Collection, createConnection } from "mongoose";

export const authOptions = {
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
            clientSecret: process.env.TWITTER_CLIENT_SECRET,
            // Use OAuth 2.0 (X / Twitter API v2) and request common read scopes
            version: "2.0",
            authorization: {
                params: {
                    scope: "tweet.read users.read offline.access"
                }
            }
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
            if (account && account.provider === 'github') {
                console.log("GitHub sign-in detected");
                try {
                    await connectDB();
                    const currentUser = await User.findOne({ email: user.email });
                    if (!currentUser) {
                        const newUser = await User.create({
                            name: profile?.name || user?.name || '',
                            email: user.email,
                            username: profile?.login || user?.email.split('@')[0],
                            profile: { name: profile?.name || '', username: profile?.login || '', email: user.email, profileImage: '', coverImage: '' }
                        });
                        await newUser.save();
                    }
                } catch (err) {
                    console.error('NextAuth signIn error (GitHub provider):', err);
                    // Return false to indicate sign-in failure without crashing the function
                    return false;
                }
            }

            // Handle Twitter (X) provider sign-in (OAuth 2.0 / v2)
            if (account && account.provider === 'twitter') {
                console.log("Twitter sign-in detected");
                console.log("Profile data:", profile);
                console.log("User data:", user);
                console.log("Account data:", account);
                console.log("Email data:", email);
                try {
                    await connectDB();

                    // Twitter profile shapes vary; support multiple possible fields
                    const twitterUsername = profile?.data?.username || profile?.username || profile?.screen_name;
                    const twitterName = profile?.data?.name || profile?.name || user?.name;

                    // Try to find user by email if available, otherwise by username
                    let currentUser = null;
                    if (user?.email) {
                        currentUser = await User.findOne({ email: user.email });
                    }
                    if (!currentUser && twitterUsername) {
                        currentUser = await User.findOne({ username: twitterUsername });
                    }

                    if (!currentUser) {
                        // Build fallback username and email when provider doesn't supply email
                        const username = twitterUsername || (user?.email ? user.email.split('@')[0] : (twitterName || 'twitteruser').replace(/\s+/g, ''));
                        const email = user?.email || `${username}@twitter.local`;

                        const newUser = await User.create({
                            name: twitterName || '',
                            email,
                            username,
                            profile: { name: twitterName || '', username: twitterUsername || '', email, profileImage: '', coverImage: '' }
                        });
                        await newUser.save();
                    }
                } catch (err) {
                    console.error('NextAuth signIn error (Twitter provider):', err);
                    return false;
                }
            }
            return true;
        },
        async session({ session, token, user }) {
            // console.log("session", session, "\ntoken", token, "\nuser", user)
            try {
                const dbUser = await User.findOne({ email: session.user?.email });
                if (dbUser && dbUser.name) session.user.name = dbUser.name;
            } catch (err) {
                console.error('NextAuth session callback error:', err);
                // leave session as-is if DB lookup fails
            }
            return session;
        }
    }
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }