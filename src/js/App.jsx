import "../css/App.css";
import AboutMe from "./AboutMe";
import Header from "./Header";
import Navbar from "./Navbar";
import Project from "./Project";

function App() {
  return (
    <main className="bg-background">
      <Navbar />
      <Header />
      <AboutMe />
      <Project />
    </main>
  );
}

export default App;
