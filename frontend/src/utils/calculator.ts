import { Operation } from '../types/calculator';

export const performOperation = (
  firstOperand: number,
  secondOperand: number,
  operation: Operation,
): number => {
  switch (operation) {
    case Operation.ADD:
      return firstOperand + secondOperand;
    case Operation.SUBTRACT:
      return firstOperand - secondOperand;
    case Operation.MULTIPLY:
      return firstOperand * secondOperand;
    case Operation.DIVIDE:
      if (secondOperand === 0) {
        throw new Error('Cannot divide by zero');
      }
      return firstOperand / secondOperand;
    default:
      throw new Error('Unknown operation');
  }
};

export const formatNumber = (num: number): string => {
  if (isNaN(num)) return 'Error';
  
  // Handle very large or very small numbers with scientific notation
  if (Math.abs(num) >= 1e21 || (Math.abs(num) < 1e-6 && num !== 0)) {
    return num.toExponential(10);
  }
  
  // Format with appropriate decimal places
  const formatted = num.toString();
  
  // Limit display to 15 characters to fit on screen
  if (formatted.length > 15) {
    return num.toPrecision(10);
  }
  
  return formatted;
};

export const isValidNumber = (value: string): boolean => {
  return !isNaN(Number(value)) && isFinite(Number(value));
};

export const parseDisplayValue = (display: string): number => {
  const parsed = parseFloat(display);
  return isNaN(parsed) ? 0 : parsed;
};