import { About } from "../components/About/About.jsx";
import { Projects } from "../components/Projects/Projects.jsx";
import { Skills } from "../components/Skills/Skills.jsx";
import { Formation } from "../components/Formation/Formation.jsx";

export const Home = () => {
  return (
    <main className="main">
      <About />
      <Projects />
      <Skills />
      <Formation />
    </main>
  );
};
