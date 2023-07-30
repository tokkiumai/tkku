## Installation
```shell
yarn add @tkku/objsnaketocamelcase
```

## Usage
```ts
/** size is less than 200 B */
import { objSnakeToCamelCase } from '@tkku/objsnaketocamelcase'

objSnakeToCamelCase   (object: Record<string, any>, excludeKeys?: string | Array<string>) => object | null
objSnakeToCamelCase<T>(object: Record<string, any>, excludeKeys?: string | Array<string>) => T | null
// returns null if object is not of an object type (non-array)
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
({ some_object: { nested_key: '' }, nested_key: '' }, 'some_object.nested_key') =>
 { someObject:  { nested_key: '' }, nestedKey:  '' }
```
