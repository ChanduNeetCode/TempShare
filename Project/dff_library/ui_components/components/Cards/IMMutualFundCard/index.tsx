import React from 'react';
import { Text, View } from 'react-native';

import {
    ICBankLogo,
    ICChevronRight
} from '../../../atoms/icons';
import {
    actuatedNormalizeWidth,
} from '../../../utils/utility';
import colors from '../../../atoms/colors'
import styles from './styles';
import { type IMMutualFundCardProps } from './types';

const IMMutualFundCard: React.FC<IMMutualFundCardProps> = props => {
    const {
        isleftIcon,
        isRightIcon,

        cardWidth = actuatedNormalizeWidth(312),
        noOfDigitsDisplay = 0,

        backgroundClr = colors.TertiaryBlue100withOpacity3,
        subTitle = '1234',
        title = 'Parag Parikh Flexi Cap',

        subTitleStyle,
        titleStyle,

        cardContainerStyle,
        dotsStyle,
        leftIconStyle,
        rightIconStyle,
        textContainerStyle,

        leftIcon = <ICBankLogo />,
        rightIcon = <ICChevronRight />,
    } = props;
    const circleAry = [];
    let count = 0;
    for (let i = 0; i < subTitle.length - noOfDigitsDisplay; i++) {
        count = count + 1;
        circleAry.push(count);
    }
    const subTitleFormatted = subTitle && noOfDigitsDisplay != 0 ? subTitle.slice(-noOfDigitsDisplay) : '';
    return (

        <View style={[styles.mainContainerStyle, { width: cardWidth, backgroundColor: backgroundClr }, cardContainerStyle]}>
            {isleftIcon && <View style={[styles.leftIconStyle, leftIconStyle]}>
                {leftIcon}
            </View>}
            <View style={[styles.textContainerStyle,textContainerStyle]}>
                <Text style={[styles.titleStyle, titleStyle]}>{title} </Text>
                <View style={styles.dotsViewStyle}>
                    {circleAry.map(index => {
                        return (
                            <View
                                key={index}
                                style={[styles.dotsStyle, dotsStyle]}>

                            </View>
                        );
                    })}
                    <Text style={[styles.subTitleStyle, subTitleStyle]}>
                        {subTitleFormatted}
                    </Text>
                </View>
            </View>
            {isRightIcon && <View style={[styles.rightIconStyle, rightIconStyle]}>
                {rightIcon}
            </View>}
        </View>
    );
};
export default IMMutualFundCard;