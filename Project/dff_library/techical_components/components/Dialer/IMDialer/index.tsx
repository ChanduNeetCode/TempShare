import { Linking } from 'react-native';

const IMDialer = async (mobileNumber: string) => {
  const phoneNumber = mobileNumber;
  const url = 'tel:' + phoneNumber;

  Linking.openURL(url).catch(err => console.error('error opening dialer', err));
};
export default IMDialer;
