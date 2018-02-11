// @flow

import test from 'tape'
import pascalCaseToSnakeCase from './pascal-case-to-snake-case'

test('pascalCaseToSnakeCase', (t): void => {
  t.equal(pascalCaseToSnakeCase('FooBar'), 'foo_bar', 'works')
  t.end()
})
