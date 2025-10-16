# IMoverlowMenu v1.0.0

## Installation

Using npm -
$ npm install @icicibank/tsg1_2259_rn_dff_library@*.*.*

How to use in OverflowMenu components -
import { IMPagination } from '@icicibank/tsg1_2259_rn_dff_library'

## IMPagination

| Props                 | Params      | isRequire | Description                                     |
| --------------------- | ----------- | --------- | ----------------------------------------------- |
| pageCount                  | number       | yes        | number of pages |
| onPressItem            |  () => void      | yes        | On press of the page with index                       |
|countStyleProp        |  ViewStyle     | optional    | Style for the count view|
|dotStyleProp    | TextStyle    | optional           | dot style                         |
|leftImg|        JSX element   | yes                 | left image                    |
|rightImg      | JSX element     |yes                | rught image                 |






```JSX
        <IMPagination 
         pageCount={5} 
         onPressItem={(index)=>{
          console.log('page',index)
         }}
         leftImg={
          <ICGeneralChevronLeft
          height={35}
          width={35}
          
         />
         }
         rightImg={
          <ICChevronRight  height={35}
          width={35} />
         }
         />
```
