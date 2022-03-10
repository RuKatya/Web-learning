import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function SideNavBar({ pages }) {
  const [isOpen, setIsOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  function openBar() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);
  }, []);

  return (
    <nav className="sideBar">
      <div className="sideBar__subtitle">
        <div className="sideBar__subtitle--toggleOpen" onClick={openBar}>
          &gt;
        </div>
      </div>
      {isOpen || screenWidth > 911 ? (
        <div className="sideBar__nav">
          <button onClick={openBar} className="sideBar__nav--toggleBtn">
            &lt;
          </button>
          <div className="sideBar__links">
            {pages.map((page, index) => {
              return (
                <Link to={page} key={index} onClick={openBar}>
                  {page.replace("/", "")}
                </Link>
              );
            })}
          </div>
        </div>
      ) : (
        <nav style={{ display: "none" }}></nav>
      )}
    </nav>
  );
}

export default SideNavBar;
