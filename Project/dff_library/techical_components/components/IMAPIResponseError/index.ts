import {
  // insertingAllMsgToLocalDB,
  selectErrorDetails,
} from '../PersistentStorage/IMPersistentStorage/index';
import { sendNotification } from '../EventRegister/IMEventRegister';

export enum IMNavigation {
  Login = 'Login',
  Activation = 'Activation',
  TryAgain = 'TryAgain',
  Landing = 'Landing',
  None = 'None',
  PreviousPage = 'PreviousPage',
  Store = 'Store',
  Dashboard = 'Dashboard'
}

let responseErrorNotificationIdentifier = 'PostNavigation';

export const returnNavigation = async (
  statusCode: number | string,
  message: string = '',
  url: string = '',
) => {
  let statusCode1 = statusCode.toString()
  var navigation = IMNavigation.None;
  switch (statusCode1) {
    case "80":
      navigation = IMNavigation.Login;
      break;
    case "94":
      navigation = IMNavigation.Landing;
      break;
    case "121":
      navigation = IMNavigation.Activation;
      break;
    case "401":
    case "403":
    case "405":
    case "412":
    case "422":
    case "9999":
      navigation = IMNavigation.Login;
      break;
    case "400":
    case "415":
    case "429":
    case "500":
    case "503":
    case "504":
      navigation = IMNavigation.TryAgain;
      break;
    case "ACT1001":
      navigation = IMNavigation.None
      break;
    case "ACT1002":
      navigation = IMNavigation.PreviousPage
      break;
    case "ACT1003":
      navigation = IMNavigation.Landing
      break;
    case "ACT1004":
      navigation = IMNavigation.TryAgain
      break;
    case "ACT1005":
      navigation = IMNavigation.Login
      break;
    case "ACT1006":
      navigation = IMNavigation.Activation
      break;
    case "ACT1007":
      navigation = IMNavigation.Store
      break;
    case "ACT1008":
      navigation = IMNavigation.Dashboard
      break;
    default:
      navigation = IMNavigation.None;
      break;
  }
  let object: { [key: string]: any } = {};
  object['statusCode'] = statusCode;
  object['navigation'] = navigation;
  // const messageData = await insertingAllMsgToLocalDB();
  // if (messageData) {
  object['title'] = await returnTitle(statusCode1);
  object['subTitle'] = await returnSubTitle(statusCode1, message);
  object['buttonTitle'] = await returnButtonTitle(statusCode1);
  // }
  object['url'] = url;
  //Todo IMEventregister
  sendNotification(responseErrorNotificationIdentifier, object);
  // NotificationCenter.default.post(name: responseErrorNotificationIdentifier, object: object)
  return object;
};

async function returnTitle(statusCode: string) {
  var title: String = '';
  switch (statusCode) {
    case "80":
    case "23":
    case "ACT1005":
      title = selectErrorDetails('MeEr0204');
      break;
    case "94":
    case "ACT1003":
      title = selectErrorDetails('MeEr0204');
      break;
    case "121":
    case "ACT1006":
      title = selectErrorDetails('LaSt3693');
      break;
    case "401":
    case "403":
    case "405":
    case "412":
    case "422":
    case "9999":
      title = selectErrorDetails('MeEr0204');
      break;
    case "400":
    case "415":
    case "429":
    case "500":
    case "503":
    case "504":
    case "ACT1004":
      title = selectErrorDetails('MeEr0204');
      break;
    default:
      title = selectErrorDetails('LaSt0296');
      break;
  }
  return title;
}

async function returnSubTitle(statusCode: string, message: string = '') {
  var subTitle: string = '';
  switch (statusCode) {
    case "80":
    case "23":
    case "ACT1005":
      subTitle = message ? message : selectErrorDetails('MeEr0203');
      break;
    case "94":
    case "ACT1003":
      subTitle = message
        ? '(message) #(statusCode)'
        : selectErrorDetails('LaSt4155');
      break
    case "121":
    case "ACT1006":
      subTitle = selectErrorDetails('MeEr0264');
      break
    case "401":
    case "403":
    case "405":
    case "412":
    case "422":
    case "9999":
      subTitle = selectErrorDetails('MeEr0203');
      break
    case "400":
    case "415":
    case "429":
    case "500":
    case "503":
    case "504":
    case "ACT1004":
      subTitle = selectErrorDetails('MeEr0213');
      break
    default:
      subTitle = selectErrorDetails('LaSt4155');
      break
  }
  return subTitle;
}

async function returnButtonTitle(statusCode: string) {
  var buttonTitle: string = '';
  switch (statusCode) {
    case "80":
    case "23":
    case "ACT1005":
      buttonTitle = selectErrorDetails('LaBu0070');
      break
    case "94":
    case "ACT1003":
      buttonTitle = selectErrorDetails('LaBu0634');
      break
    case "121":
    case "ACT1006":
      buttonTitle = selectErrorDetails('LaSt3694');
      break
    case "401":
    case "403":
    case "405":
    case "412":
    case "422":
    case "9999":
      buttonTitle = selectErrorDetails('LaBu0070');
      break
    case "400":
    case "415":
    case "429":
    case "500":
    case "503":
    case "504":
    case "ACT1004":
      buttonTitle = selectErrorDetails('LaBu0060');
      break
    default:
      buttonTitle = selectErrorDetails('LaBu0444');
      break
  }
  return buttonTitle;
}

export enum ErrorStatus {
  unAuthorised = 'unAuthorised',
  forbiddenAccess = 'forbiddenAccess',
  noData = 'noData',
  unableToDecode = 'unableToDecode',
  notFound = 'notFound',
  internalServerError = 'internalServerError',
  FSLError = 'FSLError',
  TokenExpired = 'TokenExpired',
  unknownError = 'unknownError',
  otherError = 'otherError',
}

// function IMErrorResponse(statusCode: String,
//               message: String,
//               additionInformation: [String: Any]? = nil,
//               navigation: IMNavigation? = nil,
//               traceID: String? = nil,
//               url: String? = nil) {
//       self.statusCode = statusCode
//       self.message = message
//       self.additionInformation = additionInformation
//       self.navigation = navigation
//       self.traceID = traceID
//       self.url = url
//   }
// }

export function statusCode(self: any) {
  switch (self) {
    case ErrorStatus.unAuthorised:
      return '401';
    case ErrorStatus.forbiddenAccess:
      return '403';
    case ErrorStatus.noData:
      return '10001';
    case ErrorStatus.unableToDecode:
      return '1002';
    case ErrorStatus.notFound:
      return '404';
    case ErrorStatus.internalServerError:
      return '500';
    case ErrorStatus.FSLError:
      return '';
    case ErrorStatus.TokenExpired:
      return '412';
    case ErrorStatus.unknownError:
      return '1003';
    case ErrorStatus.otherError:
      return '1004';
  }
}

export function IMErrorResponse(
  statusCode: any,
  message: String,
  additionInformation: any,
  traceID?: String,
  url?: String,
  navigation?: IMNavigation,
) {
  return {
    statusCode: statusCode,
    message: message,
    additionInformation: additionInformation,
    navigation: navigation,
    traceID: traceID,
    url: url,
  };
}

export function init(statusCode: number) {

  switch (true) {
    case statusCode == 401:
      return ErrorStatus.unAuthorised;
    case statusCode == 403:
      return ErrorStatus.forbiddenAccess;
    case statusCode == 404:
      return  ErrorStatus.notFound;
    case statusCode == 412:
      return ErrorStatus.TokenExpired;
    case statusCode == 500:
      return ErrorStatus.internalServerError;
    case (statusCode>0 && statusCode<=99) :
      return ErrorStatus.FSLError;
    default:
      return  ErrorStatus.otherError;
  }
}

export async function errorInfo(self: any, traceID: any, url: any,sCode?:number) {
  const resp = {
    statusCode: String,
    message: String,
    additionInformation: [,],
    navigation: IMNavigation,
    traceID: String,
    url: String,
  };
  (resp.traceID = traceID), (resp.url = url);
  // await insertingAllMsgToLocalDB();


  switch (self) {
    case ErrorStatus.unAuthorised:
      return IMErrorResponse(
        statusCode(ErrorStatus.unAuthorised),
        selectErrorDetails('MeEr0051'),
        [selectErrorDetails('MeEr0052'), selectErrorDetails('MeEr0046')],
        traceID,
        url,
      );
    case ErrorStatus.forbiddenAccess:
      return IMErrorResponse(
        statusCode(ErrorStatus.forbiddenAccess),
        selectErrorDetails('MeEr0051'),
        [selectErrorDetails('MeEr0052'), selectErrorDetails('MeEr0044')],
        traceID,
        url,
      );
    case ErrorStatus.notFound:
      return IMErrorResponse(
        statusCode(ErrorStatus.notFound),
        selectErrorDetails('MeEr0051'),
        [selectErrorDetails('MeEr0052'), selectErrorDetails('MeEr0044')],
        traceID,
        url,
      );
    case ErrorStatus.internalServerError:
      return IMErrorResponse(
        statusCode(ErrorStatus.internalServerError),
        selectErrorDetails('MeEr0053'),
        [selectErrorDetails('MeEr0052'), selectErrorDetails('MeEr0043')],
        traceID,
        url,
      );
    case ErrorStatus.noData:
      return IMErrorResponse(
        statusCode(ErrorStatus.noData),
        selectErrorDetails('MeEr0054'),
        [selectErrorDetails('MeEr0052'), selectErrorDetails('MeEr0045')],
      );
    case ErrorStatus.unableToDecode:
      return IMErrorResponse(
        statusCode(ErrorStatus.unableToDecode),
        selectErrorDetails('MeEr0054'),
        [selectErrorDetails('MeEr0052'), selectErrorDetails('MeEr0055')],
      );
    case ErrorStatus.FSLError: {
      let _navigation: any = await returnNavigation(
        sCode || Number(statusCode(ErrorStatus.FSLError)),
        url ?? '',
      );
      return _navigation;

      // IMErrorResponse(
      //   self.statusCode,
      //   selectErrorDetails('0-99'),
      //   [,],
      //   _navigation,
      //   traceID,
      //   url,
      // );
    }
    case ErrorStatus.unknownError: {
      let errorMessage;
      return IMErrorResponse(self.statusCode, selectErrorDetails('MeEr0056'), [
        selectErrorDetails('MeEr0052'),
        errorMessage ?? selectErrorDetails('MeEr0056'),
      ]);
    }
    case ErrorStatus.TokenExpired: {
      return IMErrorResponse(
        statusCode(ErrorStatus.TokenExpired),
        selectErrorDetails('MeEr0060'),
        [,],
      );
    }
    case ErrorStatus.otherError: {
      let errorMessage;
      let errorCode;
      let navigation:any = await returnNavigation(
        Number(errorCode ?? '0') ?? 0,
        url ?? '',
      );
      var tempErrorMessage = selectErrorDetails('MeEr0160');
      if (errorMessage) {
        tempErrorMessage = errorMessage;
      }
      return IMErrorResponse(
        errorCode ?? '',
        tempErrorMessage,
        [,],
        navigation,
        traceID,
        url ? url : '',
      );
    }
  }
}
