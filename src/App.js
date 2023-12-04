import Navbar from "./components/navbar/navbar";
import Intro from "./components/About/intro"
import Skills from "./components/skills/skills"
import Projects from "./components/portfolio/portfolio"
import Contact from './components/contact/contact';
import { createTheme, ThemeProvider } from "@mui/material";

function App() {
  

  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
