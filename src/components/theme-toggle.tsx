"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { setTheme, theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // Avoid hydration mismatch by only rendering after mount
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="p-2 w-9 h-9" /> // Placeholder to avoid layout shift
  }

  const isDark = resolvedTheme === "dark"

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="group relative p-2 rounded-full hover:bg-yellow-100 dark:hover:bg-blue-900/30 transition-all duration-300 flex items-center justify-center overflow-hidden"
      aria-label="Toggle theme"
    >
      {/* 
        LOGIC:
        - In Light Mode: Shows Sun. Hovering triggers 'group-hover' which hides Sun and shows Moon.
        - In Dark Mode: Shows Moon. Hovering triggers 'group-hover' which hides Moon and shows Sun.
      */}
      
      <div className="relative h-5 w-5 flex items-center justify-center">
        {/* Sun Icon */}
        <Sun 
          className={`h-5 w-5 transition-all duration-500 transform 
            ${isDark 
              ? "translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 text-yellow-500" 
              : "translate-y-0 opacity-100 group-hover:-translate-y-10 group-hover:opacity-0 text-orange-500"
            }`} 
        />
        
        {/* Moon Icon */}
        <Moon 
          className={`absolute h-5 w-5 transition-all duration-500 transform 
            ${isDark 
              ? "translate-y-0 opacity-100 group-hover:-translate-y-10 group-hover:opacity-0 text-blue-400" 
              : "translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 text-slate-700"
            }`} 
        />
      </div>
      
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
