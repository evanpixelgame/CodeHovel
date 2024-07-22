import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useThemeContext } from "./components/ThemeCustomizer/provider/ContextProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  HomePage,
  About,
  Contact,
  Projects,
  NoFormat,
  ImageDisplay,
  VideoDisplay,
} from "./pages";

// Define your routes using createBrowserRouter
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/noFormat",
    element: <NoFormat />,
    children: [
      {
        path: "imageDisplay",
        element: <ImageDisplay />,
      },
      {
        path: "videoDisplay",
        element: <VideoDisplay />,
      },
    ],
  },
  {
    path: "*",
    element: <HomePage />,
  },
]);

function App() {
  const { theme } = useThemeContext();

  return (
    <div className={`app ${theme}`}>
      <ToastContainer />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
