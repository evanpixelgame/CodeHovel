import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Main from "../../components/HomeContent/Main";

const HomePage = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer style={{ position: "fixed" }} />
    </>
  );
};
export default HomePage;
