import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";

function App() {
  const [page, setPage] = useState("about");
  function PageRender() {
    switch (page) {
      case "about":
        return <About />;
      case "work":
        return <Work />;
      case "contact":
        return <Contact />;
    }
  }
  return (
    <div className="App">
      <Header page = {page} setPage = {setPage} />

      <PageRender />

      <Footer />
    </div>
  );
}

export default App;
