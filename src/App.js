import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./home";
import { NavBar } from "./NavBar";
import { Portfolio } from "./portfolio";
import { About } from "./about";
import { Footer } from "./footer/Footer";
import { Contact } from "./contact";

import { Press } from "./press";
import { Couple } from "./contact/couple";
import { EventPlanner } from "./contact/eventPlanner";
import { Editorial } from "./contact/editorial";
import { NaomiAndPeter } from "./home/Stories/naomiAndPeter";
import { KaitAndLogan } from "./home/Stories/kaitAndLogan";
import { RealWeddingsTeaser } from "./home/Stories/realWeddingsTeaser";
import { EngageSicily } from "./home/Stories/engageSicily";
import { Experience } from "./experience/experience";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/portfolio" Component={Portfolio} />
          <Route path="/contact" Component={Contact}>
            <Route index element={<Couple/>} />
            <Route path="event" element={<EventPlanner/>} />
            <Route path="editorial" element={<Editorial/>} />
          </Route>
          <Route path="/naomi-and-peter" Component={NaomiAndPeter} />
          <Route path="/kait-and-logan" Component={KaitAndLogan} />
          <Route path="/real-weddings-teaser" Component={RealWeddingsTeaser} />
          <Route path="/engage-sicily" Component={EngageSicily} />
          <Route path="/experience" Component={Experience} />
          <Route path="/press" Component={Press} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
