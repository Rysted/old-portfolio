export const ProjectsCard = ({ data, index, currentIndex }) => {
  const { title, logo, bgImage, tags, url } = data;

  return (
    <div
      className={`projects__current-slide ${
        currentIndex === index
          ? "projects__current"
          : currentIndex > index
          ? "projects__current-left"
          : "projects__current-right"
      }`}
    >
      <div className="projects__current-image-container">
        {bgImage && (
          <img
            src={`images/projects/${bgImage}`}
            alt="Imagen de la página realizada"
            className="projects__carousel-image"
          />
        )}
      </div>

      <div className="projects__details">
        <img
          src={`images/projects/${logo}`}
          alt="Imagen del logo de la página"
        />
        <h3 className="projects__title">{title}</h3>
        <div className="projects__tech-stack">
          {tags.map((tag, index) => (
            <span className="projects__tech-item" key={index}>
              {tag}
            </span>
          ))}
        </div>
        {url && (
          <a href={url} className="projects__link">
            Ver el código
          </a>
        )}
      </div>
    </div>
  );
};
