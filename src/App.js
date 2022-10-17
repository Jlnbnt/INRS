import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useThemeContext } from "./context/ThemeProvider";
import ScrollToTop from "./context/ScrollToTop";

import Layout from "./layout/Layout";

import Homepage from "./pages/HomePage/Homepage";

import About from "./pages/About/About";
import Missing from "./pages/Missing/Missing";

import AllNews from "./pages/News/AllNews";
import SingleNews from "./pages/News/SingleNews";

import AllEvents from "./pages/Events/AllEvents";
import SingleEvent from "./pages/Events/SingleEvent";

import SinglePost from "./pages/Posts/SinglePost";

import SearchResults from "./pages/Search/SearchResults";

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
              <Route path="/search" element={<SearchResults />} />
              <Route path="/about" element={<About />} />
              <Route path="/actualites" element={<AllNews />} />
              <Route path="/evenements" element={<AllEvents />} />
              <Route path="/actualite/:id" element={<SingleNews />} />
              <Route path="/evenement/:id" element={<SingleEvent />} />
              <Route path="/post/:id" element={<SinglePost />} />
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
