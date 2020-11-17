import React, {useEffect, useState}  from 'react';
import { StyleSheet, View } from 'react-native';
import {Picker} from '@react-native-community/picker';
//import { GlobalContext } from "../components/GlobalProvider";

interface filterProps{
    setTeam:(a:string)=> void;
    team: string;
}

/*const options = [
    {value:"",label:'All teams'},
    { value: 'Arsenal', label: 'Arsenal' },
    { value: 'Aston Villa', label: 'Aston Villa' },
    { value: 'Brighton', label: 'Brighton' },
    { value: 'Burnley', label: 'Burnley' },
    { value: 'Chelsea', label: 'Chelsea' },
    { value: 'Crystal Palace', label: 'Crystal Palace' },
    { value: 'Everton', label: 'Everton' },
    { value: 'Fulham', label: 'Fulham' },
    { value: 'Leeds', label: 'Leeds United' },
    { value: 'Leicester', label: 'Leicester' },
    { value: 'Liverpool', label: 'Liverpool' },
    { value: 'Man City', label: 'Manchester City' },
    { value: 'Man Utd', label: 'Manchester United' },
    { value: 'Newcastle', label: 'Newcastle' },
    { value: 'Sheffield', label: 'Sheffield United' },
    { value: 'Southampton', label: 'Southampton' },
    { value: 'Tottenham', label: 'Totteham' },
    { value: 'West Brom', label: 'West Bromwich'},
    { value: 'West Ham', label: 'West Ham' },
    { value: 'Wolves', label: 'Wolverhampton' },
];*/


//Funksjonen changeTeam sendes ned som en prop fra SearchComponent
export const DropDownComponent: React.FC<filterProps> = (props: filterProps) => {
    /*const handleChange = (selectedOption: any) => {
        props.changeTeam(selectedOption.label);
    };*/
    /*function handleChange(selected: any) {
        teamProvider.setTeam(selected);
    }*/
    //const { pageProvider, numberOfPageProvider,isDisabledProvider, teamProvider } = useContext(GlobalContext);



    return (
        <View style={styles.container}> 
          <Picker
            style={styles.picker}
            selectedValue={props.team}
            mode='dropdown'
            
            onValueChange={(itemValue) => props.setTeam(itemValue)}
            itemStyle={styles.itemStyle}>
            <Picker.Item label='All teams' value=""/>
            <Picker.Item label='Arsenal' value="Arsenal"/>
            <Picker.Item value= 'Aston Villa' label='Aston Villa'/>
            <Picker.Item value='Brighton' label='Brighton'/>
            <Picker.Item value='Burnley' label='Burnley'/>
            <Picker.Item value='Chelsea' label='Chelsea' />
            <Picker.Item value='Crystal Palace' label='Crystal Palace'/>
            <Picker.Item value='Everton' label='Everton' />
            <Picker.Item value='Fulham' label='Fulham' />
            <Picker.Item value='Leeds' label='Leeds United'/>
            <Picker.Item value='Leicester' label='Leicester'/>
            <Picker.Item value= 'Liverpool' label='Liverpool' />
            <Picker.Item value='Man City' label='Manchester City'/>
            <Picker.Item value='Man Utd' label= 'Manchester United' />
            <Picker.Item value= 'Newcastle' label= 'Newcastle' />
            <Picker.Item value='Sheffield' label='Sheffield United'/>
            <Picker.Item value='Southampton' label='Southampton' />
            <Picker.Item value='Tottenham' label= 'Totteham'  />
            <Picker.Item value= 'West Brom' label='West Bromwich'/>
            <Picker.Item value='West Ham' label='West Ham' />
            <Picker.Item value= 'Wolves' label='Wolverhampton' />
          </Picker>
      </View>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 2,
      alignItems: 'center',
      justifyContent: 'center',
      height: 50,
      width: 100,
      marginTop: 0,
    },
    itemStyle: {
        fontSize: 15,
        color: 'black',
        textAlign: 'center',
        fontWeight: 'normal'
    },
    picker: {
        width: 120,
    },
});


