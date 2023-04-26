import "./AboutMe.css";
import ContainerTitle from "../../CommonElements/ContainerTitle/ContainerTitle";
import foto from "../../../images/profile_foto.jpg";

const AboutMe = () => {
  return (
    <section className="about-me">
      <ContainerTitle title="Студент" />
      <div className="about-me__info">
        <div className="about-me__text">
          <h3 className="about-me__name">Надежда</h3>
          <p className="about-me__about">Фронтенд-разработчик, 27 лет</p>
          <p className="about-me__story">
            До веб-разработки я довольно долго работала флористом. Я увлеклась
            флористикой, потому что мне нравится эстетика, я люблю созерцать
            красоту и видеть результат своей работы. Но я всегда хотела
            зарабатывать деньги своими мозгами, а не своими руками. Поэтому я
            стала искать варианты интеллектуальных профессий, которым я смогу
            обучиться самостоятельно. Меня заитересовал фронтенд, так как
            разработчики создают что-то новое, классное, полезное. И я тоже так
            хочу. Я прошла курс Яндекса по веб-разработке. На курсе сделала
            несколько проектов и продолжаю дальше учиться самостоятельно. Смотрю
            видео разработчиков на ютуб, изучаю алгоритмы, решаю задачки на
            LeetCode. Помимо учебы люблю заниматься йогой, ведь в здоровом теле
            здоровый дух.
          </p>
          <a
            href="https://github.com/Nadya-S"
            target="_blank"
            className="link about-me__git"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
        <img className="about-me__foto" src={foto} alt="my foto" />
      </div>
    </section>
  );
};

export default AboutMe;
