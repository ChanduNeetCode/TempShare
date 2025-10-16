import { Platform, StyleSheet } from 'react-native';
import { actuatedNormalizeHeight, actuatedNormalizeWidth } from '../../../../src/utils/utility';
import  typography  from '../../../../dff_library/ui_components/atoms/typography/index';

export default StyleSheet.create({
    containerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        marginTop: actuatedNormalizeHeight(50),
      },
      headerContainerStyle:{
        alignSelf: 'center',
        top: actuatedNormalizeHeight(20), 
      },
      headerStyle:{
        ...typography.HeadingBold2
      },
    textStyle: {
        alignSelf: 'flex-start',
        color: '#000',
        fontSize: 14,
        marginLeft: actuatedNormalizeWidth(10),
        marginBottom: actuatedNormalizeHeight(10),
      },
      
});