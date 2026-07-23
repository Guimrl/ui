import { forwardRef } from 'react'
import type { ButtonProps as MuiButtonProps } from '@mui/material'
import { Button as MuiButton } from '@mui/material'

export interface ButtonProps extends MuiButtonProps {
  label?: string
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ label, children, ...props }, ref) => {
    return (
      <MuiButton ref={ref} {...props}>
        {label || children}
      </MuiButton>
    )
  }
)

Button.displayName = 'Button'
