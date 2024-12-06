export const VIDEO_PATHS = {
  about: '/media/videos/sebbedj partyfilm.mp4'
};

export const loadVideo = async (videoKey) => {
  try {
    const videoPath = VIDEO_PATHS[videoKey];
    if (!videoPath) {
      throw new Error(`Video path not found for key: ${videoKey}`);
    }
    
    return {
      path: videoPath,
      type: 'video/mp4'
    };
  } catch (error) {
    console.error('Error loading video:', error);
    throw error;
  }
};