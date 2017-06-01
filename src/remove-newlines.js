// @flow

/**
 * Remove all newlines from string
 */

const removeNewlines = (str: string): string =>
  str.replace(/(\r\n|\n|\r)/gm, '')

export default removeNewlines