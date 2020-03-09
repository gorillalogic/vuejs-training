const PODCAST_CATEGORIES = ['aerosmith', 'linkin park', 'metalica', 'the doors', 'rolling stones'];

/**
 * Gets a random podcast category
 */
export const getRandomPodcastCategory = () => {
  const offSet = Math.floor(Math.random() * PODCAST_CATEGORIES.length);
  return PODCAST_CATEGORIES[offSet];
};
