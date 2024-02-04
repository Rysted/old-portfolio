import "./Formation.css";
import { FormationCard } from "./FormationCard";
import { FormationData } from "./FormationData";

export const Formation = () => {
  return (
    <section id="formación" className="formation fixed--width">
      <header className="formation__header">
        <h2 className="formation__title title">FORMACIÓN</h2>
      </header>
      <div className="formation__container">
        {FormationData.map((data, index) => {
          return <FormationCard data={data} key={index} />;
        })}
      </div>
    </section>
  );
};
