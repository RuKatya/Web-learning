import { Routes, Route } from "react-router-dom";

//PAGES
import HomePage from "../HomePage";
import HTMLPage from "../Exp/HTML";
import CSSPage from "../Exp/CSS";
import JSPage from "../Exp/JavaScript";

function RouterPage() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="html" element={<HTMLPage />} />
        <Route path="css" element={<CSSPage />} />
        <Route path="javascript" element={<JSPage />} />
      </Routes>
    </>
  );
}

export default RouterPage;
