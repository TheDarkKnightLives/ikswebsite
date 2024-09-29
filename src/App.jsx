import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
import Start from "./components/Start";
import Event1 from "./components/Event1";
import Event2 from "./components/Event2";
import Event3 from "./components/Event3";
import Event4 from "./components/Event4";
import Event5 from "./components/Event5";
import Event6 from "./components/Event6";
import End from "./components/End";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/start" element={<Start />} />
        <Route path="/event1" element={<Event1 />} />
        <Route path="/event2" element={<Event2 />} />
        <Route path="/event3" element={<Event3 />} />
        <Route path="/event4" element={<Event4 />} />
        <Route path="/event5" element={<Event5 />} />
        <Route path="/event6" element={<Event6 />} />
        <Route path="/end" element={<End />} />
      </Routes>
    </Router>
  );
};

export default App;
