"use client"
import { useUser } from "@clerk/nextjs";
import { useEffect } from 'react'
import { useMutation } from "convex/react"
import { api } from "@/convex/_generated/api"
import { ReactNode } from "react";
interface ProviderProps {
  readonly children: ReactNode
}

function AuthChecker({children}: ProviderProps) { {
  const {user} = useUser();
  const CreateUser = useMutation(api.users.CreateUser);
  const CreateNewUser = async () => {
    const userData = {
      name: user?.fullName,
      email: user?.emailAddresses[0].emailAddress,
      avatar: user?.imageUrl,
      id: user?.id,
      createdAt: new Date(),
      remainingMsg: 5, // Only for free plan
      plan: 'free',
      credits: 1000 // Paid user
    }

    // Save to convex DB
    await CreateUser({
      name: userData.name!,
      email: userData.email!,
      picture: userData.avatar!,
      id: userData.id!,
      createdAt: userData.createdAt.toString(),
      remainingMsg: userData.remainingMsg,
      plan: userData.plan,
      credits: userData.credits
    });
    console.log("New user saved");

    // Logic to create a new user
  }
  useEffect(() => {
    if(user) {
      CreateNewUser();
    }
  }, [user]); 
  return (
          <div>
            {children}
          </div>
      )
  }
}

export default AuthChecker