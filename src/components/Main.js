import Form from './Form';
import ListCards from './ListCards';

const Main = ({characterList,handleFilterHouse, handleFilterName, nameFilter}) =>{
    return(
        <>
            <Form handleFilterHouse={handleFilterHouse} handleFilterName={handleFilterName} nameFilter={nameFilter}/>
            <ListCards characterList= {characterList}/>
        </>
    )
}

export default Main;