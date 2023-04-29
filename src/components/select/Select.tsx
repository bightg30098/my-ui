import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { Fragment } from 'react'
import { twMerge } from 'tailwind-merge'
import { useControlled } from '../../hooks/useControlled'

import type { BaseOption } from '../types'

export type SelectProps = {
  options?: BaseOption[]
  selected?: BaseOption
  onChange?: (option: BaseOption) => void
  className?: string
}

export default function Select(props: SelectProps) {
  const { className, options = [], selected = options[0], onChange = () => {} } = props

  const {
    value: _selected,
    isControlled,
    setUncontrolledValue,
  } = useControlled(props, { defaultValue: selected, controlledProp: 'selected' })

  const handleOnChange = (option: BaseOption) => {
    if (!isControlled) setUncontrolledValue(option)
    onChange(option)
  }

  return (
    <div className={twMerge('relative w-fit', className)}>
      <Listbox value={_selected} onChange={handleOnChange}>
        <Listbox.Button className='relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm'>
          <span className='block truncate'>{_selected.value}</span>
          <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
            <ChevronUpDownIcon className='h-5 w-5 text-gray-400' aria-hidden='true' />
          </span>
        </Listbox.Button>
        <Transition as={Fragment} leave='transition ease-in duration-100' leaveFrom='opacity-100' leaveTo='opacity-0'>
          <Listbox.Options className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
            {options.map((option) => (
              <Listbox.Option
                key={option.key}
                className={({ active }) =>
                  twMerge(
                    'relative cursor-default select-none py-2 pl-10 pr-4',
                    active ? 'bg-amber-100 text-amber-900' : 'text-gray-900',
                  )
                }
                value={option}
              >
                {({ selected }) => (
                  <>
                    <span className={twMerge('block truncate', selected ? 'font-medium' : 'font-normal')}>
                      {option.value}
                    </span>
                    {selected ? (
                      <span className='absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600'>
                        <CheckIcon className='h-5 w-5' aria-hidden='true' />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </Listbox>
    </div>
  )
}
