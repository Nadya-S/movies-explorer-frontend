import './GreenLink.css';
import { Link } from 'react-router-dom';

const GreenLink = ({question, path, text}) => {
  return(
    <div className='green-link'>
      <p className='green-link__question'>{question}
        <Link to={path} className='link green-link__button'>{text}</Link>
      </p>
    </div>
  )
};

export default GreenLink;