import { IMMode } from '../enum/IMMode';
import { LoggedInUserType } from '../enum/LoggedInUserType';
import { IMUserTypeHeader } from '../enum/IMUserTypeHeader';
import { IMUserSegmentType } from '../enum/IMUserSegmentType';
import {LoggedInUserSubType} from '../enum/IMUserSubType';
import {IMTypeSubTypeSegment} from '../enum/IMTypeSubTypeSegment';
let userDetails: IMUserDetails;

export class IMUserInfo {
  static instances: any = null;

  _userID = '';

  /**
   * @returns {IMUserInfo}
   */

  static getInstance() {
    if (IMUserInfo.instances == null) {
      IMUserInfo.instances = new IMUserInfo();
      //  const location= await getLocation();
    }
    return this.instances;
  }

  setUserDetails(_details: IMUserDetails) {
    userDetails = _details;
  }

  getUserDetails() {
    return userDetails;
  }

  returnUserIDAndUserTypeHeader() {
    let userDetails = this.getUserDetails();
    if (userDetails) {
      let mode = this.returnMode(userDetails);
            let loginUserType = this.returnLoginUserType(userDetails);
            let userTypeHeader: any = this.returnUserTypeHeaderWith(
        loginUserType,
        mode,
      );
            let userIdHeader = this.returnUserIDHeader(
        userDetails,
        loginUserType,
        mode,
      );
            return [userTypeHeader, userIdHeader];
    }
    return ['', ''];
  }

  returnMode(userDetails: IMUserDetails) {
    switch (userDetails.loginState) {
      case IMMode.NLI:
        return IMMode.NLI;
      case IMMode.LI:
        return IMMode.LI;
      default:
        return IMMode.NLI;
    }
  }

  returnLoginUserType(userDetails: IMUserDetails) {
    return userDetails.userType ?? LoggedInUserType.etb;
  }

  returnUserIDHeader(
    userDetails: IMUserDetails,
    loggedInUserType: LoggedInUserType,
    mode: IMMode,
  ) {
    switch (true) {
      case (loggedInUserType == LoggedInUserType.etb && mode == IMMode.LI):
        return userDetails.userID ?? '';
      case (loggedInUserType == LoggedInUserType.etb && mode == IMMode.NLI):
        return userDetails.deviceID ?? '';
      // case (loggedInUserType == LoggedInUserType.nri && mode == IMMode.LI):
      //   return userDetails.userID ?? '';
      // case (loggedInUserType == LoggedInUserType.nri && mode == IMMode.NLI):
      //   return userDetails.deviceID ?? '';
      case (loggedInUserType == LoggedInUserType.ntb && mode == IMMode.LI):
        return userDetails.mobileNumberWCC ?? '';
      case (loggedInUserType == LoggedInUserType.ntb && mode == IMMode.NLI):
        return userDetails.deviceID ?? '';
      case (loggedInUserType == LoggedInUserType.standaloneLoanAccount && mode == IMMode.LI):
        let userID = userDetails.userID;
        let mobileNumber = userDetails.mobileNumberWCC;
        if (userID?.trim().length != 0) {
          return userID;
        } else if (mobileNumber) {
          return mobileNumber;
        }
        return userDetails.mobileNumberWCC ?? '';
      case (loggedInUserType == LoggedInUserType.standaloneLoanAccount && mode == IMMode.NLI):
        return userDetails.deviceID ?? '';
      case (loggedInUserType == LoggedInUserType.standaloneCredit && mode == IMMode.LI):
        return userDetails.userID ?? '';
      case (loggedInUserType == LoggedInUserType.standaloneCredit && mode == IMMode.NLI):
        return userDetails.deviceID ?? '';
      case (loggedInUserType == LoggedInUserType.standalonePayLaterAccount && mode == IMMode.LI):
        return userDetails.mobileNumberWCC ?? '';
      case (loggedInUserType == LoggedInUserType.standalonePayLaterAccount && mode == IMMode.NLI):
        return userDetails.deviceID ?? '';
      default:
        return '';
    }
  }

  returnUserTypeHeaderWith(loggedInUserType: LoggedInUserType, mode: IMMode) {
    switch (true) {
      case (loggedInUserType == LoggedInUserType.etb && mode == IMMode.LI):
        return IMUserTypeHeader.UID;
      case (loggedInUserType == LoggedInUserType.etb && mode == IMMode.NLI):
        return IMUserTypeHeader.DID;
      // case (loggedInUserType == LoggedInUserType.nri && mode == IMMode.LI):
      //   return IMUserTypeHeader.UID;
      // case (loggedInUserType == LoggedInUserType.nri && mode == IMMode.NLI):
      //   return IMUserTypeHeader.DID;
      case (loggedInUserType == LoggedInUserType.ntb && mode == IMMode.LI):
        return IMUserTypeHeader.MOB;
      case (loggedInUserType == LoggedInUserType.ntb && mode == IMMode.NLI):
        return IMUserTypeHeader.MNL;
      case (loggedInUserType == LoggedInUserType.standaloneLoanAccount && mode == IMMode.LI):
        let userID = userDetails?.userID;
        let mobileNumber = userDetails?.mobileNumberWCC;
        if (userID?.trim().length != 0) {
          return IMUserTypeHeader.UID;
        } else if (mobileNumber) {
          return IMUserTypeHeader.LNM;
        }
        return IMUserTypeHeader.UID;
      case (loggedInUserType == LoggedInUserType.standaloneLoanAccount && mode == IMMode.NLI):
        return IMUserTypeHeader.DID;
      case (loggedInUserType == LoggedInUserType.standaloneCredit && mode == IMMode.LI):
        return IMUserTypeHeader.UID;
      case (loggedInUserType == LoggedInUserType.standaloneCredit && mode == IMMode.NLI):
        return IMUserTypeHeader.DID;
      case (loggedInUserType == LoggedInUserType.standalonePayLaterAccount && mode == IMMode.LI):
        return IMUserTypeHeader.MOB;
      case (loggedInUserType == LoggedInUserType.standalonePayLaterAccount && mode == IMMode.NLI):
        return IMUserTypeHeader.MNL;
      default:
        return IMUserTypeHeader.DID;
    }
  }


returnCombinedUserClassificationData(typeSubTypeSegment: IMTypeSubTypeSegment) {
  switch (typeSubTypeSegment) {
  case IMTypeSubTypeSegment.TSTSG:
      return this.returnTypeSubTypeSegment()
  case IMTypeSubTypeSegment.TST:
      return this.returnTypeSubType()
  case IMTypeSubTypeSegment.LASTOFTSTSG:
      return this.returnTypeSubTypeSegmentWithMode()
  }
}

returnTypeSubTypeSegment() {
  var typeSubTypeSegment : String = ""
  let userDetails = this.getUserDetails()
  if (userDetails) {
      if (userDetails.userType) {
          typeSubTypeSegment = userDetails.userType
      }
      if (userDetails.userSubType){
          typeSubTypeSegment = typeSubTypeSegment + (typeSubTypeSegment ?  '-' + userDetails.userSubType  : userDetails.userSubType)
      }
      if (userDetails.userSegmentType) {
          typeSubTypeSegment = typeSubTypeSegment + (typeSubTypeSegment ?  '-' + userDetails.userSegmentType : userDetails.userSegmentType)
      }
  }
  return typeSubTypeSegment
}

returnTypeSubType() {
  var typeSubType : String = ""
  let userDetails = this.getUserDetails()
  if (userDetails) {
      if (userDetails.userType)  {
          typeSubType = userDetails.userType
          if (userDetails.userSubType)  {
              typeSubType = typeSubType + "-" + userDetails.userSubType
          }
      }
  }
  return typeSubType
}

returnTypeSubTypeSegmentWithMode(){
  var typeSubTypeSegment : String = ""
  let userDetails = this.getUserDetails()
  if(userDetails)  {
      if (userDetails.userType) {
          if (userDetails.userSubType && userDetails.userSegmentType) {
              typeSubTypeSegment =  userDetails.userSegmentType
          }else if (userDetails.userSubType &&  userDetails.userSegmentType == undefined) {
              typeSubTypeSegment = userDetails.userSubType
          } else {
              typeSubTypeSegment = userDetails.userType
          }
      }
  }
  return typeSubTypeSegment
}

}


export interface IMUserInfoProps{
  deviceID?: String,
  mobileNumber?: String,
  userID?: String,
  loginState?: IMMode,
  countryCode?: String,
  userName?: String,
  emailID?: String,
  userType?: LoggedInUserType,
  userSubType?: LoggedInUserSubType,
  accountNumber?: String,
  accountType?: String,
  latitude?: any,
  longitude?: any,
  city?: String,
  ipAddress?: String,
  fedid?: String,
  userSegmentType?: IMUserSegmentType,
  mobileNumberWCC?: String,
  meuserAccountsArray?: [],
  isNri?: boolean,
  imei?: String,
  gcmId?: String,
};

export class IMUserDetails {
  static instances: any = null;
  static getInstance() {
    if (IMUserDetails.instances == null) {
      IMUserDetails.instances = new IMUserDetails();
    }
    return this.instances;
  }

  public deviceID: String | undefined;
  public mobileNumber: String | undefined;
  public userID: String | undefined;
  public loginState: IMMode | undefined;
  public countryCode: String | undefined;
  public userName: String | undefined;
  public emailID: String | undefined;
  public userType: LoggedInUserType | undefined;
  public userSubType: LoggedInUserSubType | undefined;
  public accountNumber: String | undefined;
  public accountType: String | undefined;
  public latitude: any;
  public longitude: any;
  public city: String | undefined;
  public ipAddress: String | undefined;
  public fedid: String | undefined;
  public userSegmentType: IMUserSegmentType | undefined;
  public mobileNumberWCC: String | undefined;
  public meuserAccountsArray: [] | undefined;
  public isNri: boolean | undefined;
  public imei: String | undefined;
  public gcmId: String | undefined;
  public init({
    deviceID,
    mobileNumber,
    userID,
    loginState,
    countryCode,
    userName,
    emailID,
    userType,
    userSubType,
    accountNumber,
    accountType,
    latitude,
    longitude,
    city,
    ipAddress,
    fedid,
    userSegmentType,
    mobileNumberWCC,
    meuserAccountsArray,
    isNri,
    imei,
    gcmId,
  }:IMUserInfoProps) {
    this.deviceID = deviceID;
    this.mobileNumber = mobileNumber;
    this.userID = userID;
    this.loginState = loginState;
    this.countryCode = countryCode;
    this.userName = userName;
    this.emailID = emailID;
    this.userType = userType;
    this.userSubType = userSubType;
    this.accountNumber = accountNumber;
    this.accountType = accountType;
    this.latitude = latitude;
    this.longitude = longitude;
    this.city = city;
    this.ipAddress = ipAddress;
    this.fedid = fedid;
    this.userSegmentType = userSegmentType;
    this.mobileNumberWCC = mobileNumberWCC;
    this.meuserAccountsArray = meuserAccountsArray;
    this.isNri = isNri;
    this.imei = imei;
    this.gcmId = gcmId;
  }
}
