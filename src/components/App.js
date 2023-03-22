
import { useEffect, useState } from 'react';
import '../styles/App.scss';
import '../styles/main.scss';
import  getDataApi from '../service/Api';
import Header from './Hader';
import Main from './Main';
import { Route, Routes } from 'react-router-dom';
import CharacterDetail from './CharacterDetail';

function App() {

  //varables estado: listacharacters, filter1, filter2
  const [characterList, setcharacterList] = useState([]);
  const [houseFilter, setHouseFilter] = useState('gryffindor');
  const [nameFilter, setNameFilter] = useState('');

  useEffect(() =>{
    getDataApi(houseFilter).then((cleanData) =>{
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



  const findCharacter = (id) => {
    return characterList.find((eachCharacter) => eachCharacter.id === id);
  
  };
 
  const handleOnSubmit=(ev)=>{
        ev.preventDefault()
    }

  return <div className="App">
    <Header/>
    <main className='main'>
      <Routes>
        <Route
        path= '/' element= {  
          <Main characterList= {nameFiltered} handleFilterHouse={handleFilterHouse} handleFilterName={handleFilterName} nameFilter={nameFilter} houseFilter={houseFilter} handleOnSubmit={handleOnSubmit} nameFiltered={nameFiltered}/>
          }
        ></Route>
        
        <Route path='/character/:id'
          element={
          <CharacterDetail findCharacter={findCharacter}/>

          }>
        </Route>
      </Routes>
    </main>
  </div>;
}

/* PROP-TYPES */

export default App;
