import { Link } from 'react-router-dom';
import logo from '../../../images/logo_circle.svg';

const LogoLink = () => {
  return (
    <Link to='/'><img className='link logo-link' alt='logo' src={logo}/>
    </Link>
  )
};

export default LogoLink;