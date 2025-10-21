import NetInfo from '@react-native-community/netinfo';

export const getNetworkType = async () => {
  try {
    const networkState = await NetInfo.fetch();
    return networkState.type;
  } catch (error) {
    throw error;
  }
};

export const isGetConnection = async () => {
  try {
    const networkState = await NetInfo.fetch();
    return networkState.isConnected;
  } catch (error) {
    throw error;
  }
};
