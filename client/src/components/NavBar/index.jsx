import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [isShownMenuBtn, setIsShownMenuBtn] = useState(false);
  const [isShownCloseBtn, setIsShownCloseBtn] = useState(true);

  function hendleShown() {
    setIsShownMenuBtn(!isShownMenuBtn);

    // if (isShownMenuBtn === true) {
    //     setIsShownCloseBtn(false);
    //   } else if (isShownMenuBtn === false) {
    //     setIsShownCloseBtn(true);
    //   }
  }

  useEffect(() => {
    if (window.screen.width > 768) {
      setIsShownMenuBtn(true);
      // setIsShownCloseBtn(false);
    }
  }, []);

  return (
    <nav className="navBar">
      <Link to="/" className="navBar__webHeader">
        Web-learning
      </Link>
      {isShownMenuBtn ? (
        <div className="navBar__links">
          {isShownCloseBtn ? (
            <div onClick={hendleShown} className="navBar__links--closeBtn">
              X
            </div>
          ) : (
            <></>
          )}
          <Link to="html" onClick={hendleShown}>
            HTML
          </Link>
          <Link to="css" onClick={hendleShown}>
            CSS{" "}
          </Link>
          <Link to="js" onClick={hendleShown}>
            {" "}
            JAVASCRIPT{" "}
          </Link>
        </div>
      ) : (
        <div className="navBar__menuBtn" onClick={hendleShown}></div>
      )}
    </nav>
  );
}

export default NavBar;
