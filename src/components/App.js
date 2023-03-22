
import { useEffect, useState } from 'react';
import '../styles/App.scss';
import  getDataApi from '../service/Api';
import Header from './Hader';
import Main from './Main';

function App() {

  //varables estado: listacharacters, filter1, filter2
  const [characterList, setcharacterList] = useState([]);
  const [houseFilter, setHouseFilter] = useState('gryffindor');

  useEffect(() =>{
    getDataApi(houseFilter).then((cleanData) =>{
      console.log(cleanData)
      setcharacterList(cleanData)
    });
  },[houseFilter]);

  const handleFilterHouse = (value) =>{
    setHouseFilter(value);
  }

  // const filteredHouse = () =>{
  //   getDataApi(houseFilter).then((cleanData) =>{
  //     console.log(cleanData)
  //     setcharacterList(cleanData)
  //   });
  // };
      // if(houseFilter === 'gryffindor'){
      //   setHouseFilter('gryffindor')
      // }else if(houseFilter === ''){
      //   setHouseFilter('slytherin')
      // }else if (houseFilter === ''){
      //   setHouseFilter('ravenclaw')
      // }elseis (){
      //   setHouseFilter('hufflepuff')
      // }
    

  return <div className="App">
    <Header/>
    <Main characterList= {characterList} handleFilterHouse={handleFilterHouse}/>
  </div>;
}

/* PROP-TYPES */

export default App;
