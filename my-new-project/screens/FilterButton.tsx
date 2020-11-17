import  React, {useState, useEffect} from 'react';
import { StyleSheet, Modal, TouchableHighlight } from 'react-native';
import {DropDownComponent} from '../components/DropDownComponent';
import {FilterComponent} from '../components/FilterComponent';
import {CheckBoxComponent} from '../components/CheckBox';
import {GoalsSort} from '../components/GoalsSort';
import { Text, View } from '../components/Themed';

interface filterProps{
  setSort:(a: string)=> void;
  setTeam:(a: string)=> void;
  team: string; 
  setOrder:(a: number)=> void;
  setSelectedPage:(a: number)=> void;
}

export const FilterButton: React.FC<filterProps>= (props: filterProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [boxIsChecked, setBoxIsChecked] = useState(false); 
  const [sortByName, setSortByName] = useState(false);
  const [sortByGoals, setSortByGoals] = useState (false)



  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}
      >
      <Text style={styles.textStyle}>Filter</Text>
      </TouchableHighlight>
      <Modal 
        animationType="slide"
        transparent={true}
        visible={modalVisible}>
          <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Choose a filter!</Text>
            <Text style={styles.switchText}>Choose a team:</Text>
            <DropDownComponent setTeam={props.setTeam} team={props.team}/>
            <Text style={styles.switchText}>Sort by name:</Text>
            <FilterComponent setSort={props.setSort} setSortByGoals={setSortByGoals} setSortByName={setSortByName} sortByGoals={sortByGoals} sortByName={sortByName}/>
            <Text style={styles.switchText}>Sort by goals scored:</Text>
            <GoalsSort setSort={props.setSort} setSortByGoals={setSortByGoals} setSortByName={setSortByName} sortByName={sortByName} sortByGoals={sortByGoals}/>
            <Text style={styles.switchText}> Sort in descendig order:</Text>
            <CheckBoxComponent setOrder={props.setOrder} setBoxIsChecked={setBoxIsChecked} boxIsChecked={boxIsChecked}/>
            <TouchableHighlight
              style={{
                 ...styles.openButton,
                  backgroundColor: '#a973d5',
                  marginLeft: 0,
                 }}
              onPress={() => {
                setModalVisible(!modalVisible);
                props.setSelectedPage(1);
              }}
            >
              <Text style={styles.textStyle}>Apply</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingTop: 0,
    paddingBottom: 10,
    paddingLeft: 250,
    margin: 0,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 80,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    width: 350,
    height: 580,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: '#a973d5',
    borderRadius: 25,
    padding: 12,
    marginLeft: 20,
    marginBottom: 5,
    marginTop: 5,
    width: 80,
  },
  textStyle: {
    color: "white",
    fontWeight: "normal",
    textAlign: "center"
  },
  modalText: {
    color:  '#3D195B',
    fontWeight: "700", 
    marginBottom: 0,
    padding: 0,
    textAlign: "center",
    fontSize: 20,
  },
  switchText:{
    color:  '#3D195B',
    fontWeight: "normal", 
    margin: 0,
    padding: 0,
    textAlign: "center",
    fontSize: 10,
  },
});

