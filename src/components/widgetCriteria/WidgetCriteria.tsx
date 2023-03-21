import React from "react";

interface Props {}

const WidgetCriteria: React.FC<Props> = (props) => {
  return (
    <div className="widget-criteria">
      <h2>Кои критериуми треба да ги исполнува еден готвач?</h2>
      <div className="grid-parent">
        <div className="grid-item">
          <div className="grid-item-inner">
            <div className="img-criteria">
              <span className="number">1</span>
              <img src="./images/criteria1.svg" alt="" />
            </div>
            <p>Вашата кујна треба да биде чиста и уредна!</p>
          </div>
        </div>
        <div className="grid-item">
          <div className="grid-item-inner">
            <div className="img-criteria">
              <span className="number">2</span>
              <img src="./images/criteria1.svg" alt="" />
            </div>
            <p>
              Намирниците со кои ја готвите храната треба да се истите што се
              наведени во вашето мени!
            </p>
          </div>
        </div>
        <div className="grid-item">
          <div className="grid-item-inner">
            <div className="img-criteria">
              <span className="number">3</span>
              <img src="./images/criteria1.svg" alt="" />
            </div>
            <p>
              Секогаш треба да ги измиете рацете темелно, пред да започнете со
              подготвување оброци!
            </p>
          </div>
        </div>
        <div className="grid-item">
          <div className="grid-item-inner">
            <div className="img-criteria">
              <span className="number">4</span>
              <img src="./images/criteria1.svg" alt="" />
            </div>
            <p>
              Намирниците треба да се чуваат во соодветни услови! Проверувајте
              го редовно рокот пред да почнете да готвите.
            </p>
          </div>
        </div>
        <div className="grid-item">
          <div className="grid-item-inner">
            <div className="img-criteria">
              <span className="number">5</span>
              <img src="./images/criteria1.svg" alt="" />
            </div>
            <p>
              Нека вашите миленичиња ве почекаат надвор од кујната. Некои
              клиенти не сакаат кога се готви во присуство на домашно милениче!
            </p>
          </div>
        </div>
        <div className="grid-item">
          <div className="grid-item-inner">
            <div className="img-criteria">
              <span className="number">6</span>
              <img src="./images/criteria1.svg" alt="" />
            </div>
            <p>
              Бидете секогаш професионални и пријателски насочени кон клиентите
              кон нарачуваат храна од вас!
            </p>
          </div>
        </div>
        <div className="grid-item">
          <div className="grid-item-inner">
            <div className="img-criteria">
              <span className="number">7</span>
              <img src="./images/criteria1.svg" alt="" />
            </div>
            <p>
              Ние сме едно големо семејство! Секогаш обидете се несогласувањата
              да ги решите директно со вашите клиенти. Сослушајте ги нивните
              критики - тоа ќе ве направи подобар готвач!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WidgetCriteria;
