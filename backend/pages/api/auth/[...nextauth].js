import NextAuth from 'next-auth'
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise from '@/lib/mongodb'
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
  secret: process.env.NODE_ENV, // Set your own secret here
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    // OAuth authentication providers...   
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
  ]
})