import type React from 'react'
import { twMerge } from 'tailwind-merge'

export type ButtonProps = {
  children?: React.ReactNode
  variant?: keyof typeof variants
  icon?: ({ className }: { className?: string }) => JSX.Element | null
  iconPosition?: 'left' | 'right'
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const variants = {
  primary:
    'rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
  secondary:
    'rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50',
  soft: 'rounded-md bg-indigo-50 px-2.5 py-1.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100',
} as const

export default function Button({
  children,
  className,
  icon: Icon,
  iconPosition = 'left',
  type = 'button',
  variant = 'primary',
  ...props
}: ButtonProps) {
  return (
    <button type={type} {...props} className={twMerge(variants[variant], className)}>
      {Icon && iconPosition === 'left' && <Icon className='-ml-0.5 mr-1 h-5 w-5' aria-hidden='true' />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className='-mr-0.5 ml-1 h-5 w-5' aria-hidden='true' />}
    </button>
  )
}
