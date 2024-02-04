import "./Skills.css";

import { technologiesData } from "./technologiesData.js";

export const Skills = () => {
  return (
    <section id="habilidades" className="skills fixed--width">
      <header className="skills__header">
        <h2 className="skills__title title">Habilidades destacadas</h2>
      </header>
      <article className="skills__group">
        {technologiesData.map(({ title, image }, index) => {
          return (
            <figure className="skills__item" key={index}>
              <img
                src={image}
                alt={`${title} Logo`}
                className="skills__image"
                loading="lazy"
                height={"100%"}
              />
              <figcaption className="skills__caption">{title}</figcaption>
            </figure>
          );
        })}
      </article>
    </section>
  );
};
