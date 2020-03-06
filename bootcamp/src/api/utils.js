import { all, compose, filter, flip, includes, keys, not, propEq } from 'ramda';

import { SEARCH_ALLOWED_PARAMETERS } from './constants';

/**
 * Read key from local storage
 * @param  {DOMString} keyName - A DOMString containing the name of the key you want to retrieve
 * the value of.
 * @param  {*} defaultValue - Default value
 * @throws {SyntaxError}
 * @return  {*} Parsed value retived by local storage or defaultValue if is a falsy value
 */
export function readLocalStorage(keyName, defaultValue) {
  return JSON.parse(localStorage.getItem(keyName)) || defaultValue;
}

/**
 * Add a key to the storage, or update that key's value if it already exists
 * @param  {DOMString} keyName - A DOMString containing the name of the key you want to
 * create/update.
 * @param  {*} keyValue - Value you want to give the key you are creating/updating
 * @return {void} keyValue
 */
export function saveLocalStorage(keyName, keyValue) {
  localStorage.setItem(keyName, JSON.stringify(keyValue));
}

/**
 * Validate if value is empty and throws and error
 * @param  {*} value - Value to validate
 * @param  {String} key - Used in error message
 * @throws {Error}
 * @return {void}
 */
export function validateEmptyKey(value, key) {
  if (value == null) {
    throw new Error(`Missing "${key}" field`);
  }
}

/**
 * Validate search options object
 * @param  {Object} value - Object to validate
 * @return {boolean}
 */
export const isNotValidSearchOptions = compose(
  not,
  all(flip(includes)(SEARCH_ALLOWED_PARAMETERS)),
  keys,
);

/**
 * Delay function
 * @param  {*} value - value to resolve after 400 ms
 * @return {Promise}
 */
export const delay = value =>
  new Promise(resolve => {
    setTimeout(function() {
      resolve(value);
    }, 400);
  });

export const isStreamable = filter(propEq('isStreamable', true));
