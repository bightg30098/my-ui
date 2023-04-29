import { twMerge } from 'tailwind-merge'
import { useControlled } from '../../hooks/useControlled'

import type { BaseOption } from '../types'

export type ButtonGroupProps = {
  className?: string
  options?: BaseOption[]
  selected?: BaseOption
  onChange?: (option: BaseOption) => void
}

export default function ButtonGroup(props: ButtonGroupProps) {
  const { className, options = [], selected = options[0], onChange = () => {} } = props

  const { value, isControlled, setUncontrolledValue } = useControlled(props, {
    defaultValue: selected,
    controlledProp: 'selected',
  })

  const handleOnChange = (option: BaseOption) => {
    if (!isControlled) setUncontrolledValue(option)
    onChange(option)
  }

  return (
    <span className={twMerge('isolate inline-flex rounded-md shadow-sm', className)}>
      {options.map((option, i) => (
        <button
          key={option.key}
          type='button'
          className={twMerge(
            'relative inline-flex items-center bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10',
            i === 0 && 'rounded-l-md',
            i > 0 && '-ml-px',
            i === options.length - 1 && 'rounded-r-md',
            value.key === option.key && 'bg-gray-100',
            className,
          )}
          onClick={() => handleOnChange(option)}
        >
          {option.value}
        </button>
      ))}
    </span>
  )
}
