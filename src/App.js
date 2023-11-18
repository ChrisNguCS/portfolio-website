import Navbar from "./components/navbar/navbar";
import Intro from "./components/About/intro"
import Skills from "./components/skills/skills"
import Projects from "./components/portfolio/portfolio"

function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Projects/>
    </div>
  );
}

export default App;
