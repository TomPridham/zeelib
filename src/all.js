// @flow

/**
 * Returns true if all items pass predicate fn
 * @example
 * all(lessThanThree, [ 1, 2 ]) // => true
 * all(lessThanThree, [ 1, 2, 3 ]) // => false
 */

const all = <A> (predicate: (A) => bool, list: A[]): bool =>
  !!list.reduce && (typeof predicate === 'function') && list.reduce((result, current) =>
    !result ? false : !!predicate(current), true)

export default all
