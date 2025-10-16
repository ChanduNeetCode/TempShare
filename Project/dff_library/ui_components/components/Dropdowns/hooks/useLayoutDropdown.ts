/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useMemo } from 'react';
import { Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

export const useLayoutDropdown = (
  dropdownStyle: any,
  dropdownWidth: number,
) => {
  const [dropdownPX, setDropdownPX] = useState(0);
  const [dropdownPY, setDropdownPY] = useState(0);
  const dropdownHEIGHT = dropdownStyle.height;
  const dropdownWIDTH = dropdownWidth;
  const onDropdownButtonLayout = (
    w: number,
    h: number,
    px: number,
    py: number,
  ) => {
    if (height - 18 < py + h + dropdownHEIGHT) {
      //on Top of view
      setDropdownPX(px);
      setDropdownPY(py - dropdownHEIGHT);
    } else {
      //on Below of view
      setDropdownPX(px);
      setDropdownPY(py + h + 4);
    }
    //setDropdownWIDTH(dropdownStyle?.width || w);
  };

  const dropdownWindowStyle = useMemo(() => {
    return {
      ...{
        overflow: 'hidden',
      },
      ...dropdownStyle,
      ...{
        position: 'absolute',
        top: dropdownPY,
        height: dropdownHEIGHT,
        width: dropdownWIDTH,
      },
      ...{ left: dropdownStyle?.left || dropdownPX },
    };
  }, [dropdownStyle, dropdownPX, dropdownPY, dropdownHEIGHT, dropdownWIDTH]);

  return {
    onDropdownButtonLayout,
    dropdownWindowStyle,
  };
};
