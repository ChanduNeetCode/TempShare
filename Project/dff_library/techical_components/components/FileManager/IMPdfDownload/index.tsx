import RNFetchBlob from 'react-native-blob-util';
import RNFS from 'react-native-fs';

import { PDFDownloadProps } from './types';
import { IMBaseServices } from '../../BaseServices';
import { HttpMethods } from '../../BaseServices/IMBaseServices';
import FileViewer from 'react-native-file-viewer'


const Buffer = require('buffer').Buffer;
export const openPDFNativeOptions = async (filePath: string) => {
  try {
    await FileViewer.open(filePath, {
      showAppsSuggestions: true,
      showOpenWithDialog: true,
    })
 
  } catch (error) {
    console.error('Error opening file', error)
  }
}
export const PdfDownload = async ({
  downloadPDF = true,

  documentname,
  filePath,
  url,

  base64Response,
  headers,
}: PDFDownloadProps) => {
  let resp = {
    isSuccess: false,
    description: '',
  };
  try {
    const docname = documentname || 'document';
    let filepathValue =
      (filePath || RNFetchBlob.fs.dirs.DocumentDir) +
      '/' +
      docname +
      '.pdf';

    // let filepathValue = RNFS.DocumentDirectoryPath

    console.log("filepathValue --->",filepathValue);
    

    let base64Data: string = base64Response;
    if (downloadPDF && !url) {
      resp.description ="URL can't be empty";
    } else if (!downloadPDF && !base64Response) {
      resp.description = "BASE64 data can't be empty";
    } else {
      if (downloadPDF && url) {
        const responseFromApi: any = await IMBaseServices({
          method: HttpMethods.GET,
          url: url,
          isMock: false,
          isEncrypt: false,
          responseType: 'arraybuffer',
          headers: headers,
        });
        if (!responseFromApi.isSuccess) {
          resp.description = responseFromApi.resData;
          return resp;
        }
        base64Data = Buffer.from(
          responseFromApi?.response,
          'binary',
        ).toString('base64');
      }
      await RNFS.writeFile(filepathValue, base64Data, 'base64')
        .then(() => {
          resp.isSuccess = true;
          resp.description = filepathValue;
        })
        .catch(error => {
          resp.description = error;
        });
      }
  }
  catch (err: any) {
    resp.description = err.toString();
  }
  return resp;
};
