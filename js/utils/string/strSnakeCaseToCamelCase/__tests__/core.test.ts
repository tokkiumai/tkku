import { snakeToCamelCase } from '../src'


describe('snakeToCamelCase', () => {
  it('leaves lower cased string untouched', () => {
    expect(snakeToCamelCase('something')).toBe('something')
  })
  it('coverts underscore to uppercase', () => {
    expect(snakeToCamelCase('some_underscored_string')).toBe(
      'someUnderscoredString',
    )
  })
})