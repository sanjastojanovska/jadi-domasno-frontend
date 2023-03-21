import React from "react";

interface Props {}

const WidgetReviews: React.FC<Props> = (props) => {
  return (
    <div className="widget-reviews">
      <h2 className="main-title">Што рекоа нашите задоволни гурмани?</h2>
      <div className="grid-parent">
        <div className="grid-item">
          <div className="grid-item-inner">
            <img src="./images/reviews1.webp" alt="" />
            <p className="p-tiny">
              ,,Највкусната домашна храна што сум ја пробала! Едвај чекам да
              пробам уште многу вкусни јадења.’’
            </p>
            <p className="text-small">Мила Крстева, 32 години</p>
          </div>
        </div>
        <div className="grid-item">
          <div className="grid-item-inner">
            <img src="./images/reviews2.webp" alt="" />
            <p className="p-tiny">
              ,,Јади домашно е најдобро нешто од мојот студентски живот во
              Скопје!’’
            </p>
            <p className="text-small">Лара Миланова, 22 години</p>
          </div>
        </div>

        <div className="grid-item">
          <div className="grid-item-inner">
            <img src="./images/reviews3.webp" alt="" />
            <p className="p-tiny">
              ,,Ни еден ресторан не може да го замени вкусот на домашно тавче
              гравче. Браво Јади домашно!!!’’
            </p>
            <p className="text-small">Миле Венковски, 40 години</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WidgetReviews;
