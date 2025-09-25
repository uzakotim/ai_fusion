import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
export default defineSchema({
    users: defineTable({
        /*
        name: user?.fullName,
        email: user?.emailAddresses[0].emailAddress,
        avatar: user?.profileImageUrl,
        id: user?.id,
        createdAt: new Date(),
        remainingMsg: 5, // Only for free plan
        plan: 'free',
        credits: 1000 // Paid user
        */
        name: v.string(),
        email: v.string(),
        avatar: v.string(),
        createdAt: v.string(),
        remainingMsg: v.number(),
        plan: v.string(),
        credits: v.number(),
        id: v.string()
    }).index("by_email", ["email"]),
});