import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Summary, BookTicket } from "./screens";

export default function App() {
  const [data, setData] = useState("");
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home setData={setData} />} />
          <Route path="/summary" element={<Summary data={data} />} />
          <Route path="/book-ticket" element={<BookTicket />} />
        </Routes>
      </div>
    </Router>
  );
}
