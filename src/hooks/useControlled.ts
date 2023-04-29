import { useState } from 'react'

type ControlledOptions<T, P> = {
  defaultValue: P
  controlledProp?: keyof T
}

export function useControlled<T extends object, P>(
  props: T,
  { defaultValue, controlledProp }: ControlledOptions<T, P>,
) {
  const isControlled = controlledProp === undefined ? false : controlledProp in props
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue)
  const value =
    isControlled && controlledProp !== undefined ? (props[controlledProp] as P) ?? defaultValue : uncontrolledValue

  return {
    value,
    uncontrolledValue,
    isControlled,
    setUncontrolledValue,
  } as const
}
