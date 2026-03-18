import React from 'react';
import MuiButton, { type ButtonProps as MuiButtonProps } from '@mui/material/Button';
import {
  buttonBaseClasses,
  buttonVariantClasses,
  buttonSizeClasses,
} from './Button.styles';

export type ButtonVariant = 'primary' | 'secondary' | 'outlined' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

// Map our semantic variants to MUI's internal variants for ripple/accessibility logic
const MUI_VARIANT_MAP: Record<ButtonVariant, MuiButtonProps['variant']> = {
  primary: 'contained',
  secondary: 'contained',
  outlined: 'outlined',
  ghost: 'text',
};

export interface ButtonProps
  extends Omit<MuiButtonProps, 'variant' | 'size' | 'color'> {
  /** Visual style of the button */
  variant?: ButtonVariant;
  /** Size of the button */
  size?: ButtonSize;
  /** Additional classes for one-off overrides */
  className?: string;
  children: React.ReactNode;
}

/**
 * Button component wrapping MUI Button with Tailwind CSS styling.
 *
 * Variants: primary | secondary | outlined | ghost
 * Sizes: sm | md | lg | xl
 *
 * Style layer (Button.styles.ts) can be swapped independently of this logic layer.
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      className = '',
      disabled = false,
      children,
      ...rest
    },
    ref
  ) => {
    const composedClassName = [
      buttonBaseClasses,
      buttonVariantClasses[variant],
      buttonSizeClasses[size],
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <MuiButton
        ref={ref}
        variant={MUI_VARIANT_MAP[variant]}
        disabled={disabled}
        className={composedClassName}
        disableElevation
        {...rest}
      >
        {children}
      </MuiButton>
    );
  }
);

Button.displayName = 'Button';
