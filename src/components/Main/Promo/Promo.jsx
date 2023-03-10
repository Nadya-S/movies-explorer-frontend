import './Promo.css';
import promo from '../../../images/promo.png'

const Promo = () => {
  return (
    <section className='promo'>
        <div className='promo__container'>
          <h2 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h2>
        </div>
        <img className='promo__image' src={promo} alt='promo'/>
    </section>
  )
};

export default Promo;