import React from "react";
// import { Outlet } from "react-router-dom";
// import HTMLNavBar from "./htmlNavBar";

function MainPage() {
  return (
    <div>
      <h1>Не много о HTML</h1>
      <p>
        <span>
          HTML - <i>HyperText Markup Language</i>
        </span>{" "}
        или на русском - <i>язык гипертекстовой разметки</i>. HTML являеться
        стандартизированный язык разметки.
      </p>
      <p>
        Почти все теги записываются в угловых скобках и каждый тег должен
        открываться и закрываться:
      </p>
      <p className="codeExm">
        <code>
          <b>&lt;html&gt;&lt;/html&gt;</b>
        </code>
      </p>

      <p>Так же существуют теги у которых нет закрывающих елементов:</p>
      <p className="codeExm">
        <code>
          <b>&lt;img src="" alt="" /&gt;</b>
        </code>
      </p>

      <p>
        Для того чтоб начать создавать новую страницу, в начале документа надо
        опредилить с помощью какаой версия HTML будет написан код.
      </p>
    </div>
  );
}

export default MainPage;
