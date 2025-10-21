# DataTables v1.0.0

## Installation

Using npm -
$ npm install @icicibank/tsg1_2259_rn_dff_library@*.*.*

How to use in DataTable components -
import { IMDataTables } from '@icicibank/tsg1_2259_rn_dff_library'

## IMDataTables

| Props                    | Params                                   | isRequire | Description                               |
| ----------------------   | ---------------------------------------- | --------- | ----------------------------------------- |

| isShowHorizontalScrollIndicator| boolean                            | No        | ScrollIndicator boolean to show           |
| containerStyleProps      | ViewStyle                                | No        | Data Table container style                |
| data                     | index: number,header: string,values: any | Yes       | Data to display in the table              |
| dataTableType            | String                                   | Yes       | Data Table type to be displayed           |
| numberOfColumns          | int                                      | Yes       | Number Of COlumns present in the table    |
| width                    | number                                   | Yes       | Width of each cell                        |
| height                   | number                                   | Yes       | Height of each cell                       |
| titleContainerStyleProps | ViewStyle                                | No        | To apply style to the cells containing title |
| titleTextStyleProps      | TextStyle                                | No        | To apply style to the title text          |
| dataContainerStyleProps  | ViewStyle                                | No        | To apply style to the each cell containing values |
| cellContainerStyleProps  | ViewStyle                                | No        | To apply style to the container of all cells having the values |
| bodyTextStyleProps       | Text                                     | StyleNo   | To apply style to the data values other than title |
| titleContainerStylePropsFirstIndex| ViewStyle                       | No        | To apply style for the firstIndexContainer in header   |
| titleContainerStylePropsVertical| ViewStyle                         | No        | To apply style for the data contianer along vertical |


### IMDataTables example

        <IMDataTables
            containerStyleProps
            data={sampleData}
            dataTableType={DataTableTypes.TitleOnBothSidesHorizontalScroll}
            numberOfColumns={sampleData.length}
            width={140}
      />
