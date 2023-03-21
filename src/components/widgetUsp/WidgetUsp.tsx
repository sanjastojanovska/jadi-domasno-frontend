import React from "react";

interface Props {}

const WidgetUsp: React.FC<Props> = (props) => {
  return (
    <div className="widget-usp">
      <hr />
      <div className="grid-parent">
        <div className="grid-item">
          <img src="./images/usp1.svg" alt="" />
          <p>
            <b>10900+</b>
          </p>
          <h3>задоволни клиенти</h3>
        </div>

        <div className="grid-item">
          <img src="./images/usp2.svg" alt="" />
          <p>
            <b>13765+</b>
          </p>
          <h3>Подготвени јадења</h3>
        </div>

        <div className="grid-item">
          <img src="./images/usp3.svg" alt="" />
          <p>
            <b>864+</b>
          </p>
          <h3>среќни готвачи</h3>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default WidgetUsp;
