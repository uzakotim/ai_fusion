"use client"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { SidebarProvider} from "@/components/ui/sidebar"
import { ReactNode, useEffect } from 'react'
import AppSidebar from "./_components/AppSidebar"
import AppHeader from "./_components/AppHeader"
import AuthChecker from "./authChecker"
import ConvexClientProvider from "./ConvexClientProvider"


interface ProviderProps {
  readonly children: ReactNode
}
function Provider({children, ...props}: ProviderProps) {

  return (
    <ConvexClientProvider>
    <NextThemesProvider  attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            {...props}>
              <AuthChecker>
              <SidebarProvider>
                <AppSidebar />
                <div className="w-full"> 
                  <AppHeader />
                   {children}
                  </div>
              </SidebarProvider>
              </AuthChecker>
    </NextThemesProvider>
    </ConvexClientProvider>
  )
}

export default Provider