import "./App.css";
import Header from "./components/Header"
import Footerbar from "./components/Footerbar";
import Middlebar from "./components/Middlebar";
import Timeline from "./components/Timeline";
import Aboutme from "./components/Aboutme";
import Skills from "./components/Skills";
function App() {
  return (
    <div>
      <Header />
      <Middlebar/>
      <Footerbar />
      <Timeline />
      <Aboutme />
      <Skills/>

    </div>
  )
}

export default App;
