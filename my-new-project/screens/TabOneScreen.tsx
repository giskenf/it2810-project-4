import React, { useContext, useEffect, useState } from "react";
import {
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
    const [viewable, setViewable] = useState("");
    const [playerName, setPlayerName] = useState("");
    const playerState = useSelector((state: RootStore) => state.players);
    const [value, onChangeText] = React.useState('Useless Placeholder');
    const [team, setTeam] = useState("");
    const [sort, setSort] = useState(""); 
    const [order, setOrder] = useState(1); 
    const [page, setPage] = useState(1);

    useEffect(()=>{
        dispatch(GetPlayers(playerName, team, sort, order, page))
    },[playerName, sort, team, order ])

    //console.log(order);

    return (
        <View style={styles.container}>
           <FilterButton setSort={setSort} setTeam={setTeam} team={team} setOrder={setOrder} />
            <TextInput
              style={styles.search}
              placeholder="Search for your favorite player!"
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

            {/*<Pagination
             // Forsøk på Pagination som ikke funker :-) https://www.npmjs.com/package/react-native-pagination#development
            style={styles.paginationStyle}
            paginationVisibleItems={playerState.player}//needs to track what the user sees
            paginationItems={playerState.player}//pass the same list as data
            paginationItemPadSize={0} //num of items to pad above and below your visable items
            horizontal={true}
            />*/}
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
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
  }, 
  search:{
    height: 40,
    borderBottomColor: '#F194FF',
    borderColor: 'white', 
    borderWidth: 1,
  }, 
  paginationStyle:{
    alignItems:"center" , 
    justifyContent: 'space-between', 
    position:"absolute", 
    top:0, 
    margin:0, 
    bottom:0, 
    right:0, 
    padding:0, 
    flex:1, 
  }
});
