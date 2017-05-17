// @flow

/**
 * Takes a camelCase string and returns one in snake_case
 */

const camelCaseToSnakeCase = (str: string): string =>
  str.replace(/[A-Z]/g, (match) =>
    '_' + match.toLowerCase()).toLowerCase()

export default camelCaseToSnakeCase
