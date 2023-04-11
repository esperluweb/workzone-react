import '../assets/css/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faHeart } from '@fortawesome/free-solid-svg-icons'

function Footer() {
    return <footer>
            <p>Développé avec <FontAwesomeIcon icon={faCoffee} /> et <FontAwesomeIcon icon={faHeart} /> par <a href="https://esperluweb.com">EsperluWeb</a></p>
        </footer>
}

export default Footer