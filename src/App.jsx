import "./App.css";
import { useThemeContext } from "./ThemeCustomizer/provider/ContextProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Main from "./components/main/Main";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  const { theme } = useThemeContext();

  return (
    <div className={`app ${theme}`}>
      <ToastContainer />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
