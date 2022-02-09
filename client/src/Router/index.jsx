import { Routes, Route } from "react-router-dom";

//PAGES
import HomePage from "../components/HomePage";
import HTMLPage from "../components/Exp/HTML";
import CSSPage from "../components/Exp/CSS";
import JSPage from "../components/Exp/JavaScript";

function RouterPage() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="html" element={<HTMLPage />} />
        <Route path="css" element={<CSSPage />} />
        <Route path="js" element={<JSPage />} />
      </Routes>
    </>
  );
}

export default RouterPage;
