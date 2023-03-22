import Form from './Form';
import ListCards from './ListCards';

const Main = ({characterList,handleFilterHouse}) =>{
    return(
        <>
            <Form handleFilterHouse={handleFilterHouse}/>
            <ListCards characterList= {characterList}/>
        </>
    )
}

export default Main;