// Collection of all images used in the application
export const images = [
  // Hero images
  'https://images.unsplash.com/photo-1497366216548-37526070297c',
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab',
  'https://images.unsplash.com/photo-1536147116438-62679a5e01f2',
  'https://images.unsplash.com/photo-1557804506-669a67965ba0',
  
  // Case studies images
  'https://images.unsplash.com/photo-1497366811353-6870744d04b2',
  'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf',
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9',
  
  // Product images
  'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89',
  'https://images.unsplash.com/photo-1581094794329-c8112a89af12',
  'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122',
  
  // Background patterns and other images
  'https://images.unsplash.com/photo-1518640467707-6811f4a6ab73',
  'https://images.unsplash.com/photo-1635048424329-a9bfb146d7aa',
  
  // Team member images
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
];

export const preloadImages = async (): Promise<void> => {
  const preloadImage = (src: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = `${src}?auto=format&fit=crop&q=80`;
      img.onload = () => resolve();
      img.onerror = () => reject();
    });
  };

  try {
    await Promise.all(images.map(src => preloadImage(src)));
  } catch (error) {
    console.error('Error preloading images:', error);
  }
}; 