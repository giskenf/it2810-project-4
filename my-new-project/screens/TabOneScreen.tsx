import React, { useContext, useEffect, useState } from "react";
<<<<<<< HEAD
import {Alert, Button, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

=======
import {
    Alert,
    Button, FlatList,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    VirtualizedList, Modal
} from 'react-native';

import {Overlay} from 'react-native-elements'
>>>>>>> feat/setup
import { useDispatch, useSelector } from "react-redux";
import {RootStore} from '../store/store';
import { GetPlayers } from '../store/actions/playersAction';
//import PlLogo from '../assets/images/premier-league1-svg';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import {playerAbility} from "../store/types";


export default function TabOneScreen() {
<<<<<<< HEAD
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
        <Text style={styles.title}>Tab One </Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      </View>
  );
=======
    const dispatch = useDispatch();
    const [playerName, setPlayerName] = useState("");
    const playerState = useSelector((state: RootStore) => state.players);

    //const [people,setPeople] = useState([] as any[]);

    const [people,setPeople] = useState([
        {assists: 0, clean_sheets: 0, goals_conceded: 0, goals_scored: 1, name: "Evrin Özil", news: "Not included in Arsenal's 25-man"},
        {assists: 0, clean_sheets: 0, goals_conceded: 0, goals_scored: 2, name: "Grof Özil", news: "Not included in Arsenal's 25-man"},
        {assists: 10, clean_sheets: 0, goals_conceded: 0, goals_scored: 5, name: "Mesut Özil", news: "Not included in Arsenal"},
        {assists: 0, clean_sheets: 0, goals_conceded: 5, goals_scored: 0, name: "Fjr Özil", news: "Not"},
        {assists: 0, clean_sheets: 0, goals_conceded: 6, goals_scored: 0, name: "Mesut Özil Mesut Özil", news: "Not included in Arsenal's 25-manNot included in Arsenal's 25-man"},
        {assists: 0, clean_sheets: 0, goals_conceded: 7, goals_scored: 0, name: "Mesut Mesut Özil", news: "Not included in Arsenal's 25-manNot included in Arsenal's 25-manNot included in Arsenal's 25-man"},
        {assists: 0, clean_sheets: 0, goals_conceded: 0, goals_scored: 1, name: "Evrin Özil", news: "Not included in Arsenal's 25-man"},
        {assists: 0, clean_sheets: 0, goals_conceded: 0, goals_scored: 2, name: "Grof Özil", news: "Not included in Arsenal's 25-man"},
        {assists: 10, clean_sheets: 0, goals_conceded: 0, goals_scored: 5, name: "Mesut Özil", news: "Not included in Arsenal"},
        {assists: 0, clean_sheets: 0, goals_conceded: 5, goals_scored: 0, name: "Fjr Özil", news: "Not"},
        {assists: 0, clean_sheets: 0, goals_conceded: 6, goals_scored: 0, name: "Mesut Özil Mesut Özil", news: "Not included in Arsenal's 25-manNot included in Arsenal's 25-man"},
        {assists: 10, clean_sheets: 0, goals_conceded: 0, goals_scored: 5, name: "Mesut Özil", news: "Not included in Arsenal"},
        {assists: 0, clean_sheets: 0, goals_conceded: 5, goals_scored: 0, name: "Fjr Özil", news: "Not"},
        {assists: 0, clean_sheets: 0, goals_conceded: 6, goals_scored: 0, name: "Mesut Özil Mesut Özil", news: "Not included in Arsenal's 25-manNot included in Arsenal's 25-man"},
        {assists: 0, clean_sheets: 0, goals_conceded: 7, goals_scored: 0, name: "Mesut Mesut Özil", news: "Not included in Arsenal's 25-manNot included in Arsenal's 25-manNot included in Arsenal's 25-man"}])




    useEffect(()=>{
        dispatch(GetPlayers(playerName, "", "", 1, 1))
    },[playerName])

    const [visible, setVisible] = useState(false);

    const toggleOverlay = () => {
        setVisible(!visible);
    };
    console.log(playerState.player)
    return (

        <View style={styles.container}>
            <FlatList
                data={people}
                // keyExtractor={(item)=> item._id}
                renderItem={({item}) => (
                <View>
                    <TouchableOpacity style={styles.item} onPress={toggleOverlay}>
                        <Text style={styles.title}>{item.name}</Text>
                        <Overlay style={styles.overlay} isVisible={visible} onBackdropPress={toggleOverlay}>
                            <Text>{item.name}</Text>
                        </Overlay>
                    </TouchableOpacity>
                </View>
                )}>

            </FlatList>
        </View>



    )
    /*

     const list = () => {
        return playerState.player?.map(player => {
            return (
                <View style={styles.container}>
                    <Text>{player.name}</Text>
                    <Text>{player.team}</Text>
                </View>
            );
        });
    };
    return(
        <View style={styles.container}>
            <Text>{list()}</Text>

            <Button title="Change player" onPress={() => setPlayerName("virgil")}/>
            <Button title="Press me" onPress={() => Alert.alert('Simple Button pressed')}/>
            <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => setPlayerName(text)}
                value={playerName}
            />
            {
                playerState.player?.map(player => {
                    return (
                        <View style={styles.container}>
                            <Text>{player.name}</Text>
                            <Text>{player.team}</Text>
                        </View>
                    );})}
        </View>
    )*/

>>>>>>> feat/setup
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 25,
    //alignItems: 'center',
    //justifyContent: 'center',
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
  item:{
    marginTop: 24,
    padding: 30,
    backgroundColor: '#87CEFA',
    fontSize: 24,
  },
  overlay:{
    height: '60%',
    width: '50%,',
    backgroundColor: '#87CEFA'
  }
});
