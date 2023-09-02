import "./App.css";
import { Nav, Hero } from "./Components";
import { Projects } from "./Pages";

function App() {
  return (
    <div className="main_container">
      <Nav />
      <Hero />
      <Projects />
    </div>
  );
}

export default App;
