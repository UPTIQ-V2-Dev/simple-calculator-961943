import { cn } from '../../lib/utils';

interface CalculatorDisplayProps {
  value: string;
  error?: string | null;
  className?: string;
}

export const CalculatorDisplay = ({ value, error, className }: CalculatorDisplayProps) => {
  const displayValue = error || value;
  const isError = Boolean(error);
  
  return (
    <div
      className={cn(
        'flex items-center justify-end px-6 py-4 bg-muted/50 rounded-lg border-2 min-h-[80px]',
        'text-right font-mono text-4xl font-bold tracking-wider',
        'overflow-hidden break-all',
        isError ? 'text-destructive border-destructive/50' : 'text-foreground border-border',
        className,
      )}
    >
      <span className="truncate">{displayValue}</span>
    </div>
  );
};