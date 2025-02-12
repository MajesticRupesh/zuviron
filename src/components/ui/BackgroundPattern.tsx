interface BackgroundPatternProps {
  className?: string;
  color?: string;
}

const BackgroundPattern = ({ 
  className = '', 
  color = 'text-gray-100'
}: BackgroundPatternProps) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg
        className={`absolute w-full h-full ${color} opacity-20 transform rotate-12`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id="grid"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 10 0 L 0 0 0 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100" height="100" fill="url(#grid)" />
      </svg>

      <svg
        className={`absolute w-full h-full ${color} opacity-20 transform -rotate-12`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id="dots"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <circle
              cx="2"
              cy="2"
              r="1"
              fill="currentColor"
            />
          </pattern>
        </defs>
        <rect width="100" height="100" fill="url(#dots)" />
      </svg>
    </div>
  );
};

export default BackgroundPattern; 