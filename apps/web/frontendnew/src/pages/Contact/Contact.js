import { useContext } from "react";
import { Helmet } from "react-helmet";
import ContactContainer from "../../components/Container/ContactContainer";
import { ThemeContext } from "../../contexts/ThemeModeProvider";
import Footer from "../../components/Footer/Footer";

const Contact = () => {
  const { theme } = useContext(ThemeContext);

  const dark = theme === "dark";
  return (
    <>
      <Helmet>
        <title>Noteslify | Contact</title>
        <meta
          name="description"
          content="Noteslify. Pricing plans for our website."
        />
      </Helmet>
      <ContactContainer />
      <Footer dark={dark} />
    </>
  );
};

export default Contact;
