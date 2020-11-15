import React, {useState, createContext, useMemo} from 'react';

export const GlobalContext = createContext<any>(1)

export const GlobalProvider = (props: any) =>{

    const [selectedPage,setSelectedPage] = useState(1);
    const [isDisabled, setIsDisabled] = useState(true);
    const [numberOfPages, setNumberOfPages] = useState(10);
    const [team, setTeam] = useState("");
    const [sortName, setSortName] = useState("");

    const pageProvider = useMemo(() => ({
        selectedPage,setSelectedPage}),[selectedPage,setSelectedPage]);
    const numberOfPageProvider = useMemo(() => ({
        numberOfPages, setNumberOfPages}),[numberOfPages, setNumberOfPages]);
    const isDisabledProvider = useMemo(() => ({
        isDisabled, setIsDisabled}),[isDisabled, setIsDisabled]);
    const teamProvider = useMemo(() => ({
        team, setTeam}),[team, setTeam]);
    const sortNameProvider = useMemo(() => ({
        sortName, setSortName}),[sortName, setSortName]);

    return(
        <GlobalContext.Provider value={{pageProvider,numberOfPageProvider,isDisabledProvider, teamProvider, sortNameProvider}}> {props.children} </GlobalContext.Provider>
    )
}