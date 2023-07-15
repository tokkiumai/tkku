import { strSnakeToCamelCase } from './core'


describe('strSnakeToCamelCase', () => {
  it('leaves lower cased string untouched', () => {
    expect(strSnakeToCamelCase('something')).toBe('something')
  })
  it('coverts underscore to uppercase', () => {
    expect(strSnakeToCamelCase('some_underscored_string')).toBe(
      'someUnderscoredString',
    )
  })
  it('returns null when argument is invalid', () => {
    expect(strSnakeToCamelCase(undefined)).toBeNull()
  })
})
