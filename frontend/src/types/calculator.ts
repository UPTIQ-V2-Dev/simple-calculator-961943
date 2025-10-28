export enum Operation {
  ADD = 'ADD',
  SUBTRACT = 'SUBTRACT',
  MULTIPLY = 'MULTIPLY',
  DIVIDE = 'DIVIDE',
}

export interface CalculatorState {
  display: string;
  previousValue: number | null;
  operation: Operation | null;
  waitingForOperand: boolean;
  error: string | null;
}

export type ButtonType = 'number' | 'operation' | 'equals' | 'clear' | 'decimal';

export interface CalculatorButtonProps {
  value: string;
  type: ButtonType;
  onClick: (value: string) => void;
  className?: string;
}