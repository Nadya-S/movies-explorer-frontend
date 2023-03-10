import './AboutMe.css';
import ContainerTitle from '../../CommonElements/ContainerTitle/ContainerTitle';
import foto from '../../../images/profile_foto.jpg';

const AboutMe = () => {
  return (
    <section className='about-me'>
        <ContainerTitle title='Студент' />
        <div className='about-me__info'>
            <div className='about-me__text'>
              <h3 className='about-me__name'>Надежда</h3>
              <p className='about-me__about'>Фронтенд-разработчик, 27 лет</p>
              <p className='about-me__story'>Здесь будет история. Здесь будет история.
                  Здесь будет история. Здесь будет история.Здесь будет история. 
                  Здесь будет история.Здесь будет история. Здесь будет история.</p>
              <a href='https://github.com/Nadya-S' target="_blank" className="link about-me__git" rel="noreferrer">Github</a>
            </div>
            <img className='about-me__foto' src={foto} alt='my foto' />
        </div>
    </section>
  )
};

export default AboutMe;