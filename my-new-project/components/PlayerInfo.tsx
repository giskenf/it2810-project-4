import React, { useState } from "react";
import {
    Alert, //Modal,
    Modal,
    Image,
    StyleSheet,
    Text,
    TouchableHighlight, TouchableOpacity,
    View
} from "react-native";
import {MaterialIcons} from "@expo/vector-icons";
import {playerAbility} from "../store/types";


interface playerProps{
    player: playerAbility
}


export const Player = (props:playerProps) => {

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="fade"
                transparent={false}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}
            >

                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalTeamText}>{props.player.team}</Text>
                        <Image
                            style={{ width: 100, height: 130, resizeMode: 'stretch' }}
                            source={{uri: props.player.src}}
                        />
                        <Text style={styles.modalTitle}>{props.player.name}</Text>
                        <Text style={styles.modalText}>Goal scored: {props.player.goals_scored}</Text>
                        <Text style={styles.modalText}>Clean sheets: {props.player.clean_sheets}</Text>
                        <Text style={styles.modalText}>Yellow cards: {props.player.yellow_cards}</Text>
                        <Text style={styles.modalText}>Red cards: {props.player.red_cards}</Text>
                        <Text style={styles.modalText}>Own goals: {props.player.own_goals}</Text>
                        <Text style={styles.modalText}>News: {props.player.news}</Text>
                        <Image
                            style={{ width: 50, height: 70, resizeMode: 'stretch' }}
                            source={{uri: props.player.team_url}}
                        />
                        <MaterialIcons
                            style={styles.closeButton}
                            name={'close'}
                            size={35}
                            color={"#3D195B"}
                            onPress={()=> setModalVisible(!modalVisible)}/>
                    </View>
                </View>
            </Modal>

            <TouchableHighlight
                style={styles.openButton}
                onPress={() => {
                    setModalVisible(true);
                }}
            >
                <Text style={styles.textStyle}>{props.player.name}</Text>
            </TouchableHighlight>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        width: 350,
        height: 620,
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
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
    closeButton: {
        position:"absolute",
        top:5,
        right:15
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 15,
        padding: 10,
        elevation: 2,
        minWidth: "70%"

    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 20,
        textAlign: "center",
        color: '#3D195B',
    },
    modalTeamText: {
        marginBottom: 15,
        textAlign: "center",
        fontSize: 30,
        color: '#3D195B',
    },
    modalTitle:{
        marginTop: 15,
        marginBottom: 25,
        textAlign: "center",
        fontSize: 25,
        color: '#3D195B',
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },

});
