import Card from './Card'

const ListCards= ({characterList}) => {

        const dataHtml = characterList.map((eachCharacter) => { return <Card eachCharacter={eachCharacter} key={eachCharacter.id}/>; })

    return (
        <section className="list">
            <ul className="cards">{dataHtml}</ul>
        </section>
    )
}
    


export default ListCards;