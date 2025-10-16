# UCJ Relation Manager v1.0.0

## Installation

Using npm -
$ npm install @icicibank/tsg1_2259_rn_dff_library@*.*.*

How to use in UCJ Relation Manager function -
import {
  generateUcjUrl,
  IMUCJCategory,
  IMUCJParameter,
} from 'dff_library';

## IMCheckbox

| Props                   | Params                | isRequire | Description                              |
| ----------------------- | --------------------- | --------- | ---------------------------------------- |
| ucjCategory        | IMUCJCategory                   | Yes        |  type of ucj categories      |
| urlParams       | IMUCJParameter                   | Yes        | user details         |
| iUPCategory               | string               | No        | category iUP                 |
| isOpenInAppBrowser               | boolean               | No        | navigate to web link                |


### IMUCJUrl example

```JSX
    <TouchableOpacity
        onPress={async () => {
          let result = await generateUcjUrl(
            IMUCJCategory.UCJ_AUTO_LOAN_DD,
            ucjParamererData,
          );
          console.log(result);
        }}
        style={styles.container}>
        <Text style={styles.message}>ClickHere</Text>
      </TouchableOpacity>
```

### IMUCJUrl example
```
const ucjParamererData: IMUCJParameter = {
  spdcWaiverFlag: 'Y',
  accountNumber: '021201563583',
  firstName: 'ICICI',
  lastName: 'XYZ',
  destProd: 'AL - PA',
  mobNum: '9999999999',
  userId: '515793094',
  dob: '01111986',
  loanAmt: '2000000',
  state: 'KARNATAKA',
  tenure: '84',
  apiTime: '0720220349121',
};
```