import "./About.css";

import profile from "../../assets/images/default-user.jpg";
import Curriculum from "../../assets/icons/Curriculum.svg";
import LinkedIn from "../../assets/icons/LinkedIn.svg";
import GitHub from "../../assets/icons/GitHub.svg";
import Mail from "../../assets/icons/Mail.svg";

export const About = () => {
  const LinkComponent = ({ url, image, name }) => (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="about__button--social"
    >
      <img
        src={image}
        alt={`Icono de ${name}`}
        className="about__image--social"
      />

      <span className="about__text--social">{name}</span>
    </a>
  );

  return (
    <section className="about fixed--width" id="sobre-mí">
      <article className="about__article">
        <img src={profile} className="about__image" alt="Imagen de perfil" />

        <div className="about__title">
          <h1 className="about__name" aria-label="Rysted">
            Hola, soy [Nombre]
          </h1>
          <LinkComponent url="#" image={Curriculum} name="Currículum" />
        </div>

        <h2 className="about__description">
          <span className="about__description--highlighted">Lorem ipsum, </span>
          dolor sit amet consectetur adipisicing elit. Adipisci accusamus,
          blanditiis rerum.
        </h2>

        <nav className="about__social">
          <LinkComponent url="#" image={LinkedIn} name="LinkedIn" />

          <LinkComponent url="#" image={GitHub} name="GitHub" />

          <LinkComponent url="mailto:" image={Mail} name="Correo electrónico" />
        </nav>
      </article>
    </section>
  );
};
