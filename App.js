// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */

// import React, {Fragment} from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
// } from 'react-native';


// import { Example } from './Example';
// import Stories from './stories';

// const App = () => {
//   return (
//     <Stories />
//   );
// };

export default App;

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Stories from './Stories';
import RunningOrders from './RunningOrders'

// the app root component
const AppNavigator = createStackNavigator({
    Home : Stories,
    Test : RunningOrders
  },{
    initialRouteName : 'Test'
})

export default createAppContainer(AppNavigator);