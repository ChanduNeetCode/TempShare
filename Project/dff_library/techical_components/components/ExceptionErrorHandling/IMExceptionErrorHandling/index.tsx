import { Platform } from 'react-native';
import * as RNFS from 'react-native-fs';

import {
  createFolder,
  writeFile,
} from '../../../components/FileManager/IMFileManager/index';
import { ExceptionErrorHandlinngProps } from './types';

export default async function IMExceptionErrorHandling({
  componentName,
  errorMessage,
  methodName,
}: ExceptionErrorHandlinngProps): Promise<
  Promise<{ errorMessage: string; componentName: string }> | any
> {
  const today = new Date().toString();

  let folderPath =
    Platform.OS === 'android'
      ? RNFS.DownloadDirectoryPath
      : RNFS.DocumentDirectoryPath;
  folderPath = folderPath + '/' + String(today).slice(0, 10);

  const data =
    errorMessage + '\n' + componentName + '\n' + methodName + '\n' + '\n';

  await createFolder(folderPath);

  const filePath = folderPath + '/' + componentName;
  await writeFile(filePath, data, true);
}
