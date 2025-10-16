# Blur Effect v1.0.0

## Installation

Using npm -
$ npm install @icicibank/tsg1_2259_rn_dff_library@*.*.*

How to use BlurEffect components -

import { IMBlurEffect } from '@icicibank/tsg1_2259_rn_dff_library'

## IMBlurEffect

| Props                            | Params   | isRequire | Description                                                  |
| -------------------------------- | -------- | --------- | ------------------------------------------------------------ |
| blurType                         | BlurType | Yes       | Blur type for the component                                  |
| blurAmount                       | Number   | Yes       | A number to control the intensity of the blur effect.        |
| blurStyle                        | Object   | No        | Styles for the BlurEffect                                    |
| blurRadius                       | Number   | No        | A number to control the radius of the blur container.        |


## IMBlurEffect example

              <IMBlurEffect
                blurStyle={styles.blurContainer}
                blurType='light'
                blurAmount={100000}
                reducedTransparencyFallbackColor={'white'}
              />
