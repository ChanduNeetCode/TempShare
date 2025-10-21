
## Installation

Using npm:
$ npm install @icicibank/tsg1_2259_rn_dff_library@*.*.*

## JSX Implementation for IMPersistentStorage

import {
  insertingAllMsgToLocalDB,
  selectErrorDetails,
} from '@icicibank/tsg1_2259_rn_dff_library';


-> By using the selectErrorDetails function you can get the message
->To use the selectError Details first we need to call the insertingAllMsgToLocalDB function to insert all the error code message in the Database then we can use the selectErrorDetails function


### Props in insertingAllMsgToLocalDB
| **_attribute_**     | **_format_** | **_description_**                             | **_isRequired_** |
| ------------------- | ------------ | ----------------------------------------------| ---------------- |
| fromNative          | boolean      |  boolean variable for error messages from native| Optional         |
| env                 | String       |  environment                                  | Optional         |

Usage of selectErrorDetails 

await selectErrorDetails(ErrorCode here);

### Example of the Persistent Storage

    const messageData = await insertingAllMsgToLocalDB(enviornment.CUG,true);
    if (messageData) {
      const errorCode = selectErrorDetails('LaBu1347');
    }
