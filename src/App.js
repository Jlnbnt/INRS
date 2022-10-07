import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./layout/Layout";
import Homepage from "./pages/Homepage";
import Missing from "./pages/Missing";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Routes inside Layout Component */}
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
          </Route>
          {/* Catch All */}
          <Route path="*" element={<Missing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
