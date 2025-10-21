
import { Dynatrace } from '@dynatrace/react-native-plugin';

export const dynatraceScreenNameEvent = async (pageName: string = '') => {
  try {
    const myAction = Dynatrace.enterManualAction(pageName);
    myAction.leaveAction();
  } catch (error) {
    throw error;
  }

};

export const dynatraceErrorLogEvent = async (errorMessage: string = "", errorCode: number = 0) => {
  try {
    Dynatrace.reportError(errorMessage, errorCode);
  } catch (error) {
    throw error;
  }
};

export const dynatraceNPCILogEvent = async (errorMessage: string = "", errorCode: number = 0,) => {
  try {
    Dynatrace.reportError(errorMessage, errorCode);
  } catch (error) {
    throw error;
  }
};

export const dynatraceButtonClickEvent = async (screenName?: string, data?: string) => {
  try {
    // if (Platform.OS === 'ios') {
    //   const result = await DynaTraceManager.invokeButtonClickEvent({ "screenName": screenName, "payeeName": data });
    //   return result;
    // } else {
    //   const result = await IMDynatraceManager.invokeButtonClickEvent(screenName, data);
    //   return result;
    // }
  } catch (error) {
    throw error;
  }
};

export const dynatraceEnterActionEvent = async (event: string, text: string = 'Touch On') => {
  try {

    const myAction = Dynatrace.enterManualAction(`${text} ${event}`);
    myAction.leaveAction();
  } catch (error) {
    throw error;
  }
};

export const dynatraceModifyActionEvent = async (event?: String) => {
  try {
    // if (Platform.OS === 'ios') {
    //   const result = await DynaTraceManager.invokeModifyActionEvent(event);
    //   return result;
    // } else {
    //   const result = await IMDynatraceManager.invokeModifyActionEvent(event);
    //   return result;
    // }
  } catch (error) {
    throw error;
  }
};

export const dynatraceDrawerEvent = async (screenName?: String, drawerDiscription?: String) => {
  try {
    const myAction = Dynatrace.enterManualAction(`Drawer: ${screenName}`);
    myAction.leaveAction();
  } catch (error) {
    throw error;
  }
};


