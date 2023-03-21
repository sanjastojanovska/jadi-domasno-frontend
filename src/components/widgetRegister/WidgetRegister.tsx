import React from "react";

interface Props {}

const WidgetRegister: React.FC<Props> = (props) => {
  return (
    <div className="widget-register">
      <div className="img-box">
        <img src="./images/reviews-chef1.svg" alt="" />
      </div>
      <div className="content-box">
        <h2>Ви благодариме и добредојдовте!</h2>
        <p>
          Ви посакуваме уживање во храната од нашите готвачи и споделување убави
          моменти во соседството!
        </p>
        <button className="btn">Регистритај се</button>
      </div>
    </div>
  );
};

export default WidgetRegister;
