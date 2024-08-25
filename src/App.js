import { lazy } from "react";
import { useSelector } from "react-redux";
import { Route, Router, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";


const Home = lazy(() => import("./pages/Home/Home"));
const TelegramChannel = lazy(() =>
  import("./pages/TelegramChannel/TelegramChannel")
);
const Blog = lazy(() => import("./pages/Blog/Blog"));
const Prodacts = lazy(() => import("./pages/Prodacts/Prodacts"));
const ProdactDetail = lazy(() => import("./pages/ProdactDetail/ProdactDetail"));
const Auth = lazy(() => import("./pages/Auth/Auth"));
const TermsOfUse = lazy(() => import("./pages/TermsOfUse/TermsOfUse"));
const ContactUs = lazy(() => import("./pages/ContactUs/ContactUs"));
const DesAboutUs = lazy(() => import("./pages/DesAboutUs/DesAboutUs"));

const App = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div
      className={darkMode ? "bg-gray-800 text-white" : "bg-white text-black"}
    >
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/Prodacts" element={<Prodacts />} />
          <Route path="/ProdactDetail/:id" element={<ProdactDetail />} />
          <Route path="/Auth" element={<Auth />} />
          <Route path="/TelegramChannel" element={<TelegramChannel />} />
          <Route path="/Blog/:id" element={<Blog />} />
          <Route path="/TermsOfUse" element={<TermsOfUse />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/DesAboutUs" element={<DesAboutUs />} />
        </Route>
      </Routes>
    </div>
  );
};
export default App;
