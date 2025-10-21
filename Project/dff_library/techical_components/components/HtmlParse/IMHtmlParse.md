# HtmlParse v1.0.0

## Installation

Using npm -
$ npm install @icicibank/tsg1_2259_rn_dff_library@*.*.*
$ npm i react-native-fs

How to use HtmlParse function -
import { IMHtmlParse } from '@icicibank/tsg1_2259_rn_dff_library'

## HtmlParseProps

| Props             | Params | isRequire | Description                                             |
| ----------------- | ------ | --------- | ------------------------------------------------------- |
| method            | string | No        | Pass method name GET                                    |
| url               | string | Yes       | Pass Url                                                |
| type              | string | Yes       | Pass type from enum                                     |
| divclassName      | string | Yes       | Pass tag name to parse data from HtmlPage               |
| timeout           | number | No        | Pass time for timeout                                   |


### IMHtmlParse example 

```JS

        export enum HtmlPassTypes {
            DIVCLASS = "DIVCLASS",
            HEADER = "HEADER",
            META="META"
        }

       IMHtmlParse(
          {
            method: method,
            url: url,
            type: HtmlPassTypes.META,
            divclassName:['title']
          }
        )


Type :- META        divclassName : - title ,url,description
Type :- DIVCLASS    divclassName : - date,tag
Type :- HEADER      divclassName : - title,link,meta,img



      
```
