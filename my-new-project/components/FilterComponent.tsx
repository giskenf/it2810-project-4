import React, { useState, useContext } from 'react';
import { View, Switch, StyleSheet } from "react-native";
import { GlobalContext } from "../components/GlobalProvider";

export const FilterComponent: React.FC = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const { pageProvider, numberOfPageProvider,isDisabledProvider, teamProvider, sortNameProvider } = useContext(GlobalContext);

  /*function checkEnable() {
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    if(isEnabled){
      sortNameProvider.setSortName('name');
    }
  }*/



  return (
    <View style={styles.container}>
      <Switch
        trackColor={{ false: "#767577", true: "#19ca42" }}
        thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
        ios_backgroundColor="#3D195B"
        onValueChange={toggleSwitch}
        value={isEnabled}
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
