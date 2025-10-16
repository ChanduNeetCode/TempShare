import React, { useState, FC, useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import NetInfo, {
  useNetInfo,
  NetInfoState,
} from '@react-native-community/netinfo';
//import { measureConnectionSpeed } from 'react-native-network-bandwith-speed';

import { type IMNetInfoProps } from './types';
import {colors,typography} from '../../../atoms';

const IMNetInfo: FC<IMNetInfoProps> = props => {
  const { title } = props;

  const [networkType, setNetworkType] = useState('');
  const [isNetwork, setIsNetwork] = useState('');
  const [speed, setSpeed] = useState('');

  const internetState: NetInfoState = useNetInfo();

  const getNetworkBandwidth = async () => {
    // try {
    //   const networkSpeed = await measureConnectionSpeed();
    //   setSpeed(
    //     parseFloat(networkSpeed.speed).toFixed(2) + ' ' + networkSpeed.metric,
    //   );
    // } catch (err) {
    //   setSpeed('');
    // }
  };

  getNetworkBandwidth();

  useEffect(() => {
    onPress();
    getNetworkBandwidth();
  }, []);

  const onPress = () => {
    const unsubscribe = NetInfo.addEventListener(networkState => {
      setNetworkType(networkState.type);
      if (networkState.isConnected == true) {
        setIsNetwork('You are online!');
      } else {
        setIsNetwork('You are offline!');
      }
      getNetworkBandwidth();
    });

    // unsubscribe event
    unsubscribe();
  };

  return (
    <View style={{ flexDirection: 'column' }}>
      <Text
        style={[
          typography.ButtonLarge,
          { fontSize: 20, color: colors.PrimaryOrange120 },
        ]}>
        Network type
      </Text>
      <Text style={[typography.BodyRegular1, { color: colors.Black }]}>
        {networkType}
      </Text>
      <Text
        style={[
          typography.ButtonLarge,
          { fontSize: 20, color: colors.PrimaryOrange120, marginTop: 15 },
        ]}>
        Connection
      </Text>
      <Text style={[typography.BodyRegular1, { color: colors.Black }]}>
        {isNetwork}
      </Text>

      <Text
        style={[
          typography.ButtonLarge,
          { fontSize: 20, color: colors.PrimaryOrange120, marginTop: 15 },
        ]}>
        Strength
      </Text>
      <Text style={{}}>
        An integer number from 0 to 100 for the signal strength. May not be
        present if the signal strength cannot be determined.
      </Text>
      <Text style={[typography.BodyRegular1, { color: colors.Black }]}>
        internetState.details?.strength
      </Text>

      <Text
        style={[
          typography.ButtonLarge,
          { fontSize: 20, color: colors.PrimaryOrange120, marginTop: 15 },
        ]}>
        Frequency
      </Text>
      <Text style={{}}>
        Network frequency. Example: For 2.4 GHz networks, the method will return
        2457. May not be present if it cannot be determined.
      </Text>
      <Text style={[typography.BodyRegular1, { color: colors.Black }]}>
        internetState.details?.frequency
      </Text>
      <Text
        style={[
          typography.ButtonLarge,
          { fontSize: 20, color: colors.PrimaryOrange120, marginTop: 15 },
        ]}>
        Speed
      </Text>
      <Text style={[typography.BodyRegular1, { color: colors.Black }]}>
        {speed}
      </Text>
      <TouchableOpacity
        onPress={onPress}
        style={{
          alignItems: 'center',
          justifyContent: 'flex-start',
          padding: 10,
          backgroundColor: colors.PrimaryOrange100,
          marginTop: 20,
        }}>
        <Text style={{ color: colors.White }}>Refresh</Text>
      </TouchableOpacity>
    </View>
  );
};
export default IMNetInfo;
