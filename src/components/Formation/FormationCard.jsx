import i_studying from "../../assets/icons/Formation/studying.webp";
import i_graduate from "../../assets/icons/Formation/graduate.webp";

export const FormationCard = ({ data }) => {
  const { title, institution, description, period } = data;

  return (
    <article className="formation__item">
      <div className="formation__container--icon">
        <img
          className="formation__icon"
          src={period.end ? i_graduate : i_studying}
          alt={`Formation Icon ${title}`}
          loading="lazy"
          height={"100%"}
        />
      </div>
      <div className="formation__content">
        <h3 className="formation__subtitle">{title}</h3>
        <span className="formation__institution">{institution}</span>
        <div className="formation__description">
          {description.map((paragraph, index) => (
            <p className="formation__paragraph" key={index}>
              {paragraph}
            </p>
          ))}
        </div>
        <time className="formation__years">
          {`${period.start} - ${period.end || "En curso"}`}
        </time>
      </div>
    </article>
  );
};
