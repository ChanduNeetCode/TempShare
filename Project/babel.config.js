/* eslint-disable no-undef */
// module.exports = {
//   presets: ['module:metro-react-native-babel-preset'],
//   plugins: [
//     'react-native-reanimated/plugin',
//   ],
// };


// module.exports = {
//   presets: ['module:@react-native/babel-preset'],
//   plugins: [
//   'react-native-reanimated/plugin',
//   ],
//   };


module.exports = {
  presets: [["module:metro-react-native-babel-preset"]],
  plugins: [
    [
      "@babel/plugin-transform-react-jsx",
      {
        runtime: "automatic",
        importSource: "@dynatrace/react-native-plugin",
      },
    ],
    'react-native-reanimated/plugin',
    ['@babel/plugin-transform-private-methods',{loose:true}],
  ],
};