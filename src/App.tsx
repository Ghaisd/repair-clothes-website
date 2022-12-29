import { Home } from "@mui/icons-material";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";
import { Prices } from "./pages/Prices";

export const routes = {
  Prices: "/prices",
  About: "/about",
  Contact: "/contact",
};

export const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={routes.Prices} element={<Prices />} />
        <Route path={routes.About} element={<About />} />
        <Route path={routes.Contact} element={<Contact />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};
