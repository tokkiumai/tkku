```shell
yarn add @tkku/strsnaketocamelcase
```

Converts a string snake case typing into camel case with for loop iteration


#### Size limit is 200 B

### Usage
```ts
strSnakeToCamelCase('snake_case') -> 'snakeCase'
strSnakeToCamelCase('snake__case') -> 'snakeCase' // double underscore is removed
strSnakeToCamelCase('_snake_case') -> 'snakeCase' // lading underscore is removed 
```
