# FileManager v1.0.0

## Installation

Using npm -
$ npm install @icicibank/tsg1_2259_rn_dff_library@*.*.*

How to use IMBaseServices function -
import { IMBaseServices } from '@icicibank/tsg1_2259_rn_dff_library'

## IMBaseServices

| Props             | Params | isRequire | Description                                             |
| ----------------- | ------ | --------- | ------------------------------------------------------- |
| mockFileName      | string | No        | file name of the mock api manager                       |
| isMock            | boolean| No        | mock api data is true or false                          |
| data              | string | No        | request body                                            |
| headers           | string | No        | request header                                          |
| url               | string | Yes       | api url                                                 |
| method            | string | Yes       | api method get,post,put,patch,delete                    |
| baseUrl           | string | Yes       | Base api path                                           |
| isMultiPart       | boolean| No        | isMultiPart use for upload image, video & audio file    |
| isEncrypt         | boolean| No        | if pass data in encrypt format then use                 |
| responseType      | boolean| No        | responseType if want to pass                            |

### IMBaseServices example

```JS
    const res = await IMBaseServices({
        env: enviornment.SIT,
        method: HttpMethods.POST,
        url: url,
        headers: header2,
        data: data2,
        isMock: false,
        isEncrypt: true
      });


```
const data2 = {
  "head": {
     "requestDtTm": "2024-02-09 10:15:13.003"
}
}
```

```
const header2 = {
  'userID_Type':'UID',
  'trcID':'user1-20191103141009-1',
  'version':'10.0.0.1',
  'secret':'RriKVAggxZ7rq8NL6TO31iN5hypAstI=',
  'Content-Type':'application/json',
  'Authorization':'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJCSHdTbDVkUDVJTHRCWS1yQjZXdUJMRGxFbHR5X2ptaTBaLVN4UUZrMzRnIn0.eyJleHAiOjE3MzA0NjQwOTIsImlhdCI6MTcyODMwNDA5MiwianRpIjoiODlkZDMwMDItZmU1Yy00OTM1LTgwNjItZjk0N2QyYjliZmE0IiwiaXNzIjoiaHR0cHM6Ly9jYW0tcm91dGUtZGltZmEtZmlwcy11YXQuYXBwcy5tZmFvY3Bjb3JwdWF0LmljaWNpYmFua2x0ZC5jb20vYXV0aC9yZWFsbXMvaWNpY2kiLCJzdWIiOiI2MzRiNzA3OS05MDI0LTRiZWQtYmU1MS03NGFmYzhiMTA4OWIiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiIxNTAwMDAwMDAxMDAxOSIsInNlc3Npb25fc3RhdGUiOiJmNWU0OGQ4MS1lNTYzLTQzYmMtOWRmYy01ZTVjOTNkYzM1YzkiLCJhY3IiOiIxIiwicmVzb3VyY2VfYWNjZXNzIjp7IjE1MDAwMDAwMDEwMDE5Ijp7InJvbGVzIjpbIjE1MDAwMDAwMDEwMDE5Il19fSwic2NvcGUiOiJvcGVuaWQgZW1haWwgY3VzdG9tX2hlYWRlcnMgcHJvZmlsZSIsInNpZCI6ImY1ZTQ4ZDgxLWU1NjMtNDNiYy05ZGZjLTVlNWM5M2RjMzVjOSIsIkNBTV9NT0JJTEVfTk8iOiIrOTE5OTUxMzk5Njg3IiwidG9rZW4tdHlwZSI6IkZJTkFOQ0lBTCIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJDQU1fVVNFUl9JRCI6IklDSS41ODM5MjkyMTMuNTgzOTI5MjEzIiwiQ0FNX3VzZXJuYW1lIjoiNjZmYTkwZjRhZDE1ODI3MzgwYWRjM2JmIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiNjZmYTkwZjRhZDE1ODI3MzgwYWRjM2JmIiwiZGV2aWNlLWlkIjoiMTk0QTc1QzEtNjQyNy00NEMyLTk1ODQtMTE2M0RFMDk4OEM3IiwiQ0FNX0VNQUlMX0lEIjoiU0hBTElOSS5MS09AR01BSUwuQ09NIn0.AUTjAZUNCjq2q55-V0c9E6t8uvh60Y56IAKDsvukhhRL8Nq7u50g3NnFyRYulUpiZA-4igHEfmVyxoKx5W1mIeM-SmJpZQQrQGiLqOaCvC-9ViUfmcWNImVLzgWuglYWeCrnz_LunNbB4Anm4RIL3mk8m5_ch7f7njkqQhcwDw8hjZ4CKNHYV-YpsnqcVT4aN-g5jpkp7VdAsjhZ_ypni4j3BDrBT0cOofoPZtWQef3Cay7HBKsCm3uuAp1_1kjHDnp2Q-C2_G11M1AK_QlZJAizL-V4UInDtGtI5SbzbkrXHYHmNzbmiJ7Kb_5ubT6STxBR64OgXqVzDcPnSUaQJQ',
  'deviceID':'03022a5ebbd5c78f',
  'userID':'583929213',
  'Cookie':'9169a7d63ab337875eb928edae9b6099=54d89e787ec65416623168e847444c80; 16f7fe2c48476b92886a4c27df01b979=e34e660029aa21efcb64f2997c4f172f; 87ac0a66d431ffeb626cf8151e7850eb=609d7a1f450305057081d4aadd5a2814; 5456fe2a1c9b0865c1bc3251704e4321=079daf3268db58ef9b0e7ae248057db1; 16f7fe2c48476b92886a4c27df01b979=954d6acd38953902ca8fd802fbd31098; 16f7fe2c48476b92886a4c27df01b979=6cf6410897af097ab32ed56031a00bf3; 5456fe2a1c9b0865c1bc3251704e4321=2979a3118661b2d670614da5cf07d087',
  'orgID':'ICI.583929213.583929213',
  'x-apikey':'t19Mi6U6MLwkM1KhG2Uq0czwyAA56BTYTzIhx131IbOMItaZ',
  'mobileNumber':'+919951399687',
 'device-id':'194A75C1-6427-44C2-9584-1163DE0988C7',
};

```
