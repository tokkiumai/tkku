## Installation
```shell
yarn add @tkku/strsnaketocamelcase
```

Converts a string from snake case typing into camel case

### Usage
```ts
/** size less than 200 B */
import { strSnakeToCamelCase } from '@tkku/strsnaketocamelcase'

('snake_case') -> 'snakeCase'
('snake__case') -> 'snakeCase' // double underscore is removed
('_snake_case') -> 'snakeCase' // leading underscore is removed 
```
