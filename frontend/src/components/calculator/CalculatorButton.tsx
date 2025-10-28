import { Button } from '../ui/button';
import { cn } from '../../lib/utils';
import { CalculatorButtonProps } from '../../types/calculator';

export const CalculatorButton = ({ value, type, onClick, className }: CalculatorButtonProps) => {
  const getButtonVariant = () => {
    switch (type) {
      case 'operation':
      case 'equals':
        return 'default';
      case 'clear':
        return 'destructive';
      default:
        return 'secondary';
    }
  };

  const getButtonClasses = () => {
    const baseClasses = 'h-16 text-lg font-semibold transition-all duration-150 active:scale-95';
    
    switch (type) {
      case 'operation':
        return cn(baseClasses, 'bg-primary hover:bg-primary/90 text-primary-foreground');
      case 'equals':
        return cn(baseClasses, 'bg-primary hover:bg-primary/90 text-primary-foreground font-bold');
      case 'clear':
        return cn(baseClasses, 'bg-destructive hover:bg-destructive/90 text-destructive-foreground');
      default:
        return cn(baseClasses, 'bg-muted hover:bg-muted/80 text-foreground');
    }
  };

  return (
    <Button
      variant={getButtonVariant()}
      size="lg"
      onClick={() => onClick(value)}
      className={cn(getButtonClasses(), className)}
    >
      {value}
    </Button>
  );
};