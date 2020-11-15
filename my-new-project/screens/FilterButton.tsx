import  React, {useState, useContext} from 'react';
import { StyleSheet, Modal, TouchableHighlight } from 'react-native';
import {DropDownComponent} from '../components/DropDownComponent';
import {FilterComponent} from '../components/FilterComponent';
import { Text, View } from '../components/Themed';
import { GlobalContext } from "../components/GlobalProvider";


export const FilterButton: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [team, setTeam] = useState("");

  const { pageProvider, numberOfPageProvider,isDisabledProvider } = useContext(GlobalContext);

  return (
    <View style={styles.container}>
      <Modal 
        animationType="slide"
        transparent={true}
        visible={modalVisible}>
          <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Choose a filter!</Text>
            <DropDownComponent changeTeam={setTeam}/>
            <Text style={styles.switchText}>Sort by name</Text>
            <FilterComponent/>
            <Text style={styles.switchText}>Sort by goals scored</Text>
            <FilterComponent/>
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
       <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={styles.textStyle}>Filter </Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3D195B',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
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
    padding: 5,
    marginLeft: 20,
    elevation: 2
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

