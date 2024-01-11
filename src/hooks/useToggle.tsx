import { useState } from 'react'

function useToggle(initialValue: boolean) {
  const [toggle, setToggle] = useState(initialValue)
  const toggleState = () => setToggle((state) => !state)
  const toggleCustom = (state: boolean) => setToggle((_) => state)

  return [toggle, toggleState, toggleCustom] as const
}

export default useToggle
