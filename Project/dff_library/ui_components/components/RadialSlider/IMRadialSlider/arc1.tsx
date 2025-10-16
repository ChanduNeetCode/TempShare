import React from 'react';
import { Dimensions } from 'react-native';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

import { actuatedNormalizeHeight, actuatedNormalizeModerateScale } from "../../../utils/utility";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const d = "M" + " " + "0" + " " + actuatedNormalizeHeight(0) + " " + "A" + " " + actuatedNormalizeModerateScale(420) + " " + actuatedNormalizeHeight(420) + " " + "0" + " " + "0" + " " + "0" + " " + SCREEN_WIDTH + " " + actuatedNormalizeHeight(0)
const d1 = "M" + " " + "-2" + " " + actuatedNormalizeHeight(5) + " " + "A" + " " + actuatedNormalizeModerateScale(420) + " " + actuatedNormalizeHeight(420) + " " + "0" + " " + "0" + " " + "0" + " " + (SCREEN_WIDTH + 7) + " " + actuatedNormalizeHeight(5)
const arc1 = () => {
    return (
        <Svg style={{ position: 'absolute'}}>
            <Defs>
                <LinearGradient id='grad' x1="0%" y1="0%" x2="100%" y2="0%">
                    <Stop
                        offset="50%"
                        stopColor="#FF740A"
                        stopOpacity={1}
                    />
                    <Stop
                        offset="100%"
                        stopColor="#D2D2D2"
                        stopOpacity={9}
                    />
                    <Stop
                        offset="4%"
                        stopColor="#D2D2D2"
                        stopOpacity={1}
                    />
                </LinearGradient>
                <LinearGradient id='grad1' x1="0%" y1="0%" x2="100%" y2="0%">
                    <Stop
                        offset="0%"
                        stopColor="#B8BBC7"
                        stopOpacity={0.1}
                    />
                    <Stop
                        offset="50%"
                        stopColor="#B8BBC7"
                        stopOpacity={0.1}
                    />
                    <Stop
                        offset="90%"
                        stopColor="#B8BBC7"
                        stopOpacity={0.1}
                    />
                </LinearGradient>
            </Defs>
            <Path id="curve" d={d} stroke="url(#grad)" stroke-linecap="round" fill="none"></Path>
            <Path id="curve" d={d1} stroke="url(#grad1)" strokeWidth={10} stroke-linecap="round" fill="none"></Path>
        </Svg>
    )
}
export default arc1;