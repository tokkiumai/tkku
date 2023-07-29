## Installation
```shell
yarn add @tkku/strsnaketocamelcase
```

Converts a string from snake case typing into camel case

### Usage
```ts
/** size is less than 200 B */
import { strSnakeToCamelCase } from '@tkku/strsnaketocamelcase'

strSnakeToCamelCase('string') => string | null

('snake_case') => 'snakeCase'
 /** double underscore is removed */
('snake__case') => 'snakeCase'
/** leading underscore is removed  */
('_snake_case') => 'snakeCase'
```
