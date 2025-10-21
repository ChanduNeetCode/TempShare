# IMRadialSlider v1.0.0
 
## Installation
 
Using npm -
$ npm install @icicibank/tsg1_2259_rn_dff_library@*.*.*
 
How to use RadialSlider component -
import { IMRadialSlider } from '@icicibank/tsg1_2259_rn_dff_library'
 
## IMRadialSlider
 
 ##IMRadialSliderProps
| Props               | Params                               | isRequire |                       Description              |
| ------------------- | ------------------------------------ | --------- | ------------------------------------------     |
| isSlider1StarDisplay|  boolean                             | No        | If you want to display star symbol in the central cylinder of slider1 |
| isSlider2StarDisplay|  boolean                             | No        | If you want to display star symbol in the central cylinder of slider2 |
| slider1Divisions    |  number                              | No        | The no of divisions for slider1 (default 2)    |
| slider2Divisions    |  number                              | No        | The no off divisions for slider2 (default 2)   |
| slider1InputText    |  number                              | No        | The scrollTo for slider1                       |
| slider1Interval     |  number                              | Yes       | The interval for slider1                       |
| slider1Max          |  number                              | Yes       | The maximum value for slider1                  |
| slider1Min          |  number                              | Yes       | The minimum vaue for slider1                   |
| slider2InputText    |  number                              | No        | The scrollTo for slider2                       |
| slider2Interval     |  number                              | Yes       | The interval for slider2                       |
| slider2Max          |  number                              | Yes       | The maximum value for slider2                  |
| slider2Min          |  number                              | Yes       | The minimum vaue for slider2                   |
| amountSymbol        |  string                              | No        | symbol to be displayed before the value in slider1 (default ₹)|
| fillColor           |  string                              | No        | color to fill for slider (default #FAEFE8)     |
| monthSymbol         |  string                              | No        | symbol to be displayed after the value in slider2 (default m) |
| parentStyle         |  View Style                          | No        | to set style for parent                        |
| sideStarStyle       |  View Style                          | No        | to set style for star beside recommended values|
| slider1SelectedData | (data: string) => void;              | No        | callback function for slider1 selected data    |
| slider2SelectedData | (data: string) => void;              | No        | callback function for slider2 selected data    |

### IMRadialSlider example
 
Example 1
```JSX
        <IMRadialSlider
        amountSymbol={'₹'}
        monthSymbol={'m'}
        isSlider1StarDisplay={true}
        isSlider2StarDisplay={true}
        parentStyle={{ marginTop: actuatedNormalizeHeight(100) }}
        slider1Interval={100000}
        slider1Min={100000}
        slider1Max={900000}
        slider2Interval={6}
        slider2Min={12}
        slider2Max={60}
        slider1SelectedData={(a: string) => {}}
        slider2SelectedData={(b: string) => {}}
        slider1Divisions={2}
        slider2Divisions={3}
        slider1InputText={amt}
        slider2InputText={ten}
      />
 ```

 Note:
-----------
The working demo for your requirement is achieved in Demo (styling needs to be done)pls check Demofile 
 
