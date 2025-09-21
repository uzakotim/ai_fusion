import { ThemeProvider as NextThemesProvider } from "next-themes"
import { ReactNode } from 'react'
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
        <div>{children}</div>
    </NextThemesProvider>
  )
}

export default Provider