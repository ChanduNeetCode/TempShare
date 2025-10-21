# Bread Crumbs v1.0.0

## Installation

Using npm -
$ npm install @icicibank/tsg1_2259_rn_dff_library@*.*.*

How to use Bread Crumbs components -

import { IMBreadCrumbs } from '@icicibank/tsg1_2259_rn_dff_library'

## IMBreadCrumbs

| Props                   | Params     | isRequire | Description                                    |
| ----------------------- | ---------- | --------- | ---------------------------------------------- |
| selectedIndex           | number     | No        | Default selected index number                  |
| onSelect                | Void       | No        | on tap function for selecting call result data |
| selectedTextStyle         | TextStyle     | No        | Style for the selected text                    |
| unSelectedTextStyle       | TextStyle     | No        | Style for the unselected text                  |
| data                    | array      | yes       | array of the objects for the bread crumbs      |
| componentContainerStyle | view style | No        | View style foe the container                   |
| textStyle               | Text style | No        | Text style for the text                        |
| slashStyle              | Text style | No        | slash style for the text                       |

## IMBreadCrumbs example

             <IMBreadCrumbs
                data={listData}
                onSelect={index => {
                setSelectedIndex(index);
                }}
                selectedIndex={selectedIndex}
             />
