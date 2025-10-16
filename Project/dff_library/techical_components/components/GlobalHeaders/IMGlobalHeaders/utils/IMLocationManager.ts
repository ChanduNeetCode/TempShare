import GetLocation from 'react-native-get-location';

const getCityFromCoords = async (lat: number, long: number) => {
  const url = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${long}&format=json`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    if (data && data.address.city) {
      return data.address.city;
    }
  } catch (error) {
    console.warn('Error fetching data', error);
  }
};

const getLocationData = async () => {
  const a = await GetLocation.getCurrentPosition({
    enableHighAccuracy: true,
    timeout: 60000,
  });
  return a;
};

export class IMLocationManager {
  static instances: any = null;
  static getInstance() {
    if (IMLocationManager.instances == null) {
      IMLocationManager.instances = new IMLocationManager();
      //  const location= await getLocation();
    }
    return this.instances;
  }
  async getLocationDetails() {
    return await getLocationData();
  }

  async getCity() {
    const a = await getLocationData();
    return await getCityFromCoords(a.latitude, a.longitude);
  }
}
