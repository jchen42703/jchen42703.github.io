import Hero from "./components/Hero";
import { DarkHeader } from "./components/Headers";

import "./styles/styles.scss";

function App() {
  return (
    <div className="full-container">
      <Hero></Hero>
      <DarkHeader text="I. Research"></DarkHeader>
    </div>
  );
}

export default App;
