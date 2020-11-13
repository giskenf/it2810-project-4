import React, { useContext, useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import {RootStore} from '../store/store';
import { GetPlayers } from '../store/actions/playersAction';
//import PlLogo from '../assets/images/premier-league1-svg';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import {playerAbility} from "../store/types";
import {Player} from "../components/PlayerInfo";

export default function TabOneScreen() {
    const dispatch = useDispatch();
    const [playerName, setPlayerName] = useState("");
    const playerState = useSelector((state: RootStore) => state.players);
    const [value, onChangeText] = React.useState('Useless Placeholder');

    useEffect(()=>{
        dispatch(GetPlayers(playerName, "", "", 1, 1))
    },[playerName])

    //console.log(playerState.player)
    console.log(playerName);
    return (

        <View style={styles.container}>
            <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
              onChangeText={text => setPlayerName(text)}
              value={playerName}
            />
            <FlatList
                data={playerState.player}
                keyExtractor={(item)=> item._id}
                renderItem={({item}) => (
                    <Player player={item}/>
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

t }

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
