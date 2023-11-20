export function strSnakeToCamelCase<T>(str: T): T | string {
  if (typeof str !== 'string') {
    return str
  }
  let result = '',
    uppercaseNext = false
  for (let i = 0; i < str?.length; i += 1) {
    if (str[i] === '_') {
      if (i === 0) continue
      uppercaseNext = true
      continue
    }
    if (uppercaseNext) {
      result += str[i].toUpperCase()
      uppercaseNext = false
      continue
    }
    result += str[i]
  }
  return result
}
