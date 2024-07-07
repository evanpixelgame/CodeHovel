import "./App.css";
import { useThemeContext } from "./ThemeContext";
import Main from "./components/main/Main";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  const { theme } = useThemeContext();

  return (
    <div className={`app ${theme}`}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
