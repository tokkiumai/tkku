import type { Config } from 'jest'

const config: Config = {
  transform: {
    "^.+\\.(t|j)sx?$": "ts-jest"
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"]
}

export default config
