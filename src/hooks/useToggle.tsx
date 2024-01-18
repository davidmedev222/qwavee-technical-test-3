import { useState } from 'react'

/**
 * Creates a toggle functionality with custom initial value.
 *
 * @param initialValue - The initial value of the toggle.
 * @return An array containing the toggle value, a function to toggle the value, and a function to set the toggle to a custom value.
 */
function useToggle(initialValue: boolean) {
  const [toggle, setToggle] = useState(initialValue)

  /**
   * Toggles the current state to its opposite value.
   */
  const toggleState = () => setToggle((state) => !state)

  /**
   * Sets the toggle state to the specified value.
   *
   * @param state - The new value to set the toggle to.
   */
  const toggleCustom = (state: boolean) => setToggle((_) => state)

  return [toggle, toggleState, toggleCustom] as const
}

export default useToggle
