
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return(
    <footer>
      <div className="wrap">
        <div className="social-links">
          <a href="/"><FontAwesomeIcon icon={faFacebookSquare} /></a>
          <a href="/"><FontAwesomeIcon icon={faTwitterSquare} /></a>
          <a href="/"><FontAwesomeIcon icon={faInstagram} /></a>
        </div>
        <input type="text" placeholder="Email Address"/>
        <button type="submit">Subscribe</button>
      </div>
      <p className="copyright">&copy;2016 Sarah Holden</p>
    </footer>
  );
};

export default Footer;