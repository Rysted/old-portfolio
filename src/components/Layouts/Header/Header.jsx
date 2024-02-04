import "./Header.css";
import { Link } from "react-router-dom";

export const Header = () => {
  const list = ["sobre mí", "proyectos", "habilidades", "formación"];

  const handleClick = (id) => {
    // Desplazarse al elemento después de un retraso
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="Header">
      <nav className="header__nav">
        <ul className="nav__list">
          {list.map((title, index) => {
            const titleLower = title.toLowerCase().replace(/\s/g, "-");

            return (
              <li key={index} className="nav__item">
                <Link
                  to={`/#${titleLower}`}
                  className={`nav__link nav__${titleLower}`}
                  onClick={() => handleClick(titleLower)}
                >
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};
