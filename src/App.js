import "./App.css";
import Header from "./components/Header"
import Footerbar from "./components/Footerbar";
import Middlebar from "./components/Middlebar";
import Lifeline from "./components/Lifeline";
import Aboutme from "./components/Aboutme";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Qualification from './components/Qualification';
import Cilent from "./components/Cilent";
function App() {
  return (
    <div>
    
      <Header />
      <Middlebar/>
      <Aboutme />
      <Skills/>
      <Services/>
      <Lifeline />
      <Cilent/>
      <Qualification/>
      
      <Footerbar />

    </div>
  )
}

export default App;
