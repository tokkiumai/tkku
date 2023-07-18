import { strSnakeToCamelCase } from './core'


describe('strSnakeToCamelCase', () => {
  it('leaves lower cased string untouched', () => {
    expect(strSnakeToCamelCase('something')).toBe('something')
  })
  it('converts underscore to uppercase', () => {
    expect(strSnakeToCamelCase('some_underscored_string')).toBe(
      'someUnderscoredString',
    )
  })
  it('returns null when argument is invalid', () => {
    expect(strSnakeToCamelCase(undefined)).toBeNull()
  })
  it('handles double underscore', () => {
    expect(strSnakeToCamelCase('some__string')).toBe('someString')
  })
  it('does not uppercase the first letter if string starts with an _', () => {
    expect(strSnakeToCamelCase('_string_two')).toBe('stringTwo')
  })
})
