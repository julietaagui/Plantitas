import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Plantas from './components/Plantas.jsx';
import Banner from "./components/Banner.jsx";
import { DATABASE } from "./db/db.js";
import { useState } from "react";

export default function App() {
  const [data] = useState(DATABASE);

  return (
    <div>
      <Banner />

      <Router>
        <Routes>
          <Route path="/" element={<Plantas data={data} />} /> {/* Esta es la ruta para la raíz */}
          <Route path="/plantas" element={<Plantas data={data} />} />
          <Route path="/banner" element={<Banner />} />
        </Routes>
      </Router>
    </div>
  );
}
