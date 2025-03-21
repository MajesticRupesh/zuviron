import { FC } from 'react';

interface VideoBackgroundProps {
  videoUrl: string;
  className?: string;
  children?: React.ReactNode;
}

const VideoBackground: FC<VideoBackgroundProps> = ({ videoUrl, className = '', children }) => {
  return (
    <div className={`relative w-full h-full ${className}`}>
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.7)' }}
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/50 to-gray-900/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
};

export default VideoBackground; 