// Layouts
import { Header } from "../components/Layouts/Header/Header.jsx";
import { Footer } from "../components/Layouts/Footer/Footer.jsx";

export const Root = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
