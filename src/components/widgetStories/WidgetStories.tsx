import React from "react";

interface Props {}

const WidgetStories: React.FC<Props> = (props) => {
  return (
    <div className="widget-stories">
      <h2>Зошто да станете готвач на Јади домашно?</h2>
      <div className="grid-parent">
        <div className="grid-item">
          <div className="grid-item-inner">
            <img src="./images/stories1.jpg" alt="" />
            <h3>Поврзување!</h3>
            <p>Вистински луѓе. Автентична љубов.</p>
          </div>
        </div>
        <div className="grid-item">
          <div className="grid-item-inner">
            <img src="./images/stories2.jpg" alt="" />
            <h3>Поврзување!</h3>
            <p>Вистински луѓе. Автентична љубов.</p>
          </div>
        </div>
        <div className="grid-item">
          <div className="grid-item-inner">
            <img src="./images/stories1.jpg" alt="" />
            <h3>Поврзување!</h3>
            <p>Вистински луѓе. Автентична љубов.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WidgetStories;
