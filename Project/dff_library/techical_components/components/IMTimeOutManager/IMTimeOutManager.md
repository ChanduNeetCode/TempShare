# TimeOutManagement v1.0.0

## Installation

Using npm -
$ npm i dff_library

How to use IMTimeOutManagerIOS function -
import { getRefreshToken } from 'dff_library'

If we are getting the 412 token expired error while calling the API, We need to generate the refreshToken.

getRefreshToken() is called to generate the Refresh Token.


```
const handleOnPress = () =>{
    getRefreshToken().then((result) => {
      setRefreshToken(result);
    })
    .catch((error) => {
      console.log("error", error)
    })
  }
  
```