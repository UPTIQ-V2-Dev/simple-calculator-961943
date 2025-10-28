import { useCallback } from 'react';
import { Card } from '../components/ui/card';
import { CalculatorDisplay } from '../components/calculator/CalculatorDisplay';
import { CalculatorButton } from '../components/calculator/CalculatorButton';
import { useCalculator } from '../hooks/useCalculator';
import { Operation } from '../types/calculator';

export const CalculatorPage = () => {
  const { display, error, clear, inputNumber, inputDecimal, inputOperation, calculate } = useCalculator();

  const handleButtonClick = useCallback((value: string) => {
    if (value >= '0' && value <= '9') {
      inputNumber(value);
    } else if (value === '.') {
      inputDecimal();
    } else if (value === 'C') {
      clear();
    } else if (value === '=') {
      calculate();
    } else {
      switch (value) {
        case '+':
          inputOperation(Operation.ADD);
          break;
        case '-':
          inputOperation(Operation.SUBTRACT);
          break;
        case '×':
          inputOperation(Operation.MULTIPLY);
          break;
        case '÷':
          inputOperation(Operation.DIVIDE);
          break;
      }
    }
  }, [inputNumber, inputDecimal, clear, calculate, inputOperation]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-sm p-6 space-y-4 shadow-xl">
        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold text-foreground">Calculator</h1>
        </div>
        
        <CalculatorDisplay value={display} error={error} />
        
        <div className="grid grid-cols-4 gap-3">
          {/* Row 1 */}
          <CalculatorButton 
            value="C" 
            type="clear" 
            onClick={handleButtonClick}
            className="col-span-2" 
          />
          <CalculatorButton value="÷" type="operation" onClick={handleButtonClick} />
          <CalculatorButton value="×" type="operation" onClick={handleButtonClick} />
          
          {/* Row 2 */}
          <CalculatorButton value="7" type="number" onClick={handleButtonClick} />
          <CalculatorButton value="8" type="number" onClick={handleButtonClick} />
          <CalculatorButton value="9" type="number" onClick={handleButtonClick} />
          <CalculatorButton value="-" type="operation" onClick={handleButtonClick} />
          
          {/* Row 3 */}
          <CalculatorButton value="4" type="number" onClick={handleButtonClick} />
          <CalculatorButton value="5" type="number" onClick={handleButtonClick} />
          <CalculatorButton value="6" type="number" onClick={handleButtonClick} />
          <CalculatorButton value="+" type="operation" onClick={handleButtonClick} />
          
          {/* Row 4 */}
          <CalculatorButton value="1" type="number" onClick={handleButtonClick} />
          <CalculatorButton value="2" type="number" onClick={handleButtonClick} />
          <CalculatorButton value="3" type="number" onClick={handleButtonClick} />
          <CalculatorButton 
            value="=" 
            type="equals" 
            onClick={handleButtonClick}
            className="row-span-2" 
          />
          
          {/* Row 5 */}
          <CalculatorButton 
            value="0" 
            type="number" 
            onClick={handleButtonClick}
            className="col-span-2" 
          />
          <CalculatorButton value="." type="decimal" onClick={handleButtonClick} />
        </div>
      </Card>
    </div>
  );
};