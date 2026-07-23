import { forwardRef } from 'react'
import type { TypographyProps as MuiTypographyProps } from '@mui/material'
import { Typography as MuiTypography } from '@mui/material'

export interface TypographyProps extends MuiTypographyProps {
  label?: string
}

export const Typography = forwardRef<HTMLElement, TypographyProps>(
  ({ label, children, ...props }, ref) => {
    return (
      <MuiTypography ref={ref} {...props}>
        {label || children}
      </MuiTypography>
    )
  }
)

Typography.displayName = 'Typography'
