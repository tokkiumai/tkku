export function snakeToCamelCaseObj<T>(
  obj: Record<string, any>,
  exclude: string | string[] = [],
  nestedKey = '',
): T {
  const result: Record<string, any> = {}
  const excluded = Array.isArray(exclude) ? exclude : [exclude]

  for (const [key, value] of Object.entries(obj)) {
    /** the key is excluded explicitly */
    if (excluded.includes(key)) {
      result[key] = value
      continue
    }

    /** the key is excluded by nested recursion */
    if (
      nestedKey &&
      excluded.some(excludedKey => excludedKey === `${nestedKey}.${key}`)
    ) {
      result[key] = value
      continue
    }

    /** the value is a nested object */
    if (value instanceof Object) {
      /** the value might be an array of various types */
      if (Array.isArray(value)) {
        result[snakeToCamelCase(key)] = value.map(item => {
          if (item instanceof Object) {
            return snakeToCamelCaseObj(
              item,
              excluded,
              nestedKey ? `${nestedKey}.${key}` : key,
            )
          }

          return item
        })

        continue
      }

      result[snakeToCamelCase(key)] = snakeToCamelCaseObj(
        value,
        excluded,
        nestedKey ? `${nestedKey}.${key}` : key,
      )
      continue
    }

    result[snakeToCamelCase(key)] = value
  }

  return result as T
}