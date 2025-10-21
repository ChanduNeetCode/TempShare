import { Platform } from 'react-native';
import * as RNFS from 'react-native-fs';

import { IMFileManagerProps } from './types';
import { STRINGS, OPERATIONS } from './constants';

export const appendFile = async (filePath: string, appendContent: string) => {
  try {
    let existingContent = await RNFS.readFile(filePath, STRINGS.utf);
    existingContent += '\n' + appendContent;
    await RNFS.writeFile(filePath, existingContent, STRINGS.utf);
    return { message: STRINGS.appendSuccess + ': ' + filePath, success: true };
  } catch (error) {
    return { message: STRINGS.appendError + ': ' + error, success: false };
  }
};

export async function createFolder(folderPath: string) {
  try {
    const folderExists = await RNFS.exists(folderPath);
    if (!folderExists) {
      RNFS.mkdir(folderPath)
        .then(() => {
          return {
            message: STRINGS.folderCreationSuccess + ': ' + folderPath,
            success: true,
          };
        })
        .catch(error => {
          return {
            message: STRINGS.folderCreationError + ': ' + error,
            success: false,
          };
        });
      return {
        message: STRINGS.folderCreationSuccess + ': ' + folderPath,
        success: true,
      };
    } else {
      return {
        message: STRINGS.folderExists + ': ' + folderPath,
        success: false,
      };
    }
  } catch (error) {
    return {
      message: STRINGS.folderCreationError + ': ' + error,
      success: false,
    };
  }
}

const deleteFile = (filePath: string) => {
  return RNFS.unlink(filePath)
    .then(() => {
      return { message: STRINGS.deleteSuccess, success: true };
    })
    .catch(err => {
      return { message: err.message, success: false };
    });
};

const readFile = (filePath: string) => {
  return RNFS.readFile(filePath)
    .then(res => {
      return { message: STRINGS.readSuccess + ' : ' + res, success: true };
    })
    .catch(err => {
      return { message: STRINGS.readError, success: false };
    });
};

const updateFile = async (filePath: string, updateContent: string) => {
  const fileExists = await RNFS.exists(filePath);
  try {
    if (fileExists) {
      await RNFS.writeFile(filePath, updateContent, STRINGS.utf);
      return {
        message: STRINGS.updateSuccess + ': ' + filePath,
        success: true,
      };
    } else {
      return { message: STRINGS.fileNoExist, success: false };
    }
  } catch (error) {
    return { message: STRINGS.updateError + ':' + error, success: false };
  }
};

export const writeFile = async (
  filePath: string,
  content: string,
  appendData?: boolean,
) => {
  const fileExists = await RNFS.exists(filePath);
  try {
    if (appendData && fileExists) {
      return appendFile(filePath, content);
    } else if (fileExists) {
      return updateFile(filePath, content);
    } else {
      await RNFS.writeFile(filePath, content, STRINGS.utf);
      return { message: STRINGS.writeSuccess + ' ' + filePath, success: true };
    }
  } catch (error) {
    return { message: STRINGS.writeError + error, success: false };
  }
};

export default function IMFileManager({
  androidFilePath,
  androidFolderPath,
  appendContent,
  content,
  fileName,
  folderName,
  iosFilePath,
  iosFolderPath,
  operation,
  updateContent,
}: IMFileManagerProps):
  | Promise<{ message: string; success: boolean }>
  | undefined {
  let filePath = '';
  let folderPath = '';
  content = content ? content : '';
  updateContent = updateContent ? updateContent : '';
  appendContent = appendContent ? appendContent : '';

  if (operation.toLowerCase() === OPERATIONS.createFolder) {
    folderPath =
      Platform.OS === 'android'
        ? androidFolderPath
          ? androidFolderPath
          : RNFS.DownloadDirectoryPath
        : iosFolderPath
        ? iosFolderPath
        : RNFS.DocumentDirectoryPath;
    folderPath = folderPath + '/' + folderName;
  } else {
    const filesDir =
      Platform.OS === 'android'
        ? androidFilePath
          ? androidFilePath
          : RNFS.DownloadDirectoryPath
        : iosFilePath
        ? iosFilePath
        : RNFS.DocumentDirectoryPath;
    folderPath = `${filesDir}`;
    filePath = folderPath + '/' + fileName;
  }

  switch (operation.toLowerCase()) {
    case OPERATIONS.append:
      return appendFile(filePath, appendContent);
    case OPERATIONS.createFolder:
      return createFolder(folderPath);
    case OPERATIONS.delete:
      return deleteFile(filePath);
    case OPERATIONS.read:
      return readFile(filePath);
    case OPERATIONS.update:
      return updateFile(filePath, updateContent);
    case OPERATIONS.write:
      return writeFile(filePath, content);
  }
}
