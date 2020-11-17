import React, { useContext, useEffect, useState } from "react";
import {
  Button,
    FlatList,
    StyleSheet,
    TextInput,
    TouchableOpacity,
  
} from 'react-native';
import Pagination,{Icon,Dot} from 'react-native-pagination';
import { useDispatch, useSelector } from "react-redux";
import {RootStore} from '../store/store';
import { GetPlayers } from '../store/actions/playersAction';
//import PlLogo from '../assets/images/premier-league1-svg';
import { Text, View } from '../components/Themed';
import {Player} from "../components/PlayerInfo";
import {FilterButton} from "./FilterButton";

export default function TabOneScreen() {
    const dispatch = useDispatch();
    const [playerName, setPlayerName] = useState("");
    const playerState = useSelector((state: RootStore) => state.players);
    const [team, setTeam] = useState("");
    const [sort, setSort] = useState(""); 
    const [order, setOrder] = useState(1); 
    const [selectedPage, setSelectedPage] = useState(1);
    const [isDisabled, setIsDisabled] = useState(true);
    const [numberOfPages, setNumberOfPages] = useState(10);

    useEffect(()=>{
        dispatch(GetPlayers(playerName, team, sort, order, selectedPage))
    },[playerName, sort, team, order ])

    //console.log(order);

    return (
        <View style={styles.container}>
           <FilterButton setSort={setSort} setTeam={setTeam} team={team} setOrder={setOrder} setSelectedPage={setSelectedPage} />
            <TextInput
              style={styles.search}
              placeholder="Search for your favorite player!"
              onChangeText={text => setPlayerName(text)}
              value={playerName}
            />
            <FlatList
                style={styles.list}
                data={playerState.player}
                keyExtractor={(item)=> item._id}
                renderItem={({item}) => (
                    <Player player={item}/>
                )}>
            </FlatList>

        </View>
    )
}

const styles = StyleSheet.create({
  // bottomTab: {
  //   flex: 1,
  //   padding: 25
  // },
  container: {
    flex: 1,
    paddingTop: 0,
    paddingBottom: 0,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  search:{
    height: 30,
    borderBottomColor: '#F194FF',
    borderColor: 'white', 
    borderWidth: 1,
  }, 
  filterButton:{
      paddingBottom: 20,
  },
  list: {
    height: 400,
  },
});
