import { NativeModules, Platform } from 'react-native';

const { AdobeTargetManager, IMAdobeODManager } = NativeModules;

export const adobeODOfferRewards = async (fedId: String) => {
  try {
    let response: any = [];
    if (Platform.OS === 'ios') {
      const res = await AdobeTargetManager.setAdodeODOfferRewards(fedId);
      if (!res) {
        return []
      }
      let reData = res.split('@*@#');
      if (Array.isArray(reData) && reData?.length > 0) {
        response = reData.map((item: any) => JSON.parse(item));
        return response;
      }
      return [];
    } else {
      const res = await IMAdobeODManager.adobeODForOffers(fedId)
      if (!res) {
        return []
      }
      const jsonData = JSON.parse(res)
      if (jsonData?.odResponse) {
        return JSON.parse(jsonData.odResponse)
      }
      return [];
    }
  } catch (error) {
    return [];
  }
};

export const updateXdmODOfferRewards = async (fedId: string,offerId: string, bannerPosition: number, isTapInteraction: boolean) => {
  try {
    if (Platform.OS === 'ios') {
      await AdobeTargetManager.setUpdateXdmForOffer(fedId,offerId, bannerPosition, isTapInteraction);
    } else {
      await IMAdobeODManager.setUpdateXdmForOffer(fedId,offerId, bannerPosition, isTapInteraction)
    }
  } catch (error) {
    throw error;
  }
}

export const updateisplayInteractionXdmForOffer=async()=>{
  try {
    if (Platform.OS === 'ios') {
      await AdobeTargetManager.setDisplayInteractionXdmForOffer();
    } else {
       await IMAdobeODManager.setUpdateDisplayInteractionXdm()
    }
  } catch (error) {
    throw error;
  }
}
