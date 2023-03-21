import React from "react";

interface Props {}

const IntroBanner: React.FC<Props> = (props) => {
  return (
    <div className="intro-banner">
      <div className="grid-parent">
        <div className="grid-item">
          <div className="grid-item-inner">
            <div className="content">
              <img src="./images/jadidomashnologo.svg" alt="" />
              <h1>Јади Домашно</h1>
            </div>
            <div className="second-content">
              <h2 className="main-title">Вкусот на твоето соседство!</h2>
            </div>
            <form>
              <div>
                <input type="text" placeholder="Пребарај" />
              </div>
              <button className="btn">Погледни резултати</button>
            </form>
          </div>
        </div>
        <div className="grid-item">
          <div className="grid-item-inner">
            <img src="/images/bannerimg.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroBanner;
