// компонент с описанием дипломного проекта.
import './AboutProject.css';
import ContainerTitle from '../../CommonElements/ContainerTitle/ContainerTitle';

const AboutProject = () => {
  return (
    <section className='about-project'>
        <ContainerTitle title='О проекте'/>
        <div className='about-project__columns'>
          <div className='about-project__column'>
            <h3 className='about-project__column-title'>Дипломный проект включал 5 этапов</h3>
            <p className='about_project__column-text'>Составление плана, работу над бэкендом, вёрстку,
             добавление функциональности и финальные доработки.</p>
          </div>
          <div className='about-project__column'>
            <h3 className='about-project__column-title'>На выполнение диплома ушло 5 недель</h3>
            <p className='about_project__column-text'>У каждого этапа был мягкий и жёсткий дедлайн,
             которые нужно было соблюдать, чтобы успешно защититься.</p>
          </div>
        </div>
        <div className='about-project__time'>
            <div className='about-project__back'>
                <p className='about-project__back-weeks'>1 неделя</p>
                <p className='about-project__side'>Back-end</p>
            </div>
            <div className='about-project__front'>
              <p className='about-project__front-weeks'>4 недели</p>
              <p className='about-project__side'>Front-end</p>
            </div>
        </div>
    </section>
  )
};

export default AboutProject;