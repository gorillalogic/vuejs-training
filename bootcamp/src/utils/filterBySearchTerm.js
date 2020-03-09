import { compose, filter, isEmpty } from 'ramda';

export const filterBySearchTerm = (term, dictionary) => {
  const termSanitized = term.toLowerCase().trim();
  if (isEmpty(termSanitized)) {
    return [...dictionary];
  }
  return compose(filter(track => track.trackName.toLowerCase().includes(termSanitized)))(
    dictionary,
  );
};
