# ExceptionErrorHandling v1.0.0

## Installation

Using npm -
$ npm i dff_library
$ npm i react-native-fs

How to use ExceptionErrorHandling function -
import { ExceptionErrorHandling } from 'dff_library'

## IMExceptionErrorHandlingProps

| Props         | Params | isRequire | Description                                                                                       |
| ------------- | ------ | --------- | ------------------------------------------------------------------------------------------------- |
| componentName | string | Yes       | The Error Message or Exceptiopns has been occured in which component is to be sent                |
| componentName | string | Yes       | The Error Message or Exceptiopns has been occured in which method of that component is to be sent |
| errorMessage  | string | Yes       | The Error Message or Exceptiopns occured is to be sent to insert into the file manage             |

### IMExceptionErrorHandling example

```JS
       IMExceptionErrorHandling({
                componentName: 'ExceptionErrorHandlingDemo',
                errorMessage: 'ErrorMessage',
              });
```
