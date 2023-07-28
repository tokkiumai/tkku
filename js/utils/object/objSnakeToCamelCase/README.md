## Installation
```shell
yarn add @tkku/objsnaketocamelcase
```

## Usage
```ts
/** size >200 B */
import { objSnakeToCamelCase } from '@tkku/objsnaketocamelcase'

objSnakeToCamelCase(object) => object | null
objSnakeToCamelCase<T>(object) => T | null

```
### Converting keys
```ts
/** converts nested keys */
({ key_1: '', key_2: { sub_key: '' } }) => 
 { key1:  '', key2:  { subKey:  '' } }

/** converts an array inside an object */
({ key_1: '', key_2: [{ sub_array_key: '' }] }) =>
 { key1:  '', key2:  [{ subArrayKey:  ''  }] }
```

### Excluding keys from mapping
```ts
/** Pass single key to exclude */
({ some_key: '', key_to_exclude: '' }, 'key_to_exclude') =>
 { someKey:  '', key_to_exclude: '' }

/** Pass an array of keys */
({ some_key: '', key_to_exclude: '' }, ['some_key', 'key_to_exclude']) =>
 { some_key: '', key_to_exclude: '' }

/** Pass a nested key */
({ key_1: '', nested_object: { nested_key: '' }}, 'nested_object.nested_key') =>
 { key1:  '', nestedObject:  { nested_key: '' }}
```
