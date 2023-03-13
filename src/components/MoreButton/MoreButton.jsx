import './MoreButton.css';

const MoreButton = ({status}) => {
  return (
    <section className='more-button'>
        <button className={`button more-button__button${status}`}>Ещё</button>
    </section>
  )
};

export default MoreButton;