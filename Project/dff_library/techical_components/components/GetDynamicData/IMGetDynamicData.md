# getDynamicDataProps v1.0.0

## Installation

Using npm -
$ npm install @icicibank/tsg1_2259_rn_dff_library@*.*.*

How to use getDynamicDataProps function -
import { getDynamicDataProps } from '@icicibank/tsg1_2259_rn_dff_library'

## getDynamicDataProps

|       Props            |       Params       | isRequire | Description                                             |
| ------------------     | -------------------| --------- | ------------------------------------------------------- |
| jsonFileName           | string             | No        | jsonFileName to fetch the data mandatory when not master|
| env                    | environment|string | No        | environment variable                                    |
| category               | category enum      | No        | category name (invest/insure/offers/rewards/preapproved/dashboard)|
| enumtype               | enumtype enum      | Yes       | type ( master/branchmaster/other/toooltip)              |
| moduleName             | moduleName enum    | No        | moduleName (I&I/Offers/Services/Loans/FAQ/Blogs)        |
| subcategory            | subcategory enum   | No        | subcategory                                             |
| baseURLtype            | type enum          | No        | type (modules/support)                                  |

### getDynamicDataProps example (Data Delivery)

const res = await getDynamicData({
      enumtype:enumType.other,
      env:enviornment.DEV,
      type:types.modules,
      moduleName:moduleName.investInsure,
      category:category.insure,
      subcategory:subCategory.lifeInsuranceCancerCover,
      jsonFileName: 'etb-ri',
    });
    if(res.success){
      setData(res.response)
    }else{
      console.log('the response',res)
      Alert.alert('Facing issue',res.response)
    }