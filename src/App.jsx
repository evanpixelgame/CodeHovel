import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useThemeContext } from "./components/ThemeCustomizer/provider/ContextProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  HomePage,
  About,
  Contact,
  Projects,
  ImageDisplay,
  VideoDisplay,
} from "./pages";

function App() {
  const { theme } = useThemeContext();

  return (
    <div className={`app ${theme}`}>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/CodeHovel" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects/*" element={<Projects />}>
            <Route path="imageDisplay" element={<ImageDisplay />} />
            <Route path="videoDisplay" element={<VideoDisplay />} />
          </Route>
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
