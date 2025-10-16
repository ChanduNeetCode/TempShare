import {TechnicalComponents} from './TechEnums';

export const ScreenNameTechnical = [
  {componentName:TechnicalComponents.AdobeOD} ,
  {componentName:TechnicalComponents.AdobeTargetAndroid} ,
  {componentName:TechnicalComponents.AdobeTarget},
  {componentName:TechnicalComponents.AnalyticalInvoker},
  {componentName:TechnicalComponents.AnalyticalInvokerIOS},
  {componentName:TechnicalComponents.ApiManager},
  {componentName:TechnicalComponents.AndroidEncryptionDecryption} ,
  {componentName:TechnicalComponents.BaseService},
  {componentName:TechnicalComponents.CacheManager},
  {componentName:TechnicalComponents.CDNInvocation},
  {componentName:TechnicalComponents.DeviceBinding} ,
  {componentName:TechnicalComponents.Dialer},
  {componentName:TechnicalComponents.DisableScreenshot},
  {componentName:TechnicalComponents.EventRegister},
  {componentName:TechnicalComponents.EncryptionDecryption},
  {componentName:TechnicalComponents.ExceptionErrorHandling},
  {componentName:TechnicalComponents.ErrorMessagesNative},
  {componentName:TechnicalComponents.FileManager},
  {componentName:TechnicalComponents.GlobalHeaders},
  {componentName:TechnicalComponents.HtmlParse},
  {componentName:TechnicalComponents.NetworkManager},
  {componentName:TechnicalComponents.PersistentStorage} ,
  {componentName:TechnicalComponents.ShareTray},
  {componentName:TechnicalComponents.UCJUrl},
  {componentName:TechnicalComponents.UCJRelationManager},
  {componentName:TechnicalComponents.Validation},
  {componentName:TechnicalComponents.WebView},
  {componentName:TechnicalComponents.Dynatrace},
  {componentName:TechnicalComponents.TimeOutManagement}
].sort(function (a: any, b: any) {
  const c= a.componentName.localeCompare(b.componentName);
  return c;
});
