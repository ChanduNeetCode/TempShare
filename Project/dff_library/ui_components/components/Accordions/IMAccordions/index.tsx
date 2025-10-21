import React, { useState, useEffect } from 'react';
import {
  FlatList,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import styles from './styles';
import { IMAccordionProps } from './types';
import { actuatedNormalizeHeight } from '../../../utils/utility';

const IMAccordions: React.FC<IMAccordionProps> = props => {
  const {
    isFlatlistAccordian,
    isFlatlistLastline=true,
    isHighlighted,
    isMultipleOpenAllowed = true,
    isSeperateToggle = false,
    isWithoutIcon,

    textHighlightString='',
    
    refs, 

    items,

    contentItemTapFunction,
    toggleFunc,
    toggleCloseFunc,
    toggleOpenFunc,
    
    itemSeperatorComponent,
    
    backgroundHighlightColor,
    cardContentStyle,
    flatListAccordionContainerStyle,
    headerStyle,
    innerSeperationLineStyle,
    selectedparentstyle,
    titleViewStyle,
    unselectedparentstyle,
    
    redirectionTextProp,
    onViewableItemsChanged,
    viewabilityConfig,
    getItemLayout,
  } = props;

  const [list, setList] = useState(items);
  const [listRender, setListRender] = useState(0);

  useEffect(() => {
    setListRender(listRender + 1);
    setList(items);
  }, [items]);

  const toggleAccordion = (index: number, isOpen: boolean) => {
    toggleFunc && toggleFunc(list[index], index);
    isSeperateToggle && (isOpen ?  toggleCloseFunc && toggleCloseFunc(list[index], index) :  toggleOpenFunc && toggleOpenFunc(list[index], index))

    if (!list[index].isDisableToggle) {
      setListRender(listRender + 1);
      if (isMultipleOpenAllowed) {
        list[index].isOpen = !isOpen;
      } else {
        list.map((_item, itemIndex) => {
          if (!list[itemIndex].isDisableToggle && itemIndex != index) {
            list[itemIndex].isOpen = false
          } else {
            list[itemIndex].isOpen = !isOpen
          }
        })
      }
      setList(list);
    }

  };

  useEffect(() => {
    setListRender(listRender+1);
    setList(items);
  },[items]);

  const onPress = (item1: any) => {
    if (contentItemTapFunction) contentItemTapFunction(item1);
  };

  const renderItem = (index: any, item: any) => {
    const innerContent: any = item.content;

    return (
      <>
        {item.isMainTooltip && item.mainTooltipContent && 
         <View style={[styles.mainTooltipStyle1]}>
          <View style={[styles.mainTooltipStyle,item.mainTooltipStyle]}>
            <Text style={[styles.mainTooltipTextStyle,item.mainTooltipTextStyle]}>{item.mainTooltipContent}</Text>
          </View>
        </View>
        }
      <View
        style={[
          isFlatlistAccordian
            ? [flatListAccordionContainerStyle]
            : item.isOpen
              ? [styles.cardContainer,styles.shadow, selectedparentstyle]
              : [styles.cardContainer, unselectedparentstyle]
              
        ]}>
        <TouchableOpacity
          disabled={item.isDisableToggle}
          onPress={() => toggleAccordion(index, item.isOpen,)}
          style={[styles.cardHeader,isFlatlistAccordian&&styles.flatListStyle, headerStyle]} activeOpacity={0.8}
        >
          {isWithoutIcon || isFlatlistAccordian ? null : (
            <View
              style={[
                item.selectIconImage || item.image ? styles.imagesstyle : null,
              ]}>
              {item.isOpen
                ? item.image
                  ? item.image
                  : item.selectIconImage
                : item.image
                  ? item.image
                  : item.unselectIconImage}
            </View>
          )}
          {typeof item.title === 'string' ? (
            <View
              style={
                isWithoutIcon
                  ? [styles.contentStyleWithoutIcon,titleViewStyle]
                  : [styles.contentStyle,titleViewStyle]
              }>
              <Text
                style={[
                  item.isOpen
                    ? [
                      styles.titilebold1,
                      item.selectTitleStyle,
                    ]
                    : [
                      styles.cardTitle,
                      item.unselectTitleStyle,
                    ],
                ]}>
                {item.title.charAt(0).toUpperCase() + item.title.slice(1)}
              </Text>
              <View
                style={[
                  isFlatlistAccordian
                    ? styles.flalisticonview
                    : styles.iconview,
                  isWithoutIcon && styles.withouticonview,
                  styles.descshow,
                ]}>
                {isFlatlistAccordian
                  ? null
                  : item.subtitle && (
                    <Text
                      style={[
                        styles.subTitleStyle,
                        item.subTitleStyle,
                      ]}>
                      {item.subtitle.charAt(0).toUpperCase() +
                        item.subtitle.slice(1)}
                    </Text>
                  )}
              </View>
            </View>
          ) : (
            <View
              style={
                isWithoutIcon
                  ? [styles.contentStyleWithoutIcon,titleViewStyle]
                  : [styles.contentStyle,titleViewStyle]
              }>
              {item.title}
            </View>
          )}
          <TouchableOpacity
            onPress={() => toggleAccordion(index, item.isOpen,)}>
            <View
              style={[
                item.selectIconImage || item.image
                  ? styles.arrowicon
                  : styles.arrowiconwithoutdes,
              ]}>
              {item.isOpen ? item.rightSelectImage : item.rightUnselectImage}
            </View>
          </TouchableOpacity>
        </TouchableOpacity>


       
        {item.isOpen &&
          (item.isContentJSX ? (
            <TouchableOpacity
            activeOpacity={1}
              onPress={() => onPress(innerContent)}
              style={[
                styles.cardContent,
                { padding: innerContent?.length > 0 ? 10 : 0,marginBottom:isWithoutIcon ? actuatedNormalizeHeight(16) : 0 },
                cardContentStyle
              ]}>
              <>{innerContent && innerContent}</>
            </TouchableOpacity>
          ) : (
            //Child list item content (services module)
            <View
              style={[
                styles.cardContent,
                { padding: innerContent?.length > 0 ? 10 : 0 },
                cardContentStyle
              ]}>
              {innerContent &&
                innerContent.length > 0 &&
                innerContent?.map((innerItem: any, innerIndex: number) => {    
                  let innerText=innerItem.text;   
                  const searchData =innerText?.split(new RegExp(`(${textHighlightString})`,'gi')) 
                  return (
                    <View key={innerIndex}>
                      <TouchableOpacity onPress={() => onPress(innerItem)}>
                        <View style={styles.redirection}>
                          {innerItem.image}
                          {/* Code for Highlighting Text */}
                          {isHighlighted?
                          <>
                          <Text
                            style={[
                              styles.redirectionText,
                              redirectionTextProp,
                            ]}>
                                {searchData?.map((partData:any,innerTextIndex:number)=>{
                                  return <Text key={innerTextIndex} style={partData && (partData.toLowerCase() === textHighlightString.toLowerCase())?
                                    [styles.highLightText,backgroundHighlightColor]:styles.redirectionText}>{partData}</Text>
                               })}
                           {innerItem.isTooltip && innerItem.tooltipContent &&  (
                            <View>
                             <Text style={[styles.toolTipStyle,innerItem.tooltipContentStyle]}> {innerItem.tooltipContent}</Text>
                            </View>
                            )}
                            </Text>            
                          </>
                          :
                          <>
                          <Text
                          style={[
                            styles.redirectionText,
                            redirectionTextProp,
                          ]}>
                            {innerItem.text}
                             {innerItem.isTooltip && (
                            <View >
                              <Text style={[styles.toolTipStyle,innerItem.tooltipContentStyle]}> {innerItem.tooltipContent}</Text>
                            </View>
                            )}
                          </Text>
                          </>
                          }
                        </View>
                      </TouchableOpacity>
                      {typeof innerContent != undefined &&
                        innerContent.length - 1 != innerIndex && (
                          <View style={[styles.seperationLine,innerSeperationLineStyle]} />
                        )}
                    </View>
                  );
                })}
            </View>
          ))}
           { (isFlatlistAccordian|| itemSeperatorComponent) &&
          (index != items.length - 1 &&
            (itemSeperatorComponent||<View style={styles.seperationLine} />))
          ||
           (isFlatlistAccordian || itemSeperatorComponent)&& isFlatlistLastline && (
            itemSeperatorComponent||
            <View style={styles.seperationLine} />
          )
        } 
      </View>
      </>
    );
  };
  return (
    //parent Item for accordian title and subtitle
    <View>
      <FlatList
        extraData={listRender}
        nestedScrollEnabled={true}
        ref={refs}
        data={items}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        getItemLayout={getItemLayout}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ index, item }) => renderItem(index, item)}
      />
    </View>
  );
};

export default IMAccordions;
