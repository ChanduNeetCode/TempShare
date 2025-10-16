# IMAccountSelectDrawer v1.0.0

## Installation

Using npm -
$ npm install @icicibank/tsg1_2259_rn_dff_library@*.*.*

How to use in IMAccountSelectDrawer components -
import IMAccountSelectDrawer from '@icicibank/tsg1_2259_rn_dff_library'

## IMDefaultDrawers

| Props                 | Params      | isRequire | Description                                            |
| --------------------- | ----------- | --------- | ------------------------------------------------------ |
| isLeftIcon            | Boolean     | No        | left icon visibility based on boolean value            |
| isRightIcon           | Boolean     | No        | right icon visibility based on boolean value           |
| isVisible             | Boolean     | No        | Modal visibility based on boolean value                |
| onSelectAccount       | () => void  | No        | callback function for Select Account                   |
| onClickBlur           | () => void  | No        | callback function when click on blur part              |
| onClickButton         | () => void  | No        | callback function when click on button                 |
| buttonName            | String      | No        | text for button name                                   |
| primaryTitleText      | String      | No        | Title on primary text                                  |
| selectedAccount       | String      | No        | Title on selected Account                              |
| title                 | String      | No        | Title on secondary text                                |
| primaryTitleTextStyle | TextStyle   | No        | Styles for the primary Title Text                      |
| titleStyle            | TextStyle   | No        | Styles for the title text                              |
| closeIconStyle        | ViewStyle   | No        | Styles for the closeIcon container                     |
| modalContainer        | ViewStyle   | No        | Styles for the modal container                         |
| modalTouchableStyle   | ViewStyle   | No        | styles for modalTouchable container                    |
| modalViewStyle        | ViewStyle   | No        | Styles for the modalView container                     |
| secondaryTitleStyle   | ViewStyle   | No        | Styles for the secondaryTitle container                |
| container             | JSX.Element | No        | for passing child nodes which contains many components |
| blurContainer         | JSX.Element | No        | for passing the blur Effect view                       |
| closeIcon             | JSX.Element | No        | for passing the close icon component                   |
| handleClose           | ()=>void    | No        | onPress of close Icon                                  |

### IMAccountSelectDrawer example

const sampleData = [
{
id: 1,
isOpen: true,
title: <Text style={{ padding: 13 }}>Preffered</Text>,
isContentJSX: true,
content: (
<IMNormalList
//rightIcon={<Refresh />}

          leftIcon="logo"
          isListHeader={false}
          subLineKey={'actNumber'}
          starIconKey='starLogo'
          // ListHeadingTitle={'All payees'}
          // ListEndHeadingTitle={'Last paid'}
          headingKey="name"
          //date={'date'}
          //amt={'amt'}
          list={data}
          isSeparator={false}
          isOnPressHighlight={true}
          disableIcon={
            <View
              style={{
                borderWidth: 2,
                borderColor: '#000',
                width: 20,
                height: 20,
                borderRadius: 10,
              }}></View>
          }
          highlightIcon={
            <View
              style={{
                borderWidth: 4,
                borderColor: '#f0792e',
                width: 20,
                height: 20,
                borderRadius: 10,
              }}></View>
          }
          highlightWidth={2}
          highlightColor="#f0792E"
          //itemSeparateLineStyle={{borderWidth:0}
          itemViewStyle={{
            borderWidth: 1,
            borderRadius: 15,
            marginVertical: 10,
            borderColor: '#ff0f0f',
            width: 340,
          }}
          //mainContainerStyle={{borderColor:'#ff0f0f',borderWidth:3,borderRadius:30}}
          onItemClick={handleItemClick}
        />
      ),
    },
    {
      id: 2,
      isOpen: false,
      title: <Text style={{ padding: 13 }}>Credit Cards</Text>,
      isContentJSX: true,
      content: (
        <IMNormalList
          //rightIcon={<Refresh />}

          leftIcon="logo"
          isListHeader={false}
          subLineKey={'actNumber'}
          starIconKey='starLogo'
          // ListHeadingTitle={'All payees'}
          // ListEndHeadingTitle={'Last paid'}
          headingKey="name"
          //date={'date'}
          //amt={'amt'}
          list={data}
          isSeparator={false}
          isOnPressHighlight={true}
          disableIcon={
            <View
              style={{
                borderWidth: 2,
                borderColor: '#000',
                width: 20,
                height: 20,
                borderRadius: 10,
              }}></View>
          }
          highlightIcon={
            <View
              style={{
                borderWidth: 4,
                borderColor: '#f0792e',
                width: 20,
                height: 20,
                borderRadius: 10,
              }}></View>
          }
          highlightWidth={2}
          highlightColor="#f0792E"
          //itemSeparateLineStyle={{borderWidth:0}
          itemViewStyle={{
            borderWidth: 1,
            borderRadius: 15,
            marginVertical: 10,
            borderColor: '#ff0f0f',
            width: 340,
          }}
          //mainContainerStyle={{borderColor:'#ff0f0f',borderWidth:3,borderRadius:30}}
          onItemClick={handleItemClick}
        />
      ),
    },

];
<IMAccountSelectDrawer
isVisible={modalVisible}
title={'Select account'}
closeIcon={<ICGeneralClose />}
container={
<IMAccordions // isFlatlistAccordian={true}
items={sampleData}
/>
}
/>
