import React, { useContext, useEffect, useState } from "react";
import {Alert, Button, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

import { useDispatch, useSelector } from "react-redux";
import {RootStore} from '../store/store';
import { GetPlayers } from '../store/actions/playersAction';
import PlLogo from '../assets/images/premier-league1-svg';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabOneScreen() {
  const dispatch = useDispatch();
  const [playerName, setPlayerName] = useState("Rashford");
  const playerState = useSelector((state: RootStore) => state.players);
  //GetPlayers(playerName, "", "", 1, 1);

  useEffect(()=>{
    dispatch(GetPlayers(playerName, "", "", 1, 1))
  },[playerName])

  console.log(playerState.player);
  return (
      <View style={styles.container}>
        <Text style={styles.title}>Tab One {typeof playerState.player}</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <Button title="Change player" onPress={() => setPlayerName("virgil")}/>
        <Button
            title="Press me"
            onPress={() => setPlayerName("")}
        />
        <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
              onChangeText={text => setPlayerName(text)}
              value={playerName}
          />
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
