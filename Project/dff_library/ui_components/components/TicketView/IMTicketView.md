# TicketView v1.0.0

## Installation

Using npm -
$ npm install @icicibank/tsg1_2259_rn_dff_library@*.*.*

How to use in BasicMicroInteractions component-
import { IMTicketView } from '@icicibank/tsg1_2259_rn_dff_library'

## IMTicketView

| Props                           | Params      | isRequire | Description                                                                        |
| ------------------------------- | ----------- | --------- | ---------------------------------------------------------------------------------- |
| bottomContainer                 | JSX.Element | No        | Bottom conatiner of Ticket view                                                    |
| containerStyle                  | ViewStyle   | No        | parent style for ticket View                                                       |
| dottedLinesContainer            | JSX.Element | No        | Dotted Line conatiner for TicketView (custom if required)                          |
| dottedBottomLinesContainer      | JSX.Element | No        | Dotted Bottom Line conatiner for TicketView (custom if required)                   |
| dottedLeftCircleStyle           | ViewStyle   | No        | dottedLeftCircleStyle style for ticket View                                        |
| dottedRightCircleStyle          | Viewstyle   | No        | dottedRightCircleStyle style for ticket View                                       |
| dottedLinesContainerStyle       | Viewstyle   | No        | dottedLinesContainerStyle style for ticket View                                    |
| dottedBottomLinesContainerStyle | Viewstyle   | No        | dottedBottomLinesContainerStyle style for ticket View                              |
| topContainer                    | JSX.Element | No        | Top container of Ticket view                                                       |
| middleContainer                 | JSX.Element | No        | middle conatiner of Ticket view If bottom conatiner is not there It acts as bottom |

dottedLeftCircleStyle

### IMTicketView example

```JSX
const kycTopConatiner = () => {
    return (
      <View>
        <View style={[styles.kycTopStyle]}>
          <Text style={[styles.kycTextStyle]}>KYC UPDATE</Text>
        </View>
        <View style={[styles.panDetailsStyle]}>
          <Text style={ [styles.labelCapitalRegular] }>
            PAN DETAILS
          </Text>
          <Text style={[typography.BodySemiBold3,{ marginTop:10,color:colors.NeutralGrey140}]}>
            AQHPA7161K
          </Text>
        </View>
      </View>
    );
  };

  const kycmiddleConatiner = () => {
    return (
      <>
        <View style={[styles.detailsStyle]}>
          <Text style={[styles.personalTextStyle]}>PERSONAL DETAILS</Text>
        </View>
        <View style={ [styles.addressStyle]}>
          <Text style={[styles.personalAddressStyle]}>
            A Anusha, 17/09/1986,

          </Text>
          <Text style={[styles.personalAddressStyle]}> 9022463816, andavarapu.anusha@gmail.com</Text>

        </View>
      </>
    );
  };
  const kycbottomConatiner = () => {
    return (
      <>
        <View style={[styles.detailsStyle]}>
          <Text style={[styles.personalTextStyle]}>ADDRESS DETAILS</Text>
        </View>
        <View  style={[styles.addressStyle]}>
          <Text style={[typography.BodyRegular3,{color:colors.NeutralGrey140,}]}>
            Flat no. 56, Sunshine avenue, green valley,
          </Text>
          <Text style={[typography.BodyRegular3,{color:colors.NeutralGrey140}]}>Indiranagar, Bangalore -
            560010, Karnataka</Text>
        </View>
      </>
    );
  };

      <IMTicketView
        containerStyle={styles.containerStyle}
          topContainer={kycTopConatiner}
          middleContainer={kycmiddleConatiner}
          bottomContainer={kycbottomConatiner}
        />
```
