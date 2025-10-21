import DeviceInfo from 'react-native-device-info';

export class IMDeviceInfo {
  static instances: any = null;
  static getInstance() {
    if (IMDeviceInfo.instances == null) {
      IMDeviceInfo.instances = new IMDeviceInfo();
    }

    return this.instances;
  }
  getIPAddress() {
    DeviceInfo.getIpAddress()
      .then(ip => {
        return ip.toString();
      })
      .catch(error => {
        const { code, message } = error;
        console.warn(code, message);
      });
  }
}
