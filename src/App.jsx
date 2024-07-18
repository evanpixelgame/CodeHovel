import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useThemeContext } from "./ThemeCustomizer/provider/ContextProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HomePage, About, Projects, Contact } from "./pages";

function App() {
  const { theme } = useThemeContext();

  return (
    <div className={`app ${theme}`}>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/CodeHovel" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
