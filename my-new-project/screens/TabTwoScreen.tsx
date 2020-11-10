import * as React from 'react';
import { StyleSheet,  } from 'react-native';
//import { createDrawerNavigator } from '@react-navigation/drawer';
//import { NavigationContainer } from '@react-navigation/native';
import {DropDownComponent} from '../components/DropDownComponent';
import {Picker} from '@react-native-picker/picker';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {
  //const Drawer = createDrawerNavigator();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <DropDownComponent/>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
