import  React, {useState, useContext} from 'react';
import { StyleSheet, Modal, TouchableHighlight } from 'react-native';
import { withSafeAreaInsets } from 'react-native-safe-area-context';
import {DropDownComponent} from '../components/DropDownComponent';
import {FilterComponent} from '../components/FilterComponent';
import {CheckBoxComponent} from '../components/CheckBox';
import {GoalsSort} from '../components/GoalsSort';
import { Text, View } from '../components/Themed';
//import { GlobalContext } from "../components/GlobalProvider";


interface filterProps{
  setSort:(a: string)=> void;
  setTeam:(a: string)=> void;
  team: string; 
  setOrder:(a: number)=> void;
}

export const FilterButton: React.FC<filterProps>= (props: filterProps) => {
  const [modalVisible, setModalVisible] = useState(false);

  //const { pageProvider, numberOfPageProvider,isDisabledProvider, teamProvider} = useContext(GlobalContext);

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
            <DropDownComponent setTeam={props.setTeam} team={props.team}/>
            <Text style={styles.switchText}>Sort by name</Text>
            <FilterComponent setSort={props.setSort}/>
            <Text style={styles.switchText}>Sort by goals scored</Text>
            <GoalsSort setSort={props.setSort}/>
            <CheckBoxComponent setOrder={props.setOrder}/>
            <TouchableHighlight
              style={{
                 ...styles.openButton,
                  backgroundColor: '#a973d5',
                  marginLeft: 0,
                 }}
              onPress={() => {
                setModalVisible(!modalVisible);
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
    paddingBottom: 15,
    paddingLeft: 250,
    margin: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  separator: {
    marginVertical: 10,
    height: 1,
    width: '80%',
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
    width: 300,
    height: 500,
    alignItems: "flex-start",
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
    padding: 20,
    marginLeft: 20,
    elevation: 2,
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
    marginBottom: 0,
    padding: 0,
    textAlign: "center",
    fontSize: 10,
  },
});

