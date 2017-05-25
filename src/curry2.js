function curry2 (f) {
  console.error('`curry2` is deprecated. Please use `curry` instead.')
  function curried (a, b) {
    switch (arguments.length) {
      case 0: return curried
      case 1: return (b) => f(a, b)
      default: return f(a, b)
    }
  }
  return curried
}

export default curry2
