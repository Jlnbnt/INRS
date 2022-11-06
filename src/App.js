import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

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

import AllJobs from "./pages/Jobs/AllJobs";

import AllBlog from "./pages/Blog/AllBlog";
import SingleBlog from "./pages/Blog/Articles/SingleBlog";

import SearchResults from "./pages/Search/SearchResults";
import PDC from "./pages/CGU/PDC";
import CGU from "./pages/CGU/CGU";

function App() {
  const { themeChoice } = useThemeContext();

  return (
    <div
      className={`${themeChoice} flex flex-col w-full justify-center items-center `}
    >
      <div className="max-w-[2000px] w-full">
        <BrowserRouter>
          <ScrollToTop>
            <Routes>
              {/* Routes inside Layout Component */}
              <Route path="/" element={<Layout />}>
                <Route path="/" element={<Homepage />} />

                <Route path="/blogs" element={<AllBlog />} />
                <Route path="/blog/:id" element={<SingleBlog />} />

                <Route path="/actualites" element={<AllNews />} />
                <Route path="/actualite/:id" element={<SingleNews />} />

                <Route path="/evenements" element={<AllEvents />} />
                <Route path="/evenement/:id" element={<SingleEvent />} />

                <Route path="/jobs" element={<AllJobs />} />

                <Route path="/about" element={<About />} />

                <Route path="/search" element={<SearchResults />} />

                <Route path="/pdc" element={<PDC />} />
                <Route path="/cgu" element={<CGU />} />
              </Route>
              {/* Catch All */}
              <Route path="*" element={<Missing />} />
            </Routes>
          </ScrollToTop>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
