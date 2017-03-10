// @flow

// is num power of two
const isPow2 = (n: number): bool =>
  1 << (n.toString(2).length - 1) === n

export default isPow2
