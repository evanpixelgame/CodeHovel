import { useState } from "react";
import "./App.css";
import Main from "./components/main/Main";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Main />
      <Header />
      <Footer />
    </>
  );
}

export default App;
