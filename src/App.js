import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./home";
import { NavBar } from "./NavBar";
import { Portfolio } from "./portfolio";
import { About } from "./about";
import { Footer } from "./footer/Footer";
import { Contact } from "./contact";
import { NaomiAndPeter } from "./home/naomiAndPeter";
import { KaitAndLogan } from "./home/kaitAndLogan";
import { RealWeddingsTeaser } from "./home/realWeddingsTeaser";
import { EngageSicily } from "./home/engageSicily";
import { Experience } from "./experiece";
import { Press } from "./press";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/portfolio" Component={Portfolio} />
          <Route path="/contact" Component={Contact} />
          <Route path="/naomi-and-peter" Component={NaomiAndPeter} />
          <Route path="/kait-and-logan" Component={KaitAndLogan} />
          <Route path="/real-weddings-teaser" Component={RealWeddingsTeaser} />
          <Route path="/engage-sicily" Component={EngageSicily} />
          <Route path="/experience" Component={Experience} />
          <Route path="/press" Component={Press}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
