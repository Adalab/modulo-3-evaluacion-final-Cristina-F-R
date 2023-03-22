import {Link, useParams} from 'react-router-dom';
import placeholder from '../images/H.png';

const CharacterDetail = ({findCharacter}) =>{

    const params = useParams();
    const charactersFound = findCharacter(params.id);
    console.log(charactersFound)
    
    return(
        <div >
            <Link to="/">
            <p className="nav">Volver a Inicio</p>
            </Link>
            <div className='card_link_imgContainer'>
                        <img 
                        src={charactersFound.image || placeholder}
                        alt='Foto de personaje'
                        className="card_link_imgContainer_img" 
                        title="Fotografia del personaje"/>
            </div>
            <h2 className="">Nombre: {charactersFound.name}</h2>
            <p className="">Especie: {charactersFound.specie}</p>
            <p className="">Estado: {charactersFound.alive ? 'Vivo/a' : 'Muerto/a'}</p>
         </div> 
       
    )

}

export default CharacterDetail;