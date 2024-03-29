import "./Projects.css";
import { projectsData } from "./projectsData.js";
import { ProjectsCard } from "./ProjectsCard";

import i_navArrowLeft from "../../assets/icons/nav-arrow-left.webp";
import i_navArrowRight from "../../assets/icons/nav-arrow-right.webp";

import { useState } from "react";
import anime from "animejs";

export const Projects = () => {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const totalProjects = projectsData.length;

  const nextItem = (id) => {
    const newValue = (id + 1) % totalProjects;
    dotMove(newValue);
    setCurrentItemIndex(newValue);
  };

  const prevItem = (id) => {
    const newValue = (id - 1 + totalProjects) % totalProjects;
    dotMove(newValue);
    setCurrentItemIndex(newValue);
  };

  const dotMove = (id) => {
    const dotWidth = 29.5; // Ajusta este valor según el ancho de tus puntos
    const targetPosition = id * dotWidth;

    anime({
      targets: ".projects__dot--moving",
      translateX: targetPosition,
      scale: 0.5,
      duration: 200,
      easing: "easeInOutQuad",
      complete: function () {
        anime({
          targets: ".projects__dot--moving",
          scale: 1,
          duration: 200,
          easing: "easeInOutQuad",
        });
      },
    });
  };

  const selectItem = (id) => {
    if (currentItemIndex === id) {
      return;
    }

    dotMove(id);

    setCurrentItemIndex(id);
  };

  return (
    <section id="proyectos" className="projects fixed--width">
      <header className="projects__header">
        <h2 className="projects__title title">Proyectos</h2>
      </header>

      <article className="projects__project--carousel">
        <div className="projects__project-article">
          <button
            className="projects__carousel-button carousel-button-left"
            onClick={() => {
              prevItem(currentItemIndex);
            }}
          >
            <img src={i_navArrowLeft} alt="Previous" />
          </button>

          {projectsData.map((data, index) => (
            <ProjectsCard
              data={data}
              index={index}
              currentIndex={currentItemIndex}
              key={index}
            />
          ))}

          <button
            className="projects__carousel-button carousel-button-right"
            onClick={() => {
              nextItem(currentItemIndex);
            }}
          >
            <img src={i_navArrowRight} alt="Next" />
          </button>
        </div>

        <div className="projects__carousel-dots">
          {projectsData.map((d, index) => (
            <span
              onClick={() => {
                selectItem(index);
              }}
              className={`projects__dot ${
                currentItemIndex === index && "projects__dot--active"
              }`}
              key={index}
            ></span>
          ))}
          <span className="projects__dot--moving"></span>
        </div>
      </article>
    </section>
  );
};
