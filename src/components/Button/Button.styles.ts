import type { ButtonVariant, ButtonSize } from './Button';

export const buttonBaseClasses =
  'inline-flex items-center justify-center font-medium transition-all duration-200 ' +
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ' +
  'disabled:pointer-events-none disabled:opacity-50 normal-case tracking-normal shadow-none';

export const buttonVariantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800 ' +
    'focus-visible:ring-primary-500',
  secondary:
    'bg-secondary-600 text-white hover:bg-secondary-700 active:bg-secondary-800 ' +
    'focus-visible:ring-secondary-500',
  outlined:
    'border border-primary-600 text-primary-600 bg-transparent ' +
    'hover:bg-primary-50 active:bg-primary-100 focus-visible:ring-primary-500',
  ghost:
    'text-primary-600 bg-transparent ' +
    'hover:bg-primary-50 active:bg-primary-100 focus-visible:ring-primary-500',
};

export const buttonSizeClasses: Record<ButtonSize, string> = {
  sm: 'h-8 px-3 text-sm rounded-md gap-1.5',
  md: 'h-10 px-4 text-base rounded-lg gap-2',
  lg: 'h-12 px-6 text-lg rounded-lg gap-2.5',
  xl: 'h-14 px-8 text-xl rounded-xl gap-3',
};
