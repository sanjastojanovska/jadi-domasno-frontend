import React from "react";
import { Link } from "react-router-dom";

interface Props {}

const WidgetCta: React.FC<Props> = (props) => {
  return (
    <div className="widget-cta">
      <h2 className="title">
        Стани дел од семејството <span>Јади Домашно</span>
      </h2>
      <div className="grid-parent">
        <div className="grid-item">
          <div className="grid-item-inner">
            <img src="./images/cta1.svg" alt="" />
            <p className="cta-head">Сакам да нарачувам храна</p>
            <hr />
          </div>
          <div className="grid-item-inner">
            <div className="inner-flex">
              <div className="inner-icon">
                <img src="./images/icon1.svg" alt="" />
              </div>
              <p>Регистрирај се на платформата како клиент!</p>
            </div>
            <div className="inner-flex">
              <div className="inner-icon">
                <img src="./images/cta-2.svg" alt="" />
              </div>
              <p>
                Одбери дали сакаш веќе подготвена храна или одбери датум на кој
                што сакаш да ти биде подготвена.
              </p>
            </div>
            <div className="inner-flex">
              <div className="inner-icon">
                <img src="./images/cta-3.svg" alt="" />
              </div>
              <p>Нарачај брзо и лесно преку нашата платформа!</p>
            </div>
            <div className="inner-flex">
              <div className="inner-icon">
                <img src="./images/cta-4.svg" alt="" />
              </div>
              <p>Подигни ја нарачката и уживај во вкусот на домашната храна.</p>
            </div>
            <Link to="/how-it-works" className="btn">Стани клиент</Link>
          </div>
        </div>

        <div className="grid-item">
          <div className="grid-item-inner">
            <img src="./images/cta2.svg" alt="" />
            <p className="cta-head">Сакам да станам готвач</p>
            <hr />
          </div>
          <div className="grid-item-inner">
            <div className="inner-flex">
              <div className="inner-icon">
                <img src="./images/icon1.svg" alt="" />
              </div>
              <p>Регистрирај се на платформата како готвач!</p>
            </div>
            <div className="inner-flex">
              <div className="inner-icon">
                <img src="./images/cta-2.svg" alt="" />
              </div>
              <p>Пополни го целосно твојот профил.</p>
            </div>
            <div className="inner-flex">
              <div className="inner-icon">
                <img src="./images/cta-3.svg" alt="" />
              </div>
              <p>Примај нарачки и готви вкусни јадења!</p>
            </div>
            <div className="inner-flex">
              <div className="inner-icon">
                <img src="./images/cta-4.svg" alt="" />
              </div>
              <p>Испорачувај ги твоите нарачки и заработи.</p>
            </div>
            <Link to="/how-it-works" className="btn">Стани готвач</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WidgetCta;
