import React from "react";
import { Link } from "react-router-dom";

function StartFrom() {
  return (
    <>
      <section id="startFromInfo" className="startFromInfo">
        <div className="timeLine">
          <div className="timeLine__line"></div>
          <div className="timeLine__lineHTML"></div>
          <div className="timeLine__lineCSS"></div>
          <div className="timeLine__lineJS"></div>
        </div>

        {/* ------HTML------- */}
        <Link to="html" className="startFromInfo__titleHTML">
          <b>HTML</b>
        </Link>
        <Link to="html" className="startFromInfo__html">
          <img src="./img/HTML.png" alt="HTML Icon" />
          <p>Узнайте базовые теги для сайта. Постройте собственую разметку.</p>
        </Link>

        {/* ------CSS--------- */}
        <Link to="css" className="startFromInfo__titleCSS">
          <b>CSS</b>
        </Link>
        <Link to="css" className="startFromInfo__css">
          <img src="./img/CSS.png" alt="CSS Icon" />
          <p>Узнайте базовые теги для сайта. Постройте собственую разметку.</p>
        </Link>

        {/* ------JS--------- */}
        <Link to="js" className="startFromInfo__titleJS">
          <b>JavaScript</b>
        </Link>
        <Link to="js" className="startFromInfo__js">
          <img src="./img/JS.png" alt="JS Icon" />
          <p>Узнайте базовые теги для сайта. Постройте собственую разметку.</p>
        </Link>
      </section>
    </>
  );
}

export default StartFrom;
