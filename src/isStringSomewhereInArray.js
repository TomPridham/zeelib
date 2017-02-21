// @flow

// [Str] -> Str -> Bool
const isStringSomewhereInArray = (arr: Array<any>, el: string) : bool =>
  arr.some((a) =>
    el.toLowerCase().includes(a.toLowerCase()) || a.toLowerCase().includes(el.toLowerCase()))

export default isStringSomewhereInArray
