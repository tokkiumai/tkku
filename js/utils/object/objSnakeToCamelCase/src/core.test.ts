import { objSnakeToCamelCase } from './core'

describe('objSnakeToCamelCase', () => {
  it('converts underscore keys to upper cased', () => {
    const subject = {
      some_field: 1,
      another_field: 'str',
    }
    expect(objSnakeToCamelCase(subject)).toStrictEqual({
      someField: 1,
      anotherField: 'str',
    })
  })
  it('handles nested objects', () => {
    const subject = {
      underscored_field: 'str',
      nested_object: {
        some_field: 1,
        another_nested: {
          number_field: 5,
        },
      },
    }
    expect(objSnakeToCamelCase(subject)).toStrictEqual({
      underscoredField: 'str',
      nestedObject: {
        someField: 1,
        anotherNested: {
          numberField: 5,
        },
      },
    })
  })
  it('handles arrays', () => {
    const subject = {
      array_value: [1, 2, 3],
      underscore_value: 'value',
    }
    expect(objSnakeToCamelCase(subject)).toStrictEqual({
      arrayValue: [1, 2, 3],
      underscoreValue: 'value',
    })
  })
  it('handles arrays with nested objects in it', () => {
    const subject = {
      array_value: [1, 2, 3, { some_object: { more_nested: 'str' } }],
      underscore_value: 'value',
    }
    expect(objSnakeToCamelCase(subject)).toStrictEqual({
      arrayValue: [1, 2, 3, { someObject: { moreNested: 'str' } }],
      underscoreValue: 'value',
    })
  })
  it('excludes provided keys from mapping', () => {
    const subject = {
      key_1: 'some key',
      key_2: 'another key',
    }
    expect(objSnakeToCamelCase(subject, ['key_1'])).toStrictEqual({
      key_1: 'some key',
      key2: 'another key',
    })
    expect(objSnakeToCamelCase(subject, 'key_1')).toStrictEqual({
      key_1: 'some key',
      key2: 'another key',
    })
  })
  it('supports nested keys excluding', () => {
    const subject = {
      key_1: 'some_key',
      key_2: 'not excluded',
      key_3: {
        key_2: 'excluded',
      },
    }
    expect(objSnakeToCamelCase(subject, ['key_3.key_2'])).toStrictEqual({
      key1: 'some_key',
      key2: 'not excluded',
      key3: {
        key_2: 'excluded',
      },
    })
  })
  it('supports more than 1 level of recursion for keys excluding', () => {
    const subject = {
      key_1: 'some_key',
      key_2: 'not excluded',
      key_3: {
        key_2: 'not',
        key_4: {
          key_2: 'excluded',
        },
      },
    }
    expect(objSnakeToCamelCase(subject, ['key_3.key_4.key_2'])).toStrictEqual(
      {
        key1: 'some_key',
        key2: 'not excluded',
        key3: {
          key2: 'not',
          key4: {
            key_2: 'excluded',
          },
        },
      },
    )
  })
  it('excludes top level key by leading dot without touching the deep', () => {
    expect(objSnakeToCamelCase({ key_1: '', key_2: { key_1: '' } }, '.key_1')).toStrictEqual({
      key_1: '', key2: { key1: '' }
    })
  })
})