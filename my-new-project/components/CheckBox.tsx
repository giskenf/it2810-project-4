import  React, {useState, useContext} from 'react';
import { StyleSheet, Modal, TouchableHighlight, View} from 'react-native';
//import CheckBox from '@react-native-community/checkbox';
import CheckBox from 'react-native-check-box';

interface filterProps{
    setOrder:(a: number)=> void; 
  }
  
  
  export const CheckBoxComponent: React.FC<filterProps> = (props: filterProps) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  
    function checkEnable() {
      toggleSwitch()
      if(!isEnabled){
        props.setOrder(1);
      }
      else{
        props.setOrder(-1);
      }
    }
    return (
      <View style={styles.container}>
        <CheckBox
            style={{flex: 1, padding: 10}}
            onClick={checkEnable} 
            isChecked={isEnabled}
            leftText={"CheckBox"}
        />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      margin: 0,
      padding: 0,
    }
  });
  