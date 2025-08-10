'use client'

import { ThemeProvider } from '../lib/theme-provider'
import { ThemeToggle } from './components/ThemeToggle'

export default function InvestorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground transition-colors">
        {/* Theme toggle in top-right corner */}
        <div className="fixed top-4 right-4 z-50">
          <ThemeToggle />
        </div>
        
        {children}
      </div>
    </ThemeProvider>
  )
}