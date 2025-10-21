import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import DeviceInfo from 'react-native-device-info';

// Function to get the device name
const getDeviceNames = async (): Promise<string> => {
  try {
    const deviceName = await DeviceInfo.getDeviceName();
    return deviceName;
  } catch (error) {
    console.error('Failed to get device name', error);
    throw error;
  }
};

export const IMDeviceName: React.FC = (props: any) => {
  const [deviceName, setDeviceName] = useState<string>('');
  useEffect(() => {
    const fetchDeviceName = async () => {
      try {
        const name = await getDeviceNames();
        setDeviceName(name);
      } catch (error) {
        console.error('Error fetching device name:', error);
      }
    };
    fetchDeviceName();
  }, []);
  return <Text>Device Name: {deviceName}</Text>;
};

// Function to get the unique ID
export const IMUniqueId: React.FC = () => {
  let uniqueId: any = DeviceInfo.getUniqueId();
  let udid = uniqueId['_j'];
  useEffect(() => {
    const fetchUniqueId = async () => {
      try {
        const id = DeviceInfo.getUniqueId();
        uniqueId = id;
      } catch (error) {
        console.error('Error fetching unique ID: ', error);
      }
    };
    fetchUniqueId();
  }, []);
  return <Text>Unique ID: {udid}</Text>;
};

// Function to get the system version
const getSystemVersion = async (): Promise<string> => {
  try {
    const systemVersion = DeviceInfo.getSystemVersion();
    return systemVersion;
  } catch (error) {
    console.error('Failed to get system version', error);
    throw error;
  }
};

export const IMSystemVersion: React.FC = () => {
  const [systemVersion, setSystemVersion] = useState<string>('');
  useEffect(() => {
    const fetchSystemVersion = async () => {
      try {
        const version = await getSystemVersion();
        setSystemVersion(version);
      } catch (error) {
        console.error('Error fetching system version: ', error);
      }
    };
    fetchSystemVersion();
  }, []);
  return <Text>System Version: {systemVersion}</Text>;
};

// Function to get the device carrier
const getDeviceCarrier = async (): Promise<string> => {
  try {
    const carrier = await DeviceInfo.getCarrier();
    return carrier;
  } catch (error) {
    console.error('Failed to get device carrier', error);
    throw error;
  }
};

export const IMDeviceCarrier: React.FC = () => {
  const [carrier, setCarrier] = useState<string>('Unknown');
  useEffect(() => {
    const fetchDeviceCarrier = async () => {
      try {
        const carrierName = await getDeviceCarrier();
        setCarrier(carrierName);
      } catch (error) {
        console.error('Error fetching device carrier: ', error);
      }
    };
    fetchDeviceCarrier();
  }, []);
  return <Text>Carrier: {carrier}</Text>;
};

// Function to get the device model
const getDeviceModel = async (): Promise<string> => {
  try {
    const model = DeviceInfo.getModel();
    return model;
  } catch (error) {
    console.error('Failed to get device model', error);
    throw error;
  }
};

export const IMDeviceModel: React.FC = () => {
  const [model, setModel] = useState<string>('');
  useEffect(() => {
    const fetchDeviceModel = async () => {
      try {
        const modelName = await getDeviceModel();
        setModel(modelName);
      } catch (error) {
        console.error('Error fetching device model: ', error);
      }
    };
    fetchDeviceModel();
  }, []);

  return <Text>Model: {model}</Text>;
};


const getAppVersion = async (): Promise<string> => {
  try {
    const version = DeviceInfo.getVersion();
    return version;
  } catch (error) {
    console.error('Failed to get App version', error);
    throw error;
  }
};

export const IMDeviceAppVersion: React.FC = () => {
  const [version, setVersion] = useState<string>('');
  useEffect(() => {
    const fetchAppVersion = async () => {
      try {
        const appVersion = await getAppVersion()  
          setVersion(appVersion)
      } catch (error) {
        console.error('Error fetching app version: ', error);
      }
    };
    fetchAppVersion();
  }, []);

  return <Text>App version: {version}</Text>;
};
