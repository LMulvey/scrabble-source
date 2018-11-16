import { useState } from 'react';

/**
 * Custom hook for setting up basic controlled inputs
 * 
 * @param {String} initialValue - setup state with initial value
 * @returns {Array} Array - [inputValue: String, handleChange: Function]
 */
export function useControlledValue(initialValue = '') {
  const [inputValue, setInputValue] = useState(initialValue);

  function handleChange({target: { value }}) {
    if (value !== inputValue) {
      setInputValue(value);
    }
  }

  return [inputValue, handleChange]
}