import "./App.css";
import Header from "./components/Header"
import Footerbar from "./components/Footerbar";
import Middlebar from "./components/Middlebar";
import Timeline from "./components/Timeline";
import Aboutme from "./components/Aboutme";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Qualification from './components/Qualification';
function App() {
  return (
    <div>
      <Header />
      <Middlebar/>
      <Timeline />
      <Aboutme />
      <Skills/>
      <Services/>
      <Qualification/>
      <Footerbar />

    </div>
  )
}

export default App;
