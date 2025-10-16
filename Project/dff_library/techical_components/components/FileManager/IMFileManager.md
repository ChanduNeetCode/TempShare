# FileManager v1.0.0

## Installation

Using npm -
$ npm install @icicibank/tsg1_2259_rn_dff_library@*.*.*
$ npm i react-native-fs

How to use FileManager function -
import { IMFileManager } from '@icicibank/tsg1_2259_rn_dff_library'

## IMFileManagerProps

| Props             | Params | isRequire | Description                                             |
| ----------------- | ------ | --------- | ------------------------------------------------------- |
| androidFilePath   | string | No        | Android : File Path. Default is DownloadDirectoryPath   |
| androidFolderPath | string | No        | Android : Folder Path. Default is DownloadDirectoryPath |
| appendContent     | string | No        | Content which should be added for APPEND Operation      |
| content           | string | No        | Initial Content while creating file                     |
| fileName          | string | No        | File Name for File Operations                           |
| folderName        | string | No        | Folder Name for Folder Creation                         |
| iosFilePath       | string | No        | IOS : File Path. Default is DocumentDirectoryPath       |
| iosFolderPath     | string | No        | IOS : Folder Path. Default is DocumentDirectoryPath     |
| operation         | string | Yes       | File Operation that should be done                      |
| updateContent     | string | No        | Updated Content to overwrite file for UPDATE Operation  |

### IMFileManager example (File Creation)

```JS
        IMFileManager({
          operation:"write",
          content:'This is content',
          fileName:"CreatedFile",
          androidFilePath :"/storage/emulated/0/Download/CreatedFolder"
        )}
```


import { PdfDownload } from 'dff_library';
## IMPDFDownloadProps

| Props             | Params | isRequire | Description                                                  |
| ----------------- | ------ | --------- | ------------------------------------------------------------ |
| downloadPDF       | boolean| No        | true if pdf download from url, false if pdf from base64 data |
| documentname      | string | No        | document name (default is document )                         |
| filePath          | string | No        | file path till document name(default within app)             |
| url               | string | No        | url of the file to be downloaded                             |
| base64Response    | any    | No        | base64 response if pdf download from base64 data             |
| headers           | any    | No        | headers for API Call incase of url                           |

### IMPDFDownload example

```JS
        const url = 'https://www.icicibank.com/content/dam/icicibank/icici-assets/nri-banking/RequestClosureFCNRNRENROFixedDepositRecurringDeposit.pdf';
        //url for pdf that needs to be downloaded
    const pathstored: any = await PdfDownload({
      downloadPDF: false,
      url: url,
      documentname: 'balaji',
      anyuniquenumber: '08',
      base64Response: res,
    });
    // downloads the file at the location with name document8
```


import { IMPdfViewer } from 'dff_library';
## IMPDFViewerProps

| Props                 | Params    | isRequire | Description                                                  |
| --------------------  | --------- | --------- | ------------------------------------------------------------ |
| filePath              | boolean   | Yes       | filePath to open PDF                                         |
| pdfStyle              | ViewStyle | No        | pdf ViewStyle                                                |
| onErrorCallBack       | CallBack  | No        | onErrorCallBack                                              |
| onPageChangedCallBack | CallBack  | No        | onPageChangedCallBack returns currentPage,numberOfPages      |

### IMPdfViewer example

```JS
        const url = 'https://www.icicibank.com/content/dam/icicibank/icici-assets/nri-banking/RequestClosureFCNRNRENROFixedDepositRecurringDeposit.pdf';
        //url for pdf that needs to be downloaded
    <IMPdfViewer 
          filePath={url}
          pdfStyle={{height:300}}
          onPageChangedCallBack={(page, numberOfPages)=>{
            console.log('the currentpage & number ofPages',page,numberOfPages)
          }}
           />
    
```