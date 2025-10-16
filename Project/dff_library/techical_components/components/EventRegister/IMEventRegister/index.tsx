import { EventRegister } from 'react-native-event-listeners';

export const emitConfig = { API_CALLED: 'API_CALLING' };

export function sendNotification(key: string, value: any) {
  EventRegister.emit(key, value);
}

export function removeEventListener(key: string) {
  EventRegister.removeEventListener(key);
}

export const getNotification = async (key: string) => {
  await EventRegister.addEventListener(key, msg => {
    return msg;
  });
};
