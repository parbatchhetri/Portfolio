import "./App.css";
import Header from "./components/Header"
import Footerbar from "./components/Footerbar";
import Middlebar from "./components/Middlebar";
import Timeline from "./components/Timeline";

function App() {
  return (
    <div>
      <Header />
      <Middlebar/>
      <Footerbar />
      <Timeline />
    </div>
  )
}

export default App;
