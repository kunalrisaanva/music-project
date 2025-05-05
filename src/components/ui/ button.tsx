// components/ui/button.tsx
import * as React from 'react'
import { cn } from '@/lib/utils'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    React.RefAttributes<HTMLButtonElement> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-md bg-black text-white font-medium px-4 py-2 text-sm transition-colors hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-black disabled:opacity-50 disabled:pointer-events-none',
          className
        )}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'
