import title from '../images/title.png';
import '../styles/Header.scss';

const Header = () =>{
    return(
        <div className="header">
            <img src={title} alt="Harry Potter" className="header__title" />
        </div>
    )
};

export default Header;