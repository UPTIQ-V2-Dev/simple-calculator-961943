import { useState, useCallback } from 'react';
import { CalculatorState, Operation } from '../types/calculator';
import { performOperation, formatNumber, parseDisplayValue } from '../utils/calculator';

const initialState: CalculatorState = {
  display: '0',
  previousValue: null,
  operation: null,
  waitingForOperand: false,
  error: null,
};

export const useCalculator = () => {
  const [state, setState] = useState<CalculatorState>(initialState);

  const clear = useCallback(() => {
    setState(initialState);
  }, []);

  const inputNumber = useCallback((num: string) => {
    setState((prevState) => {
      if (prevState.waitingForOperand) {
        return {
          ...prevState,
          display: num,
          waitingForOperand: false,
          error: null,
        };
      }

      const newDisplay = prevState.display === '0' ? num : prevState.display + num;
      
      return {
        ...prevState,
        display: newDisplay,
        error: null,
      };
    });
  }, []);

  const inputDecimal = useCallback(() => {
    setState((prevState) => {
      if (prevState.waitingForOperand) {
        return {
          ...prevState,
          display: '0.',
          waitingForOperand: false,
          error: null,
        };
      }

      if (prevState.display.indexOf('.') === -1) {
        return {
          ...prevState,
          display: prevState.display + '.',
          error: null,
        };
      }

      return prevState;
    });
  }, []);

  const inputOperation = useCallback((nextOperation: Operation) => {
    setState((prevState) => {
      const inputValue = parseDisplayValue(prevState.display);

      if (prevState.previousValue === null) {
        return {
          ...prevState,
          previousValue: inputValue,
          operation: nextOperation,
          waitingForOperand: true,
          error: null,
        };
      }

      if (prevState.operation && prevState.waitingForOperand) {
        return {
          ...prevState,
          operation: nextOperation,
          error: null,
        };
      }

      try {
        const result = performOperation(
          prevState.previousValue,
          inputValue,
          prevState.operation!,
        );

        return {
          ...prevState,
          display: formatNumber(result),
          previousValue: result,
          operation: nextOperation,
          waitingForOperand: true,
          error: null,
        };
      } catch (error) {
        return {
          ...prevState,
          error: error instanceof Error ? error.message : 'Error',
          display: 'Error',
          previousValue: null,
          operation: null,
          waitingForOperand: true,
        };
      }
    });
  }, []);

  const calculate = useCallback(() => {
    setState((prevState) => {
      if (prevState.previousValue === null || !prevState.operation) {
        return prevState;
      }

      const inputValue = parseDisplayValue(prevState.display);

      try {
        const result = performOperation(
          prevState.previousValue,
          inputValue,
          prevState.operation,
        );

        return {
          display: formatNumber(result),
          previousValue: null,
          operation: null,
          waitingForOperand: true,
          error: null,
        };
      } catch (error) {
        return {
          ...prevState,
          error: error instanceof Error ? error.message : 'Error',
          display: 'Error',
          previousValue: null,
          operation: null,
          waitingForOperand: true,
        };
      }
    });
  }, []);

  return {
    display: state.display,
    error: state.error,
    clear,
    inputNumber,
    inputDecimal,
    inputOperation,
    calculate,
  };
};