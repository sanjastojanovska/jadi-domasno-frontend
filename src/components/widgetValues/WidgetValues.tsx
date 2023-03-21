import React from "react";
import { Link } from "react-router-dom";

interface Props {}

const WidgetValues: React.FC<Props> = (props) => {
  return (
    <div className="widget-values">
      <h2 className="title main-title">Нашите вредности</h2>
      <div className="grid-parent">
        <div className="grid-item">
          <div className="grid-item-inner">
            <img src="./images/values1.webp" alt="" />
            <h3>Поврзување</h3>
            <p className="text">Вистински луѓе. Автентична љубов.</p>
          </div>
        </div>

        <div className="grid-item">
          <div className="grid-item-inner">
            <img src="./images/values2.webp" alt="" />
            <h3>Поврзување</h3>
            <p className="text">Вистински луѓе. Автентична љубов.</p>
          </div>
        </div>

        <div className="grid-item">
          <div className="grid-item-inner">
            <img src="./images/values3.webp" alt="" />
            <h3>Поврзување</h3>
            <p className="text">Вистински луѓе. Автентична љубов.</p>
          </div>
        </div>
      </div>
      <Link to="/how-it-works" className="btn">
        Дознај повеќе за нас
      </Link>
    </div>
  );
};

export default WidgetValues;
