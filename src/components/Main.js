import Form from './Form';
import ListCards from './ListCards';

const Main = ({characterList,handleFilterHouse, handleFilterName}) =>{
    return(
        <>
            <Form handleFilterHouse={handleFilterHouse} handleFilterName={handleFilterName}/>
            <ListCards characterList= {characterList}/>
        </>
    )
}

export default Main;