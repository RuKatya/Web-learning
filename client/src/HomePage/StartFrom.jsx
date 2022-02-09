import React from "react";
import { Link } from "react-router-dom";

function StartFrom() {
  return (
    <>
      <section id="startFromInfo" class="startFromInfo">
        <div>
          <h2>Первое что стоит выучить это</h2>
        </div>
        <div>
          <Link to="html"> HTML </Link>
        </div>
        <div>
          <h2>Далее что стоит выучить это</h2>
        </div>
        <div>
          <Link to="css">CSS </Link>
        </div>
        <div>
          <h2>После что стоит выучить это</h2>
        </div>

        <div>
          <Link to="javascript"> JAVASCRIPT </Link>
        </div>
      </section>
    </>
  );
}

export default StartFrom;
