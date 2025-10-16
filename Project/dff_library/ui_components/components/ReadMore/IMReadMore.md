# ReadMore v1.0.0

## Installation

Using npm -
$ npm install @icicibank/tsg1_2259_rn_dff_library@*.*.*

How to use in Checkbox components -
import { IMReadMore } from '@icicibank/tsg1_2259_rn_dff_library';

it's show text in a condensed way and expand when needed

## IMReadMore

| Prop                             | Type              | Required |              Note                    |
| -------------------------------- | ----------------- | -------- | ----------------------------------   |
| newLine                          | boolean           | no       | whether want seeMore&Less on new line|
| ellipsisStyle                    | TextStyle         | no       | ellipseStyle prop                    |
| `style`                          | `object or array` | no       | text style                           |
| `seeMoreText`                    | `string`          | no       | defaults to `See more`               |
| `seeMoreStyle`                   | `object or array` | no       | text style for `See more` text       |
| `seeLessText`                    | `string`          | no       | defaults to `See less`               |
| `seeLessStyle`                   | `object or array` | no       | text style for `See less` text       |
| `ellipsis`                       | `string`          | no       | defaults to `...`                    |
| `wrapperStyle`                   | `object or array` | no       | style for wrapper `View`             |
| `numberOfLines`                  | `number`          | no       | defaults to `3`                      |
| `animate`                        | `bool`            | no       | defaults to `true` => applies a subtle animation to see more and see less text, not the complete text itself                                    |
| `customTextComponent`            | `React component` | no       | defaults to `Text`                   |
| `expandOnly`                     | `bool`            | no       | defaults to `false` => hide see less option similar to a linkedIn post         |
| `onExpand`                       | `func`            | no       | optional callback executed when expanded  |
| `onCollapse`                     | `func`            | no       | optional callback executed when collapsed |
| `onReady`                        | `func`            | no       | optional callback executed when see more placement measurements are completed, this function will pass 2 arguments `({ canExpand, expandedLinesCount })`, where `canExpand` is a boolean specifying if text can be expanded and `expandedLinesCount` is a number indicating the number of lines when text is in expanded state. |
| `collapsed`                      | `bool`            | no       | Control collapsed state programatically see|
| `debug`                          | `bool`            | no       | print debug logs to examine           |
| `seeMoreContainerStyleSecondary` | `object`          | no       | Incase of text overlap, pass { position: 'relative' }                       |
| `onSeeMore`                      | `func`            | no       | when a function is passed, will disable the default See More toggling and use the custom callback instead. Useful to do things like open a modal instead of expanding text when See More is pressed                |
| `onSeeLess`                      | `func`            | no       | when a function is passed, will disable the default See Less toggling and use the custom callback instead. Useful to do things like open a modal instead of collapsing text when See Less is pressed.              |

### Usage

```JSX
        <IMReadMore 
        numberOfLines={3} 
        seeMoreStyle={{ color: colors.PastelGreen120 }} 
        seeLessStyle={{ color: colors.PastelBlue120 }} 
        style={{ fontSize: 14, }} style={{  fontSize: 14,}} >
          {
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of '
          }
        </IMReadMore>
```
