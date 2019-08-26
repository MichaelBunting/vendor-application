import { useCallback, useState } from 'react';

type validationFunctionType = (e: Event) => {
  success: boolean;
  error?: string;
};

export default function useInputValidation(validationFunction: validationFunctionType) {
  const [error, setError] = useState(null);

  const handleInputValidation = (e: Event) => {
    const validationResults = validationFunction(e);

    if (validationResults.success) {
      setError(null);
    }

    setError(validationResults.error);
  };

  const setInputRef = useCallback((node) => {
    if (node) {
      node.addEventListener('blur', handleInputValidation);
    }
  }, []);

  return [setInputRef, error];
}
