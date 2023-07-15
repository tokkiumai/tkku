import { strSnakeToCamelCase } from '@tkku/strsnakecasetocamelcase'

export function objSnakeToCamelCase(
  obj: any,
  exclude: string | string[] = [],
  nestedKey = '',
): any {
  let result: Record<string, any> = {}
  let excluded = Array.isArray(exclude) ? exclude : [exclude]
  for (const [key, value] of Object.entries(obj)) {
    if (excluded.includes(key)) {
      result[key] = value
      continue
    }
    if (
      nestedKey &&
      excluded.some(excludedKey => excludedKey === `${nestedKey}.${key}`)
    ) {
      result[key] = value
      continue
    }
    if (value instanceof Object) {
      if (Array.isArray(value)) {
        result[strSnakeToCamelCase(key)] = value.map(item => {
          if (item instanceof Object) {
            return objSnakeToCamelCase(
              item,
              excluded,
              nestedKey ? `${nestedKey}.${key}` : key,
            )
          }
          return item
        })
        continue
      }
      result[strSnakeToCamelCase(key)] = objSnakeToCamelCase(
        value,
        excluded,
        nestedKey ? `${nestedKey}.${key}` : key,
      )
      continue
    }
    result[strSnakeToCamelCase(key)] = value
  }
  return result
}
