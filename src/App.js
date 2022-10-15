import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./layout/Layout";
import Homepage from "./pages/Homepage";
import Missing from "./pages/Missing";
import About from "./pages/About";
import AllNews from "./pages/AllNews";

import { useThemeContext } from "./context/ThemeProvider";
import ScrollToTop from "./context/ScrollToTop";
import AllEvents from "./pages/AllEvents";
import SingleNews from "./SingleNews";

function App() {
  const { themeChoice } = useThemeContext();

  return (
    <div className={`${themeChoice}`}>
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            {/* Routes inside Layout Component */}
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Homepage />} />
              <Route path="/about" element={<About />} />
              <Route path="/actualites" element={<AllNews />} />
              <Route path="/evenements" element={<AllEvents />} />
              <Route path="/actualites:id" element={<SingleNews />} />
            </Route>
            {/* Catch All */}
            <Route path="*" element={<Missing />} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;
