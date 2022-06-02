import {FaGoogle, FaTwitter, FaInstagram, FaYoutube} from 'react-icons/fa'
//import BookHubThemeContext from '../../context/BookHubThemeContext'
import './index.css'

const Footer = () => {
    return (
        <div className="footer-container">
          <div className="responsive-footer">
            <button type="button" className="footer-buttons">
              <FaGoogle className="textcolor" size={20} />
            </button>
            
            <button type="button" className="footer-buttons">
              <FaTwitter className="textcolor" size={20} />
            </button>
            <button type="button" className="footer-buttons">
              <FaInstagram className="textcolor" size={20} />
            </button>
            <button type="button" className="footer-buttons">
              <FaYoutube className="textcolor" size={20} />
            </button>
          </div>
          <p className="textcolor">Contact Us</p>
        </div>
    )
}

export default Footer