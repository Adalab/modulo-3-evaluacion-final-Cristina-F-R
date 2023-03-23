import Form from './Form';
import ErrorSection from './Error';
import ListCards from './ListCards';

const Main = ({characterList,handleFilterHouse, handleFilterName, nameFilter, houseFilter, handleOnSubmit, nameFiltered, handleClick}) =>{

            
        return(
        <>
            <Form handleFilterHouse={handleFilterHouse} handleFilterName={handleFilterName} nameFilter={nameFilter} houseFilter={houseFilter} handleOnSubmit={handleOnSubmit} handleClick={handleClick}/>
            <ErrorSection nameFiltered={nameFiltered}/>
            <ListCards characterList= {characterList} nameFiltered={nameFiltered}/>
        </>
    )
}


export default Main;