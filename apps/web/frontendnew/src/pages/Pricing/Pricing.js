import { Helmet } from "react-helmet";
import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeModeProvider";
import Cost from "../../components/Container/Cost";
import Footer from "../../components/Footer/Footer";

const Pricing = () => {

    const { theme } = useContext(ThemeContext);
    const dark = theme === "dark";

  return (
    <div>
      <Helmet>
        <title>Noteslify | Pricing</title>
        <meta
          name="description"
          content="Noteslify. Pricing plans for our website."
        />
      </Helmet>
      <Cost dark={dark} />
      <Footer dark={dark} />
    </div>
  );
};

export default Pricing;
