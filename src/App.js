import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

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

import CookieConsent from "react-cookie-consent";

function App() {
  const { themeChoice } = useThemeContext();
  const cookies = localStorage.getItem("cookies") || false;

  return (
    <>
      <div
        className={`${themeChoice} flex flex-col w-full justify-center items-center`}
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
            {!cookies && (
              <CookieConsent
                debug={true}
                buttonText="Valider"
                style={{
                  background: themeChoice === "light" ? "#F9F6EE" : "#181818",
                  color: themeChoice === "light" ? "#36454F" : "#F9F6EE",
                  display: "flex",
                  alignItems: "center",
                }}
                buttonStyle={{
                  color: themeChoice === "light" ? "#36454F" : "#F9F6EE",
                  background: "transparent",
                  border:
                    themeChoice === "light"
                      ? "0.5px solid #36454F"
                      : "0.5px solid #F9F6EE",
                }}
                onAccept={() => localStorage.setItem("cookies", true)}
              >
                <div>
                  <strong>Ce site web utilise des cookies. </strong>
                  <br></br>
                  <span>
                    En continuant votre navigation sur ce site, vous acceptez
                    notre{" "}
                    <Link className="underline" to="/pdc">
                      Politique de Confidentialité
                    </Link>
                  </span>
                </div>
              </CookieConsent>
            )}
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;
