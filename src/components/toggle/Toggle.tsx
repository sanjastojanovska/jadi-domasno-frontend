import React from "react";
import { ToggleType } from "../../pages/HowItWorks";

interface Props {
  handleFilterToggle: (currentFilter: ToggleType) => void;
}

const Toggle: React.FC<Props> = ({ handleFilterToggle }) => {
  return (
    <div className="toggle">
      <div className="grid-parent">
        <div className="grid-item">
          <img src="./images/jadidomashnologo.svg" alt="" />
          <div className="grid-inner-item">
            <h2>Како функционира</h2>
          </div>
          <div className="grid-inner-item">
            <div className="switch-button">
              <input className="switch-button-checkbox" type="checkbox" onChange={(e) => {
                e.target.checked ? handleFilterToggle("gurman") : handleFilterToggle("chef")
              }} />
              <label className="switch-button-label" htmlFor="">
                <span className="switch-button-label-span">Готвач</span>
              </label>
            </div>
          </div>
        </div>
        <div className="content">
          Јади домашно е платформа која ја спојува љубовта кон храната и
          готвењето на едно место! Тука може да најдете готвачи во близина на
          вашата локација и да нарачате вкусна, топла и домашна храна. Ние сме
          платформа која сака да ги поттикне соседите да ја споделат љубовта кон
          храната и да дадеме можност на сите љубители на готвењето да ја
          покажат својата умешност и да ја споделат со нивната околина. Ако
          готвењето нешто што те прави среќен и сакаш да си дел од нашата
          приказна. Ние ти ја даваме сета слобода да се изразиш, но и да
          заработиш.
        </div>
      </div>
    </div>
  );
};

export default Toggle;
