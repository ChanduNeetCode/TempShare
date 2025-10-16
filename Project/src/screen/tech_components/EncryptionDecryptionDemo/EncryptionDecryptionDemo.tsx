
import React, { useEffect, useState } from 'react';
import { BackHandler, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../../../src/routes/RootStackParams';
import CustomStatusBar from '../../../components/CustomStatusBar/customStatusBar';
import colors from '../../../../dff_library/ui_components/atoms/colors';
import HeaderComponent from '../../../../src/utils/HeaderComponent/index';
import { encrypt } from '../../../../dff_library/techical_components/components/EncryptionDecryption/IMEncryption'
import { decrypt } from '../../../../dff_library/techical_components/components/EncryptionDecryption/IMDecryption'
import { decryptAEM } from '../../../../dff_library/techical_components/components/EncryptionDecryption/IMDecryptionAEM'
import { enviornment } from '../../../../dff_library/techical_components/components/EnviornmentVariable/IMEnviornmentVariable';

type Props = NativeStackScreenProps<RootStackParamList, 'EncryptionDecryptionDemo'>;

const EncryptionDecryptionDemo = ({ navigation }: Props) => {

  const [encryptedData, setEncryptedData] = useState('')
  const [encryptedKey, setEncryptedKey] = useState('')
  const [decryptedData, setDecryptedData] = useState('')
  const [decryptedAEMData, setDecryptedAEMData] = useState('')

  function handleBackButtonClick() {
    navigation.goBack();
    return true;
  }
 
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        handleBackButtonClick,
      );
    };
  }, []);

  const encryptOnPress = async () => {
    try {
      const res = await encrypt('{"employee":{"name":"Ashok kumar reddy","salary":56000,"married":true}}',enviornment.DEV);
      
      // const res =["r9DdVSEI6rr/vDXy4w8wUMUQxs4lDogKmciSJvtxaToqVh6DX9d0i3I3kRh4UHjiVdHa+Zq1GqDXsWPaP8Et4RF9kS0eyUIsd9USiilLa4CGHJebXAAN/FP6/35INb7ql4CzuKJ7glSeWPtYaKZXFERLzayW0A+gFGaRg/HTJgQpQQKKDSjCqyWyxFpAo9qGBtgKcOkyyoN4/RNjjq/tSBWXVEioGhfK+3XqYmL2abB2qqnP3pTUoBuFf3cJKIWwnYvA7JqF8CW7OJbPw4rAKhxGI7F94amtwch4Dd5QlxxA4BWufkfEBJGjRi6Vq+szKxgvQBe5cU8803n6q8XklCLAVE7CBxo3zfm2SI1u4c5KbM0Nui5n5BTzo4/3TgytcoHjgn0USqJnZv5YPKPm838YoulHioq533HlOfU9KGN6i5LeRhjB70l8GHux9U3jeRhyBtrbuM5LKTPwTbp1nnvqstQ71HM7+m/uN7Dywk4k6udMAFCSpD7jpwWeLEYuH7GpmaU+PzTqQjtkl2mUaF3K/BHx2VxbAiquzQTfySxaCi0Sd0hxhVokODEeD5qSr3mCozbAfb7ZqXDE6Odn0y6NkJL43NPlIO/f3oj+0aSZcnhWF4oz5FQPL6HDAG4IRm/yjBBPCjrs+8xJiwnjkY6E/Dh4shMCk5iDFgge3tc=", "b2VzY2tiZ2RuenF0KJpO4SHPagNmfsPYPiLskb3iqxC4kVF8kUeGyri/+95l59ZfZH+dfj7Auzdr/4x8D5Yy3FFNt6MkCUWDMyg7QbqQEk9hCKZgfXPP1G5HUA0CBNRLoOHoTDoFdLiYGCTawYh8j187JZvv9APdnQe9SHeCBrkqHzZ0JVx7oCpc11UfxoJO/fixTBDDpM+/E9Q1J698aJTsPvaXweEnpbaxzvfLNMZjr77hn1CGGfxdSZElnk0gi69rnzhSCQqAf6Jr0aapbEiEnWfaFST12DRA54curEK/iXs7MZb2j/OD23Ia"]
      setEncryptedKey(res[0]);
      setEncryptedData(res[1]);
    }
    catch (error) {
    }
  };
  const decryptOnPress = async () => {
    try {
      if (encryptedData) {
        const res = await decrypt({ key: encryptedKey, value: encryptedData },enviornment.DEV)

        setDecryptedData(res);

      }
      else {
      }
    }
    catch (error) {
    }
  }

  const decryptAEMOnPress = async () => {
    try {
      const result = await decryptAEM("+fBZxyOlGvTTpYEwf7wVNOl/C0zPoRkIpr+Ua5ocOp1YIe3HXacFL5vZc3eafw5OmtVYJm0tQ3jcqpOt//gUNovAAh96kk5vXq3OxpHMX4G42s6N7hYZWDZpmFDVfuzEWJk24gGQpoSF5nBQOTalrs038mNvg/K+hjhh2W52UL14tog9MDFdfCj+x8FUJXcP3vYsaaEDJPMpV7PSxiNXM5PuAx6zryGTYXStqDY8LMSAfMMB4PhxYtjjOv2kDLVqSDd0sSzQqNNxi1IisA/ZsldUM7J30ouU1tdQFxsO5Fznw8ZdIABWAvykDUWwsEIxZS4TQqHGi2JDsIZrAS5PRiszPGSmYFyGjbHjpt3I9Pjz1MENSOs9/wRlTjV4Ebbfq/lGB0KXuP2vI2yk94YWCqhvbdiEY2W+xsMhrKtY6AqmaIOdyGdkvCzI7T3ayFkDauP29udkB0hyHSDS7W80jr7KzZalJw6b/Qv/SwGuq3HdXdprmDI2jNAVfF7KutybjLrU4NxBk4F2bcjrnUssy/S89F9OLhKYM2kJGJwcYfR7QXDvdwKxULPJWgC2SINUAIPIh/0ocya58D/BrasKWK0JtvDSXstchyqnaGLgiGvCW0/pcaNFOJnO1dFBhiPT9AG8o6j16oBK2mdEYj0jTphCVwzbLEq70tebnSt1Tmpk0fNAd74lT2O1FZwOOtC6PDIJwflcBNf3OfLyxo7XmcSz/jBpeyMM5k+1KLIEMVQnhywoEsPXe5kODy58xqb6JtAXi+CsPRtxDNmhq0ro399yjS5dFJmw41KcslXSd7sxHnpTPsTeTvbLIym+DlrtJ+J+8EcySzm0JonEQ+gS6Vj1XZvgzoKEbhHCSzDQJvacsWd7JRm15T/WS40WzAFCznjpMyNCR1Xsz+pMtdwYA2z1vVPZxn8wmUEmhiHmgWIDt7wJ7jVGMBn+hsd/3rIX9DarUZ+7LdwO5yDFfGq1rpENe30yik/4HhIvKDr4R7qFnDzWIna06a1EDWUzQo/zTZwR5cLMC2VabiGQpyYZo3J/keAS7YzjvgBDGQ5sBoENO8svVW2YzwUU4MYc0XOv0Omu7dh6aHSxcDscdXOYsSe7tWG+cuVnEghaY5BIyDXOQqJwnWcQk/9OWzTwFWixY+mGCQiaXdqLohiS4NzsOrLnQkBCULiCNhMosEGaEYOjKboAjeEDHAVfFb339ccwgTRFxRAp/qal4qgZfJ05xnHqKk7Dpc366PmnOWY/PVkqi8tvfkIuS6L9uebpv8Vo8CGCo9EOX+tMJRLG46bpS6WDzXNXdjb17o2JUgCtMZ0QtK3ndPol8YrFEg5ox1hhehxoXIftiF7W+r86W82h2Ifl2j7KRGGzDY+29EeGEwvsRHKdzll0T9r1psDgLt6SKe6XMiPYVK/5+hKbNEeC2dr14eKRY/8TgTzkoK/CQ8KyUH5jTrGEQtuWJygSKbXWCApoQCLNqJhUorcz/ABLaSn9JeksmirnnWvKZ3QUPN4TwWTXD7nAuJAG2G+HmsOxqhvUSP7YwTc4Or+zzgjVUAuW1+26VU9I1pj0r1K5idQjGN4vtH3UK1Vel2ozKJSK3myvo9u8WACMh/W3RJ55NFW1jV4C+bcf5zr0gx0Qaeow/U5fhdmOk4U0XA4XcMjFSCY72IkEslgN2A+Uoz3cCtlDSeo3SnmYX+Ha3nhb4gNtA0z9HKGYIO2Tax61N4VJLJG43dRZ+TXwXmbykVUmZ6reSme60sWLPgF7ETXig1BJM4PLcg+TXuNCPFMLtMLigRy0mFbq9MFG/m9GotsuoJTbtspHflPZfuGS1pJ1t2A625njrzFPc2qP2IQugSLIftXDkYpx2ELXA6A81jsrByWvlW8pEsemzfEIuwkZKMHD2PtOA1m6TMU7uRq39+Eld1N24QSWtwWi9Q==<<DELIMIT>>YJKSnvIwOl4E1kVdhozlQw13ntyQ5XkW2/JxHPLKRHCKTtHNqWnd4YDNIAu6WBBJFuk9h/lCQlwP9RzcBpGqVnzkd+V4vycZ+WmsuOsALF3fyo3Yt2qGUoIr+scXUxDGfm3HZ1lfytgQj4fYxmZFLXddeKwIHEGuwNPZHeM/sbr6g9O8mIvjD3cf+dRYymYjZkld3xIadViItDd+GKn08MeQ3lyCAh5hKCIf9W9q/+ddn2gBZfx93cz5XjQVG+3F7V6li8LZkxUqySZb25VVXo3TMfQBl3FHgd0AASWwsayhI3k226hJk8lKN1rC1/6DCtn2mrK+hP7Y3NjwIy53Rkn9o7uxur2FZ/zf9xN9qZ1rGqYURqrJESR2GHC3EelLF283woe2ptUPIs0jSc5YsQFqBPdzDTRpAaWwRffTZESmf1Bal2vdrSQ3hsp0y1iCgWgcl3daDZPELU69SM/r8GgXMISjOdJFfKb1jyvNcUKC6t5CGKY7fRaM1YyWwFBmp9/lBXYkz+mjHF39q/3Nier/U+cSheGqJU3XKcsGIXQTHbo9hH8PqDVATrsPPbzcDch1lF8kwj1HFICd1D63h8grE3Qnh7cWIVmxlU8BB7mQ58XK98sUQyjI5bKJwl2q/8oT0Ku3mCtvT4ydPHH0Ly9vZofF9TI0916sVJJplCI=",enviornment.DEV)
      setDecryptedAEMData(result);
    }
    catch (error) {
    }
  }

  return (

    <View >
      <CustomStatusBar
        gradientColorsArray={[
          colors.GradientOrangeStart,
          colors.GradientOrangeEnd,
        ]}
      />

      <HeaderComponent navigation={navigation} title={"Encryption Decryption"} />
      <SafeAreaView>
        <ScrollView style={{ marginBottom: 250 }}>

          <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 0 }}>

            <TouchableOpacity onPress={encryptOnPress} style={{
              alignItems: 'center',
              backgroundColor: colors.GradientOrangeEnd,
              borderRadius: 10,
              justifyContent: 'center',
              margin: 20,
              padding: 10,
            }}>
              <Text >
                Encryption
              </Text>
            </TouchableOpacity>
          </View>
          <>
            <Text style={{ color: colors.GradientOrangeEnd, margin: 10 }}>EncryptedData: </Text>
            <Text> {encryptedData}</Text>
            <Text style={{ color: colors.GradientOrangeEnd, margin: 10 }}>EncryptedKey: </Text>
            <Text>{(encryptedKey)}</Text>
          </>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>

            <TouchableOpacity onPress={decryptOnPress} style={{
              alignItems: 'center',
              backgroundColor: colors.GradientOrangeEnd,
              borderRadius: 10,
              justifyContent: 'center',
              margin: 20,
              padding: 10,
            }}>
              <Text >
                Decryption
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={{ color: colors.GradientOrangeEnd, margin: 10 }}> Decrypted Data</Text>
            <Text>{decryptedData}</Text>
          </View>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity onPress={decryptAEMOnPress} style={{
              alignItems: 'center',
              backgroundColor: colors.GradientOrangeEnd,
              borderRadius: 10,
              justifyContent: 'center',
              margin: 20,
              padding: 10,
            }}>
              <Text >
                Decryption AEM
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={{ color: colors.GradientOrangeEnd, margin: 10 }}> AEM Decrypted Data</Text>
            <Text>{decryptedAEMData}</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}
export default EncryptionDecryptionDemo
