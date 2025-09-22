import { ThemeProvider as NextThemesProvider } from "next-themes"
import { SidebarProvider} from "@/components/ui/sidebar"
import { ReactNode } from 'react'
import AppSidebar from "./_components/AppSidebar"
import AppHeader from "./_components/AppHeader"
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
                <div className="w-full"> 
                  <AppHeader />
                  {children}
                  </div>
              </SidebarProvider>
    </NextThemesProvider>
  )
}

export default Provider