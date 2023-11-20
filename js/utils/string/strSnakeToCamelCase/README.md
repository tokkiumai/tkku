## Installation
```shell
yarn add @tkku/strsnaketocamelcase
```

Converts a string from snake case typing into camel case

### Usage
```ts
import { strSnakeToCamelCase } from '@tkku/strsnaketocamelcase'
strSnakeToCamelCase('snake_case_string') //   => 'snakeCaseString'
  
  
('snake_case') //    => 'snakeCase'
  
 /** double underscore is removed */
('snake__case') //   => 'snakeCase'
  
/** leading underscore is removed  */
('_snake_case') //   => 'snakeCase'
```
