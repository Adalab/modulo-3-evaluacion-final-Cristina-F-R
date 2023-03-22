import Form from './Form';
import ErrorSection from './Error';
import ListCards from './ListCards';

const Main = ({characterList,handleFilterHouse, handleFilterName, nameFilter, houseFilter, handleOnSubmit, nameFiltered}) =>{

            
        return(
        <>
            <Form handleFilterHouse={handleFilterHouse} handleFilterName={handleFilterName} nameFilter={nameFilter} houseFilter={houseFilter} handleOnSubmit={handleOnSubmit}/>
            <ErrorSection nameFiltered={nameFiltered}/>
            <ListCards characterList= {characterList} nameFiltered={nameFiltered}/>
        </>
    )
}


export default Main;