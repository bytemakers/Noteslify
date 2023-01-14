import { useContext } from "react";
import { Helmet } from "react-helmet";
import { ThemeContext } from "../../contexts/ThemeModeProvider";
import MainContainer from "../../components/Container/MainContainer";
import Features from "../../components/Container/Features";
import Testimonials from "../../components/Container/Testimonials";
import CustomerLogos from "../../components/Container/CustomerLogos";
import Footer from "../../components/Footer/Footer";
import CTA from "../../components/Footer/CTA";

const Home = () => {
  const { theme } = useContext(ThemeContext);

  const dark = theme === "dark";

  return (
    <>
      <Helmet>
        <title>Noteslify | Home</title>
        <meta
          name="description"
          content="Your Privacy Friendly, Open Source. Alternative to EverNote."
        />
      </Helmet>
      {/* main */}
      <main>
        <MainContainer />
      </main>
      {/* customer logos */}
      <CustomerLogos dark={dark} />
      {/* features */}
      <Features dark={dark} />
      {/* testimonials  */}
      <Testimonials dark={dark} />
      {/* ### CTA */}
      <CTA dark={dark} />
      {/* footer */}
      <Footer dark={dark} />
    </>
  );
};

export default Home;
