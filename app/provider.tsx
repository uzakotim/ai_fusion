import { ThemeProvider as NextThemesProvider } from "next-themes"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { ReactNode } from 'react'
import AppSidebar from "./_components/AppSidebar"
interface ProviderProps {
  readonly children: ReactNode
}
function Provider({children, ...props}: ProviderProps) {
  return (
    <NextThemesProvider  attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            {...props}>
              <SidebarProvider>
                <AppSidebar />
                <SidebarTrigger />
                <div>{children}</div>
              </SidebarProvider>
    </NextThemesProvider>
  )
}

export default Provider