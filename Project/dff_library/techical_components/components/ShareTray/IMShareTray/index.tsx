import Share from 'react-native-share';
import RNFetchBlob from 'react-native-blob-util';

const IMShareTray = async (
  contentTitle: string,
  message: string,
  url: string,
  imageUrl: string,
  pdfBuffer ?: any,
  filePath ?: any,
  documentname?: any

) => {
  const downloadImage = async (): Promise<string> => {
    const imagePath = `${RNFetchBlob.fs.dirs.CacheDir}/image.jpg`;
    await RNFetchBlob.config({
      fileCache: true,
      path:imagePath,
  }).fetch('GET',imageUrl);
    return imagePath
  };
  const getBase64Image = async (imagePath: string): Promise<string> => {
    const base64 = await RNFetchBlob.fs.readFile(imagePath, 'base64');
    return base64;
  };
  const docname = documentname || 'document';
  let pdfFilePath =
      (filePath || RNFetchBlob.fs.dirs.CacheDir) +
      '/' +
      docname +
      '.pdf';
  try {
   if(pdfBuffer){
    await RNFetchBlob.fs.writeFile(pdfFilePath, pdfBuffer, 'base64')
      const options = {
        message: `${message}\n${url}`,
        title: contentTitle,
        url: pdfBuffer ? `file://${pdfFilePath}` : undefined,
      };
      await Share.open(options);
    }
    let base64Image;
    if (imageUrl) {
      const imagePath = await downloadImage();
      base64Image = await getBase64Image(imagePath);
    }
    const options = {
      message: `${message}\n${url}`,
      title: contentTitle,
      url: base64Image ? `data:image/jpeg;base64,${base64Image}` : '',
    };

    const result = await Share.open(options);
    if (result.success) {
      //shared successfully
    } else {
      //dismissed or failed
    }
  } catch (error: any) {
    return false;
  }
  return true;
};

export default IMShareTray;