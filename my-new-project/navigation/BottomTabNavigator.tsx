import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

//import Colors from '../constants/Colors';
//import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import { TabOneParamList } from '../types';




// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

export default function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{ 
         /*} headerLeft: () => (
         <FilterButton/>),*/
          headerTitle: 'Premier League Search!', 
          headerTitleAlign: 'center', 
          headerStyle:  {
            backgroundColor: '#3D195B',
            height: 80,
          },
          headerTitleStyle: {
            fontWeight: 'normal', 
            color: 'white', 
          },
         }}
      />
    </TabOneStack.Navigator>
  );
}
