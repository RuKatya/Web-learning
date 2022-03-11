import { BrowserRouter, Routes, Route } from "react-router-dom";

//PAGES
import HomePage from "../components/HomePage";
import HTMLPage from "../components/Exp/HTML";
import CSSPage from "../components/Exp/CSS";
import JSPage from "../components/Exp/JavaScript";

//HTML PAGES
import History from "../components/Exp/HTML/History";
import Layout from "../Layout";
import MainPage from "../components/Exp/HTML/MainPage";

console.log(`Hello you!`);
console.log(navigator.userAgentData);
console.log(navigator.userAgentData.platform);

function RouterPage() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="html/*" element={<HTMLPage />}>
              <Route index element={<MainPage />} />
              <Route path="history" element={<History />} />
            </Route>
            <Route path="css" element={<CSSPage />} />
            <Route path="javascript" element={<JSPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default RouterPage;
