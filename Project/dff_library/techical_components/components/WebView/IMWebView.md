# WebView v1.0.0

## Installation

Using npm -
$ npm i dff_library

How to use IMWebView function -
import { IMWebView } from 'dff_library'

## IMWebViewProps

| Props              | Params    | isRequire | Description                 |
| ------------------ | --------- | --------- | --------------------------- |
| sourceUri          | string    | YES       | Android : example url       |
| userAgent          | string    | No        | browser type                |
| WebViewStyle       | ViewStyle | No        | Android : style for webview |
| injectedJavaScript | string    | No        | injectedJavaScript prop     |
| onMessage          | ()=> void | No        |onMessage call back func prop|

### IMFileManager example (File Creation)

```JS
 <IMWebView sourceUri={'https://www.example.com'}/>
```
