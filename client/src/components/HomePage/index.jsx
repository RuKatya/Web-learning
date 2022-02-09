import React from "react";
import { Link } from "react-scroll";
import StartFrom from "./StartFrom";

function HomePage() {
  return (
    <>
      <div className="mainContainer">
        <div>
          <h1 style={{ fontSize: "3rem" }}>Web Learning</h1>
          <Link to="startFromInfo" isDynamic={true} smooth={true}>
            С чего начать?
          </Link>
        </div>
      </div>
      <StartFrom />
    </>
  );
}

export default HomePage;
