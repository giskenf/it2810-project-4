import React, {useContext}  from 'react';
import { StyleSheet, View } from 'react-native';
import {Picker} from '@react-native-community/picker';
import { GlobalContext } from "../components/GlobalProvider";


interface DropDownProps{
    changeTeam:(a:string)=> void;
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

const options = ['All teams', 'Arsenal', 'Aston Villa','Brighton', 'Burnley', 'Chelsea', 'Crystal Palace', 'Everton',
 'Fulham', 'Leeds', 'Leicester', 'Liverpool', 'Manchester City', 'Manchester United', 'Newcastle', 'Sheffield', 'Southampton', 
 'West Bromwich', 'West Ham', 'Wolverhampton'];

//Funksjonen changeTeam sendes ned som en prop fra SearchComponent
export const DropDownComponent: React.FC<DropDownProps> = (props: DropDownProps) => {
    /*const handleChange = (selectedOption: any) => {
        props.changeTeam(selectedOption.label);
    };*/
    /*function handleChange(selected: any) {
        teamProvider.setTeam(selected);
    }
    const { pageProvider, numberOfPageProvider,isDisabledProvider, teamProvider } = useContext(GlobalContext);*/

    return (
        <View style={styles.container}> 
          <Picker
            style={styles.picker}
            selectedValue={'test'}
            mode='dialog'
            itemStyle={styles.itemStyle}>
            {options.map((item, index) => {
                return (< Picker.Item label={item} value={item} key={index} />);
                })} 
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


