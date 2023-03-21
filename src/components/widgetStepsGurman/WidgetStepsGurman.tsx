import React from "react";

interface Props {}

const WidgetStepsGurman: React.FC<Props> = (props) => {
  return (
    <div className="widget-steps">
      <h2>Како да станете дел од Јади домашно?</h2>
      <div className="steps-cont">
        <div className="grid-item">
          <div className="grid-item-inner">
            <img src="./images/steps1.svg" alt="" />
          </div>
          <div className="grid-item-inner-sec">
            <p className="heading">Добијте одобрение за готвење</p>
            <p>
              Регистрирајте се. Прочитајте и пополнете регулативи за безбедност
              на храната и изберете го вашето мени со јадења. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Corporis fugiat at dicta, a
              consectetur facilis harum odio consequatur laborum iure impedit
              similique repellat accusamus quo dignissimos tenetur quod ducimus
              soluta?
            </p>
          </div>
        </div>
        <div className="grid-item">
          <div className="grid-item-inner">
            <img src="./images/steps2.svg" alt="" />
          </div>
          <div className="grid-item-inner-sec">
            <p className="heading">Изберете го вашиот распоред</p>
            <p>
              Регистрирајте се. Прочитајте и пополнете регулативи за безбедност
              на храната и изберете го вашето мени со јадења
            </p>
          </div>
        </div>
        <div className="grid-item">
          <div className="grid-item-inner">
            <img src="./images/steps5.svg" alt="" />
          </div>
          <div className="grid-item-inner-sec">
            <p className="heading">Услужете ги вашите клиенти</p>
            <p>
              Регистрирајте се. Прочитајте и пополнете регулативи за безбедност
              на храната и изберете го вашето мени со јадења
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WidgetStepsGurman;
