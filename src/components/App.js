
import { useEffect, useState } from 'react';
import '../styles/App.scss';
import '../styles/main.scss';
import  getDataApi from '../service/Api';
import Header from './Hader';
import Main from './Main';

function App() {

  //varables estado: listacharacters, filter1, filter2
  const [characterList, setcharacterList] = useState([]);
  const [houseFilter, setHouseFilter] = useState('gryffindor');
  const [nameFilter, setNameFilter] = useState('');

  useEffect(() =>{
    getDataApi(houseFilter).then((cleanData) =>{
      console.log(cleanData)
      setcharacterList(cleanData)
    });
  },[houseFilter]);

  const handleFilterHouse = (value) =>{
    setHouseFilter(value);
  }

  const handleFilterName = (value) =>{
    setNameFilter(value);
  }

  const nameFiltered = characterList.filter((eachCharacter) => {
  return (eachCharacter.name.toLocaleLowerCase().includes(nameFilter.toLocaleLowerCase()))
});
 

  return <div className="App">
    <Header/>
    <Main characterList= {nameFiltered} handleFilterHouse={handleFilterHouse} handleFilterName={handleFilterName} nameFilter={nameFilter}/>
  </div>;
}

/* PROP-TYPES */

export default App;
