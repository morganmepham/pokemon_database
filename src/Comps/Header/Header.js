import './Header.css'
import pokeball from '../../images/pokeball.png'
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/')
    }
    return (
        <div className="header-div">
            <img src={pokeball} alt="Pokeball" className="header-logo" onClick={handleClick}/>
            <h2 className="header-title" onClick={handleClick}>Poké Database</h2>
        </div>
    );
}
 
export default Header;