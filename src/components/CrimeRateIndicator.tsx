interface CrimeRateIndicatorProps {
  rate: number; // 0 to 5
  size?: 'sm' | 'md' | 'lg';
}

export function CrimeRateIndicator({ rate, size = 'md' }: CrimeRateIndicatorProps) {
  // Determine which bars should be filled and their colors
  const getBarStates = () => {
    if (rate <= 1.5) {
      // Low - 1 green bar
      return [
        { filled: true, color: 'bg-green-600' },
        { filled: false, color: 'bg-gray-300' },
        { filled: false, color: 'bg-gray-300' }
      ];
    } else if (rate <= 3) {
      // Medium - 2 yellow bars
      return [
        { filled: true, color: 'bg-yellow-500' },
        { filled: true, color: 'bg-yellow-500' },
        { filled: false, color: 'bg-gray-300' }
      ];
    } else {
      // High - 3 red bars
      return [
        { filled: true, color: 'bg-red-600' },
        { filled: true, color: 'bg-red-600' },
        { filled: true, color: 'bg-red-600' }
      ];
    }
  };

  const barStates = getBarStates();

  const sizeClasses = {
    sm: { container: 'gap-0.5', bar: 'w-1' },
    md: { container: 'gap-1', bar: 'w-1.5' },
    lg: { container: 'gap-1.5', bar: 'w-2' }
  };

  const heights = ['h-2', 'h-3', 'h-4'];

  return (
    <div className={`flex items-end ${sizeClasses[size].container}`}>
      {barStates.map((bar, index) => (
        <div
          key={index}
          className={`${sizeClasses[size].bar} ${heights[index]} rounded-sm transition-colors ${bar.color}`}
        />
      ))}
    </div>
  );
}
