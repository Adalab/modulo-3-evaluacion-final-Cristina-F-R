import Form from './Form';
import ListCards from './ListCards';

const Main = ({characterList,handleFilterHouse, handleFilterName, nameFilter, houseFilter}) =>{
    return(
        <>
            <Form handleFilterHouse={handleFilterHouse} handleFilterName={handleFilterName} nameFilter={nameFilter} houseFilter={houseFilter}/>
            <ListCards characterList= {characterList}/>
        </>
    )
}

export default Main;