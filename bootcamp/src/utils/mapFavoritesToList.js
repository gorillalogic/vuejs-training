import { map, curry } from 'ramda';

export const mapFavoriteTrack = curry((favorites, track) => {
  const favorite = favorites.find(favorite => favorite.trackId === track.trackId);
  return {
    ...track,
    meta: { favoriteId: favorite !== undefined ? favorite.meta.favoriteId : null },
  };
});

export const mapFavoritesToList = (favorites, list) => {
  const mapper = mapFavoriteTrack(favorites);
  return map(mapper, list);
};
