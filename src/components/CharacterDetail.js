import {Link, useParams} from 'react-router-dom';
import placeholder from '../images/H.png';
import heart from '../images/heart.png';
import skull from '../images/skull.png';
import '../styles/CharacterDetail.scss';


const CharacterDetail = ({findCharacter}) =>{

    const params = useParams();
    const charactersFound = findCharacter(params.id);
    console.log(charactersFound)
    
    return(
        <div >
            <Link to="/">
            <p className="carddetail_nav">Volver a Inicio</p>
            </Link>
            <div className='carddetail'>
                <div className='carddetail_link_imgContainer'>
                            <img 
                            src={charactersFound.image || placeholder}
                            alt='Foto de personaje'
                            className="carddetail_link_imgContainer_img" 
                            title="Fotografia del personaje"/>
                </div>
                <div>
                    <h2 className="carddetail_link_name">Nombre: {charactersFound.name}</h2>
                    <p className="carddetail_link_specie">Especie: {charactersFound.specie}</p>
                    <p className="carddetail_link_house">Casa: {charactersFound.house}</p>
                    <p className="carddetail_link_gender">Género: {charactersFound.gender}</p>
                    <div className="carddetail_link_alive">Estado: {charactersFound.alive ? 
                        <div className='divternario'>
                            <p className='text_carddetail'>'Vivo/a'</p>
                            <img 
                                    src={heart}
                                    alt='corazón'
                                    className='icon_carddetail'
                                    title="corazón"/>
                        </div> 
                        : 
                        <div className='divternario'>
                            <p className='text_carddetail'>'Muerta/o'</p>
                            <img 
                                src={skull}
                                alt='skull'
                                className='icon_carddetail'
                                title="skull"/>
                                </div>
                                }
                    </div>
                </div>
            </div>
         </div> 

       
    )

}

export default CharacterDetail;