import { IMUserInfo } from './utils/IMUserInfo';
import { enviornment } from '../../EnviornmentVariable/IMEnviornmentVariable';
import { IMCryptoManagerType } from './enum/IMCryptoManagerType';

export default class IMGlobalHeader {
  public userInfo = IMUserInfo.getInstance();
  
  private getRefreshedAccessToken: ((id: string) => void) | undefined;
  private cryptoManagerType: IMCryptoManagerType = IMCryptoManagerType.CBC;
  private ft42Token: String = '';
  private apiKey: String = '';
  private contentType: String = '';
  private secret: String = '';
  private FT42UserID: String = '';
  private userID: String = this.userInfo?.getUserDetails()?.userID || '';
  private orgID: String = '';
  private mediaApiKey: String = '';
  private traceID: String = '';
  private token: String = '';
  private deviceID: String = '';
  private bayUserID: String = '';
  private deviceUDID: String = '';
  private osType: String | undefined;
  private isOrgID: boolean = true;
  private version: any;
  public static currentEnv = enviornment.DEV;
 
  static instances: any = null;
  
  _userID = '';

  /**
   * @returns {IMGlobalHeader}
   */
  static getInstance() {
    if (IMGlobalHeader.instances == null) {
      IMGlobalHeader.instances = new IMGlobalHeader();
    }
    return this.instances;
  }

  returnMasterApiKey() {
    return IMGlobalHeader.currentEnv == enviornment.PROD
      ? this.returnMasterProductionAPIKey()
      : IMGlobalHeader.currentEnv == enviornment.CUG
      ? this.returnMasterCUGAPIKey()
      : this.returnMasterOtherAPIKey();
  }
  returnTraceID() {
    let udid = this.userInfo.getUserDetails()?.deviceID;
    //let udid =this.userInfo.getUserDetails()?.deviceID ??this.getVendorIdentifier()
    let dateTime = this.returnCurrentDataWithTime();
    let randomNumber = this.returnRandomNumber();
    return this.traceID
      ? this.traceID
      : udid + '-' + dateTime + '-' + randomNumber;
  }
  setTraceID(traceId: string) {
    this.traceID = traceId;
  }

  returnOSType() {
    return this.osType;
  }
  setOSType(osType: string) {
    this.osType = osType;
  }


  //  getVendorIdentifier() {
  //         let udid;
  //         if (this.deviceUDID) {
  //        return this.deviceUDID
  //       }else {
  //         var udidString = ""
  //        let keychainHelper = IMKeychainHelper.shared
  //         udid = keychainHelper.read(service: keychainHelper.service, account: keychainHelper.account)
  //        if (udid) {
  //          udidString = String(data: udid, encoding: .utf8) ?? udidString
  //       udidString = udidString.replacingOccurrences(of: "-", with: "")
  //         } else {
  //         if (UIDevice.current.identifierForVendor?.uuidString) {
  //          udidString = udid.replacingOccurrences(of: "-", with: "")
  //         keychainHelper.save(udid.data(using: .utf8) ?? Data(), service: keychainHelper.service, account: keychainHelper.account)
  //        }
  //         }
  //         return udidString
  //        }
  //      }

  returnCurrentDataWithTime() {
    let currentDate = new Date();
    let dataFormatter =
      currentDate.getFullYear().toString() +
      pad2(currentDate.getMonth() + 1) +
      pad2(currentDate.getDate()) +
      pad2(currentDate.getHours()) +
      pad2(currentDate.getMinutes()) +
      pad2(currentDate.getSeconds());
    return dataFormatter;
  }
  setDeviceUDID(UDID: String) {
    this.deviceUDID = UDID;
  }

  returnAppVersionBuild() {
    return this.version;
  }
  setAppVersionBuild(version: any) {
    this.version = version;
  }

  setApiKey(apiKey: String) {
    this.apiKey = apiKey;
  }

  returnStaticApikey() {
    return IMGlobalHeader.currentEnv == enviornment.PROD
      ? this.returnProductionAPIKey()
      : IMGlobalHeader.currentEnv == enviornment.CUG
      ? this.returnCUGAPIKey()
      : this.returnOtherAPIKey();
  }

  returnApikey() {
    return this.apiKey ? this.apiKey : this.returnStaticApikey();
  }

  returnRandomNumber() {
    let randomNumber = Math.floor(Math.random() * (10000 - 1000 + 1) + 1000);
    return randomNumber;
  }

  returnStaticSecret() {
    this.secret = 'tcs#123';
    return this.secret;
  }

  returnMediaApiKey() {
    return this.mediaApiKey;
  }

  setUserID(id: any) {
    this.userID = id;
  }
  getUserID() {
    return this.userID;
  }

  setSecret(id: any) {
    this.secret = id;
  }

  getSecret() {
    return this.secret;
  }

  setOrgId(orgID: String) {
    this.orgID = orgID;
  }

  getOrgID() {
    return this.orgID
      ? this.orgID
      : this.userID && this.isOrgID
      ? 'ICI.' + this.userID + '.' + this.userID
      : '';
  }

  setMediaApiKey(apiKey: String) {
    this.mediaApiKey = apiKey;
  }

  setFT42(token: string) {
    this.ft42Token = token;
  }
  returnPreLoginFT42Token() {
    return this.ft42Token;
  }

  setFT42UserID(userId: string) {
    this.FT42UserID = userId;
  }
  getFT42UserID() {
    return this.FT42UserID;
  }

  setContentType(contentType: string) {
    this.contentType = contentType;
  }
  returntContentType() {
    return this.contentType ? this.contentType : this.returnStaticContentType();
  }

  returntSecret() {
    return this.secret ? this.secret : this.returnStaticSecret();
  }

  getBayUserID() {
    return 'ICI.' + this.bayUserID + '.' + this.bayUserID;
  }
  setBayUserID(bayUserID: String) {
    this.bayUserID = bayUserID;
  }

  setToken(token: string) {
    this.token = token;
  }
  returnToken() {
    return this.token ? this.token : 'FT42';
  }

  setDeviceID(deviceID: string) {
    this.deviceID = deviceID;
  }
  returnDeviceID() {
    return this.deviceID;
  }

  returnCUGAPIKey() {
    return '0MXF7G1SXNveOibR7qDBqZ59d8TASAgQvoOIKSVvlx2u3uJV';
  }
  returnFT42Token() {
    return this.ft42Token ? this.ft42Token : this.returnPreLoginFT42Token();
  }
  returnMasterProductionAPIKey() {
    return 'p8NjZfEnwrPAyWBj7L01tdIs1gvVxOpnj5zGRiQvWUy0sY2g';
  }
  returnMasterCUGAPIKey() {
    return 'EcOZa011gGFngKf3m0l5JnA2TX0JGBX8EFgJY5vRJRVAWA38';
  }
  returnOtherAPIKey() {
    return 't19Mi6U6MLwkM1KhG2Uq0czwyAA56BTYTzIhx131IbOMItaZ';
  }
  returnStaticContentType() {
    this.contentType = 'application/json';
    return this.contentType;
  }
  returnMasterOtherAPIKey() {
    return 'Bs9FH3BIff5Wd3SBWOat9zdasGF1GuRiDhbvHBiHFBmzQA8j';
  }
  returnProductionAPIKey() {
    return 'Vm3ipYktlNPcZYJvaAdwnKcLXzKyG3vYEQ1KsSY5X0aBDehu';
  }

  //todo

  //   public func returnRequestDateTime(_ dateFormat: String? = nil)-> String {
  //     let currentDate = Date()
  //     let dataFormatter = DateFormatter()
  //     dataFormatter.timeZone = TimeZone(identifier: "Asia/Kolkata")
  //     dataFormatter.locale = Locale(identifier: "en_IN_POSIX")
  //     dataFormatter.dateFormat = dateFormat != nil ? dateFormat : "yyyy-MM-dd HH:mm:ss.SSS"
  //     let formattedDate = dataFormatter.string(from: currentDate)
  //     return formattedDate
  // }
  //  getCurrentMillis() {
  //   return Int64(Date().timeIntervalSince1970 * 1000)
  // }
}

function pad2(n: any) {
  return n < 10 ? '0' + n : n;
}
