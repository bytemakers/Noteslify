import { useContext } from "react";
import { Helmet } from "react-helmet";
import { ThemeContext } from "../../contexts/ThemeModeProvider";
import SignUpContainer from "../../components/Container/SignUpContainer";
import StickyFooter from "../../components/Footer/StickyFooter";

const SignUp = () => {
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
      <SignUpContainer />
      </main>
      {/* footer */}
      <StickyFooter dark={dark} />
    </>
  );
};

export default SignUp;
