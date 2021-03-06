// @flow

import objectToString from './object-to-string'

/**
 * Returns true if value is a map
 * @example
 * isMap(new Map()) // => true
 */

const isMap = (v: mixed): bool =>
  objectToString(v) === '[object Map]'

export default isMap
