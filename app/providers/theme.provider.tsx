import type { Dispatch, ReactNode, SetStateAction } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { createContext } from 'react'

// General
export enum Theme {
  Light = 'light',
  Dark = 'dark',
}

// Context
type ThemeContextType = [Theme | null, Dispatch<SetStateAction<Theme | null>>]

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)
ThemeContext.displayName = 'ThemeContext'

// Hook
export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

// Provider
type ThemeProviderProps = {
  theme: Theme | null
  children: ReactNode
}

export default function ThemeProvider({
  theme: incomingTheme,
  children,
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme | null>(incomingTheme)
  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  )
}
