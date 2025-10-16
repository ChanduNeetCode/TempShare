# UCJ Relation Manager v1.0.0

## Installation

Using npm -
$ npm install @icicibank/tsg1_2259_rn_dff_library@*.*.*

How to use in UCJ Relation Manager function -
import { IMUCJRelationManager} from '@icicibank/tsg1_2259_rn_dff_library'

## IMUCJRelationManager

| Props                   | Params                | isRequire | Description                              |
| ----------------------- | --------------------- | --------- | ---------------------------------------- |
| baseURL                 | string                | Yes       | Base URL                                 |
| keys                    | string[]              | No        | list of keys to concatinate with base URL|
| isOpenInAppBrowser      | boolean               | Yes       | Whether to open URL in browser or not    |


### IMUCJRelationManager example

```JSX
  <TouchableOpacity
        onPress={() => {
          const result = IMUCJRelationManager(data);
          if (typeof result === 'string') {
          }
        }}
        style={styles.container}>
        <Text style={styles.message}>ClickHere</Text>
      </TouchableOpacity>
```

### IMUCJRelationManager example
```
    const data: UCJRelationManagerProps = {
        baseURL: 'https://dummy.restapiexample.com',
        keys: ['api', 'v1', 'employees'],
        isOpenInAppBrowser: true
    }
```