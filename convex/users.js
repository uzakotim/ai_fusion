import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const CreateUser=mutation({
    args:{

        /*
         name: v.string(),
        email: v.string(),
        avatar: v.string(),
        createdAt: v.date(),
        remainingMsg: v.number(),
        plan: v.string(),
        credits: v.number(),
        id: v.string()
        */
        name: v.string(),
        email: v.string(),
        picture: v.string(),
        createdAt: v.string(),
        remainingMsg: v.number(),
        plan: v.string(),
        credits: v.number(),
        id: v.string()
    },
    handler: async(ctx, args)=>{
        // if user exists
        const user = await ctx.db.query("users").withIndex("by_email", (q) => q.eq("email", args.email)).collect();
        console.log(user);
        // if not add user
        if(user?.length === 0){
            const result = await ctx.db.insert("users", {
                name: args.name,
                email: args.email,
                avatar: args.picture,
                createdAt: args.createdAt,
                remainingMsg: args.remainingMsg,
                plan: args.plan,
                credits: args.credits,
                id: args.id
            });
            console.log(result);
        }
    }

})

export const GetUser=query({
    args:{email: v.string()},
    handler: async(ctx, args)=>{
        const user = await ctx.db.query("users").withIndex("by_email", (q) => q.eq("email", args.email)).collect();
        return user[0];
    }
    
})

// export const UpdateToken=mutation({
    // args:{
        // userId: v.id("users"), 
        // token: v.number()},
    // handler: async(ctx, args)=>{
        // const result = await ctx.db.patch(args.userId, {
            // token: args.token
        // });
        // return result;
    // }
// })