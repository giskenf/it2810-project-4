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

            {/* <View style={styles.bottomTab}>
              
            { <Pagination className="pagination"
                    style={styles.bottomTab}
                    count={numberOfPages}
                    color={"primary"}
                    page={selectedPage}
                    // onChange={handleChange}
                    disabled={isDisabled}
                    size={"large"}
                />
              
              
            </View> } */}

            <Pagination
             // Forsøk på Pagination som ikke funker :-) https://www.npmjs.com/package/react-native-pagination#development
                style={styles.paginationStyle}
                color={"primary"}
                paginationItems={playerState.player}
                page={selectedPage}
                onPress={(value: number)=>setSelectedPage(value)}
                disabled={isDisabled}
                size={"large"} 
                horizontal={true}
            />
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
  },
  filterButton:{
      paddingBottom: 20,
  },
  list: {
    height: 400,
  },
});
