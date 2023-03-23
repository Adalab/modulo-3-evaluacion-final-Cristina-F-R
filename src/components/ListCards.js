import Card from './Card';
import '../styles/CardList.scss';

const ListCards= ({characterList}) => { 
    

        const dataHtml = characterList.map((eachCharacter) => { return <Card eachCharacter={eachCharacter} key={eachCharacter.id}/>; })

    return (
        <section className="list">
            <ul className="list_cards">{dataHtml}</ul>
        </section>
    )
}
    


export default ListCards;