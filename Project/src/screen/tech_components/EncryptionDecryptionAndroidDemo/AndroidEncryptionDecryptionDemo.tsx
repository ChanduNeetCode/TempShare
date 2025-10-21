import React, { useState } from 'react';

import { View, SafeAreaView, Text, TouchableOpacity, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import colors from '../../../../dff_library/ui_components/atoms/colors';
import CustomStatusBar from '../../../components/CustomStatusBar/customStatusBar';
import { RootStackParamList } from 'src/routes/RootStackParams';
import HeaderComponent from '../../../utils/HeaderComponent';
import styles from './style';
import {
  EncryptFunc,
  DecryptFunc,
  DecryptAEMFun,
} from '../../../../dff_library/techical_components/components/EncryptionDecryptionAndroid/IMEncryptionDecryptionAndroid';
import { enviornment } from '../../../../dff_library/techical_components/components/EnviornmentVariable/IMEnviornmentVariable';

type Props = NativeStackScreenProps<
  RootStackParamList,
  'AndroidEncryptionDecryptionDemo'
>;

const AndroidEncryptionDecryptionDemo = ({ navigation }: Props) => {
  const [encryptData, setEncryptData] = useState<any>();
  const [decryptData, setDecryptData] = useState<any>();
  const [decryptAEMData, setDecrypAEMtData] = useState<any>();

  const EncryptedData = async() => {
    const jsonObj =
      '{"employee":{"name":"Ashok kumar reddy","salary":56000,"married":true}}';
   
    const res = await EncryptFunc(jsonObj,enviornment.DEV);

    

    setEncryptData(res);
  };
  const DecryptedData = async() => {

  

  let arrayData = encryptData.split(',');
 
  let encryptedRequestData = ['', ''];
  encryptedRequestData[0] = arrayData[0].replace('[', '').trim();
  encryptedRequestData[1] = arrayData[1].replace(']', '').trim();

    const res = await DecryptFunc(  encryptedRequestData[1], encryptedRequestData[0],enviornment.DEV );
   
    setDecryptData(res);
    
  };

  const DecryptedAEMData =async () => {
    const encryptAEMData =
      '/mjo3q/HUgUQMkPRfY80lmitRGUqBzvLpE1UIZqkWs2O6Ci3L6KUOqQPxzj56a768T5yoahPB64Hn2QhRw4FB7BnVRhjAW3/0roYGUEowVBeQ2EH+jsCDyrcfRopnznnUUZTmZhXOkQSogDeXtN/cQTeMr1dfklf9LEuUU8++6Br5N0qeJO7Ol6Nlw08nhyHQ4Gth0nOVBCKcxOJZfl21Mr8aNE0zxjcmV/hCZok5PtP0stlLjKbsXfWU3ivFQNzi36H+67m15GlJsTqvGXhuvQ4pe+Y+3dHAGs4Jyk3bjrajkpbFLNUmkRUE6L40xzJ+TjpJmQm7P4reKFRSz/qF0hyZuCgNtclzcHm2pPnWCMG2g5pLLeycNaPA0Qs3lz3oYHMIFojGE115J37CRcomCOQS8lAcjSnfZSXwjcrEZTmpL79U9rFZh+Xliz6jgsnAuR5qF5ddXmkayggJv0R/+DkXZ7swO/ZtQUgcq0GlEVBr+QyOll+G49tvRLB062K1a+QRwpVP6PWE3SwIehwys2sEnRLOcrDAAdHcbT+amo875FqFpzfXJuRrZLwu3wuo9G2cxpQmlGkH5A0COVHUk9LnGuA+ZGR/F7wIjcBELGE2LSVrjP+zwQyKimFveqR4TZEYK9E6/hZUO4jFjnPJKDTuPdZ5LWeDoDFgs9gwKoBapyeqLQgZ9ZNF2cTW7U9oQzO7bd2h9/BKDefGZcWZP+rX3ZdHIZu8D0JHuFaY/pFO9GGxYuYR26c0vr6MNJYf2MulZEF6wH08XvOgEv3gydMg1qluJiLXVS4IsQU9VwRZ6x07zDK3Q/gqpchIy9wRYZtesZZqVTIa+MheX1yRo9N4umnoa1jwAR5SKTbyFNqbU9YJDugUAqSdC0YfjjPekAYih91ov+FjEI6lETXDBcLDvHz7jp0x0AmgMs2sS66jdhbP7Unh3TZFRihuqx05MFmnmBAlcAiZMyKkfp2ptX1oV6J/nZs+5P3hcRCJbX8p6IF9Ua+be3oFNqLrJbo6B5Zl8ZaIQDnzPbqTmbP9WHL/FLZz0hXQO5fYndB016ziSdi3lInsagGHMYq6VbQ4ane0VAHlE3lQ5UIviRw5D6FQtSa6vOSt9USsxb4T5AA5DRYMu+PRIx6ZDelVA3M4XC7vi4P3+3+Vvk4SOkppicHA9i5FY5AnaRv0jXMQ84yJp5WT4ktCxWPvpwcVhZlE7MKstMR0toQIVcIi7CmKYsxjyb9IXJPOHwg5oayLGFgwdZeTRpaFbim/ZTcFhYNdsGiaBW+oCfxNS+MHyqBqOKRW4dq4LXOSLhNkm0x3u80WCzoLHahcAd/Q1jP2vmCAiMTED4jBhI75at0wO4/g77sxwww1fMnk4PozLq9L2rLg0sahRnk5odprjl9ZIuEkJcjKA6BErhVVtYCYRc7lCmTyZIi9tWLdTqMTcqib4bkqVbRr6lch+DxPwj3yraPRkEAEh793TT7DD6q27C9OvUKxKW2gQbcnam00eBvqXxET2eHPb3P/jcmijbxRogwhL9lL9yBMKVIVm5nPM8/JSf8goTtqZ6igvqYdqZNEysVQ090otDQB+bVxTcnTJ/8vM+rvFGIl9/YbNDHwEwysjDqb4NiOShCvWo0kv0vUyhMOSIkpebe1Q9XTk6+zLdl/vdkNZyahtKc8rjNLsVoPGgMBm5jadIZOSXwsBo058C6ZdcS9rO1TNSWCbQeEkTH6mRp6MTVtYZ2ppajdZg5GF5BNG2DMEuTxyPDwpXsxnMV0h6Bkj/B5pzSHT6Fw8kOwRWxMpdNLorNgImndu9Ne0mYNJz502XMCFhc1MVGn8ywXNVp51SWJ6jAh5dvvOy2tvdJtAA4HurPKtWXrh7xQFNj9Hc+lVh+fZih6+y6MK3FMBk8PTNILvqEZgUEaZWxxHLCHvVk9c+XulW9JbEXRw==<<DELIMIT>>Rl5EKXj6tgfcbpy/EH7w5tHOt4msONoUCMiZVzJ9YiczzWzbpaCvCTtBAv3I2/mA8RwHGKduMGH4LW/ElA8aG0VSkceNfsUP0ZG9Op0bqIf6CSsinjcrx58KSdkjTKXCEOzliixyDqFvi1M4IdBa9IUaTX6H9ymvQlx68MuN+jKB9T8NfD+p9XTZ8c6D8oqlA+wGBnqPhKrnitLJP7AGjIjqJ1BxN7oDg6eJ1Pau8otgoQBlsnLktyKJNpdfvjEgU41bsk0c+1gK/Vc1RHUoMzRn717cfDAX9wv8iOzzPo/D48fEh40aM3/DgsR3zbnNESr/yMDVCl8cUTsnnmvDHkTU/NXhqZZLNjQNahNNa4LfGyPtaxcthHyYQn7/o2uLYAWRjD2GJTR5RX89YZO1Ox5mwxLBbF3tXn/nuylbcLpo+ucZmVo8a50GmQJ4JHQVgsWG1Gf5phFBB2q09JjIBJ3LeQoYRpmsSIdhA+lI2IwS4g65UaVEdKhmNVRdg/zruwKEu9cVCHzq8xU9IV5MoNQVz1ocZ69fPE7g1pWk4c+mVExfC3WzxLCH6FHS4IqyLWnKQEwzW/BBc7rShrP6t3umGyvj3TZHj52Q3yFR6gmzfei54osRZuCJvJntozOCnfv5l8EOVzW87MLw6kosChBRuJCflfgbtjdbItEktT4=';
    const res =await DecryptAEMFun(encryptAEMData,enviornment.DEV);
    setDecrypAEMtData(res);
  };
  return (
    <>
      <CustomStatusBar
        gradientColorsArray={[
          colors.GradientOrangeStart,
          colors.GradientOrangeEnd,
        ]}
      />
      <HeaderComponent navigation={navigation} title={'HybridEncryption'} />
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity style={styles.buttonStyle} onPress={EncryptedData}>
            <Text style={styles.button}>Encryption</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle} onPress={DecryptedData}>
            <Text style={styles.button}>Decryption</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={DecryptedAEMData}>
            <Text style={styles.button}>Decrypt AEM Data</Text>
          </TouchableOpacity>
          
          <Text style={{color:'black'}}>Encrypted Data ------- {encryptData}</Text>
          <Text style={{color:'black'}}>Decrypted Data ------- {decryptData}</Text>
          <Text style={{color:'black'}}>Decrypted AEM Data ------- {decryptAEMData}</Text>
        </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default AndroidEncryptionDecryptionDemo;
