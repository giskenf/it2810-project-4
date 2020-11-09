import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity } from 'react-native';
//import { useDispatch, useSelector } from "react-redux";
import {RootStore} from '../store/store';
import { GetPlayers } from '../store/actions/playersAction';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabOneScreen() {
  //const dispatch = useDispatch();
  const [playerName, setPlayerName] = useState("");
  //const playerState = useSelector((state: RootStore) => state.players);
/*
  useEffect(()=>{
    dispatch(GetPlayers(playerName, "", "", 1, 1))
  },[])

 */

  return (
      <View style={styles.container}>
        <Text style={styles.title}>Tab Two</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <EditScreenInfo path="/screens/TabOneScreen.js" />
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
