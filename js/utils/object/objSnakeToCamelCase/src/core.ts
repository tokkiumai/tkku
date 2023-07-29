import { strSnakeToCamelCase } from '@tkku/strsnaketocamelcase'

// type SnakeToCamelCase<S> =
//   S extends `${infer T}_${infer U}_${infer V}` ?
//     `${T}${Capitalize<U>}${Capitalize<SnakeToCamelCase<V>>}` :
//     S extends `${infer T}_${infer U}` ?
//       `${T}${Capitalize<SnakeToCamelCase<U>>}` :
//       S
//
// type ObjSnakeToCamelCaseSingle<O> = O extends object ? {
//   [K in keyof O as SnakeToCamelCase<K>]: O[K]
// } : O
//
// // type ObjSnakeToCamelCaseNested<T> = T extends object ? {
// //   [K in keyof T as SnakeToCamelCase<K & string>]: ObjSnakeToCamelCaseNested<T[K]>
// // } : T
//
// type ObjSnakeToCamelCaseNested<O> = O extends object ? {
//   [K in keyof O as SnakeToCamelCase<K>]: ObjSnakeToCamelCaseNested<O[K]>
// } : O
//
// /** test */
// const obj = {
//   // [{ key_1: 'a' }],
//   key_2: 'afsafg',
//   key_3: {
//     key_4: 'bsfafa'
//   }
// }
// type B = ObjSnakeToCamelCaseNested<typeof obj>

type Keys = string | string[] | Map<string, number>
/**
 * Recursively replaces the snake cased keys in an object with camel cased
 * To exclude a keys - provide second "exclude" argument (string | Array<string)
 *
 * Returns null if passed objects is not an instance of Object
 *
 * @returns Object | null
 * */
export function objSnakeToCamelCase<T>(obj: Record<string, any>, exclude: Keys = [], nestedKey = ''): T | null {
  function getExcludedKeys(keys: Keys): Map<string, number> {
    if (keys instanceof Map) {
      return keys
    }
    let keysArr = Array.isArray(keys) ? keys : [keys]
    let map = new Map()
    keysArr.forEach(key => {
      map.set(key, 1)
    })
    return map
  }
  if (!(obj instanceof Object)) {
    return null
  }
  let result: Record<string, any> = {}
  let excluded = getExcludedKeys(exclude)
  for (let [key, value] of Object.entries(obj)) {
    if (excluded.has(key)) {
      result[key] = value
      continue
    }
    if (nestedKey && excluded.has(`${nestedKey}.${key}`)) {
      result[key] = value
      continue
    }
    let _key = strSnakeToCamelCase(key) as string
    if (value instanceof Object) {
      if (Array.isArray(value)) {
        result[_key] = value.map(item => {
          if (item instanceof Object) {
            return objSnakeToCamelCase(item, excluded, nestedKey ? `${nestedKey}.${key}` : key)
          }
          return item
        })
        continue
      }
      result[_key] = objSnakeToCamelCase(value, excluded, nestedKey ? `${nestedKey}.${key}` : key)
      continue
    }
    result[_key] = value
  }
  return result as T
}
