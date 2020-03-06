import { schema } from 'normalizr';

export const trackSchema = new schema.Entity('tracks', {}, { idAttribute: 'trackId' });

export const favoritesSchema = new schema.Entity('favorites', {
  track: trackSchema,
});

export const reviewSchema = new schema.Entity('reviews', {
  track: trackSchema,
});
