export function strSnakeToCamelCase(str: string | undefined): string | null {
  if (typeof str !== 'string') {
    return null
  }
  let result = '',
    uppercaseNext = false
  for (let i = 0; i < str?.length; i += 1) {
    if (str[i] === '_') {
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
