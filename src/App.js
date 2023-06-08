import "./App.css";
import MainHeader from "./components/MainHeader";
import Home from "./components/Home";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2/Section2";
import Section4 from "./components/Section4/Section4";

import "simplebar-react/dist/simplebar.min.css";

function App() {
  return (
    <div className="App">
      <Section1 />
      <Section2 />
      <Section4 />
    </div>
  );
}

export default App;
