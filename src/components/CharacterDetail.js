import { Link } from "react-router-dom";
import placeholder from '../images/H.png';

const CharacterDetail = ({eachCharacter}) =>{
    return(
        <>
        <Link href="./App.js"> Volver a Inicio</Link>
        <img 
        src={eachCharacter.image || placeholder}
        alt="Foto del personaje" 
        className="card_img" 
        title="Fotografia del personaje"/>
        <h4 className="card_title">{eachCharacter.name}</h4>
        <p className="card_desc">{eachCharacter.specie}</p>
        </>
       
    )

}

export default CharacterDetail;