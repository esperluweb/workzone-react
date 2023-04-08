import logo from '../assets/logo.png' 
import '../assets/css/Header.css'

function Header() {
    return <header>
        <img src={logo} />
        <ul>
            <li>Accueil</li>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Linkedin</li>
            <li>Site</li>
        </ul>
    </header>
}

export default Header