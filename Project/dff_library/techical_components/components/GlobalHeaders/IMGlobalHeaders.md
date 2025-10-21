# FileManager v1.0.0

## Installation

Using npm -
$ npm install @icicibank/tsg1_2259_rn_dff_library@_._.\*
$ npm i react-native-fs

How to use FileManager function -
import { IMGlobalHeader } from '@icicibank/tsg1_2259_rn_dff_library'

### IMFileManager example (File Creation)

1)Create instance of the singleton class
const globalHeader = IMGlobalHeader.getInstance();
2)Need to set the data
Example:-
globalHeader.setSecret('RriKVAggxZ7rq8NL6TO31iN5hypAstI=');
globalHeader.setOrgId('ICI.584000799.584000799')
globalHeader.setTraceID('user1-20230214165514-1');
globalHeader.setApiKey('t19Mi6U6MLwkM1KhG2Uq0czwyAA56BTYTzIhx131IbOMItaZ');
globalHeader.setOSType('');
3)Get the data
const globalHeader = IMGlobalHeader.getInstance();
const version = globalHeader.returnAppVersionBuild();
