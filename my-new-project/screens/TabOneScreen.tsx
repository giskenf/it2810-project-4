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

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import {playerAbility} from "../store/types";

export default function TabOneScreen() {
    const dispatch = useDispatch();
    const [playerName, setPlayerName] = useState("");
    const playerState = useSelector((state: RootStore) => state.players);
    useEffect(()=>{
        dispatch(GetPlayers(playerName, "", "", 1, 1))
    },[playerName])

    console.log(playerState.player)

    const [people,setPeople] = useState([
        {name:"ervin",key:"1"},
        {name:"fffg",key:"2"},
        {name:"dffd",key:"3"}]);

    console.log(people)

    const [visible, setVisible] = useState(false);

    const toggleOverlay = () => {
        setVisible(!visible);
    };

    return (
        <View style={styles.container}>
            <Button title="Change player" onPress={() => setPlayerName("virgil")}/>
            {people.map(item =>(
                <View key={item.key}>
                    <Text style={styles.title}>{item.name}</Text>
                </View>
            ))}
            <View>
                <Button title="Open Overlay" onPress={toggleOverlay} />

                {/*<Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
                    <Text>Hello from Overlay!</Text>
                </Overlay>*/}
                <Overlay ModalComponent={Modal} isVisible={visible} onBackdropPress={toggleOverlay}>
                    <Text>Hello from Overlay!</Text>
                </Overlay>
            </View>

            {playerState.player ?
                <FlatList
                    keyExtractor={(item) => item._id }
                    data={playerState.player}
                    renderItem={({item}) => (
                    <View>
                        <TouchableOpacity onPress={()=>setPlayerName("virgil")}>
                                <Text>{item.team}</Text>
                                {/*<Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
                                    <Text>{item.name}</Text>
                                </Overlay>*/}
                        </TouchableOpacity>
                    </View>
                )}/>
                :
                <Text>Nei</Text>
            }
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
