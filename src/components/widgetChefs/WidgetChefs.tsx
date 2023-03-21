import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Chef } from "../../pages/ChefsOverview";

const WidgetChefs: React.FC = () => {
  const [randomChefsData, setRandomChefsData] = useState<Chef[]>([]);

  useEffect(() => {
    fetch("https://glacier-glib-fox.glitch.me/chefs")
      .then((response) => response.json())
      .then((data) => {
        const shuffledChefs = data.sort(() => Math.random() - 0.5);

        const randomChefs = shuffledChefs.slice(0, 3);

        setRandomChefsData(randomChefs);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="widget-chefs">
      <h2 className="title main-title">Запознајте ги нашите готвачи</h2>
      <div className="grid-parent">
        {randomChefsData.map((chef) => (
          <div className="grid-item" key={chef.id}>
            <Link to={`/chefs/${chef.id}`} className="grid-item-inner">
              <img src={chef.avatar_image} alt="" />
              <div className="content">
                <div className="head-flex">
                  <p className="name">{chef.fullname}</p>
                  <div className="star-icon">
                    {Array.from(Array(chef?.rating).keys()).map((star, i) => (
                      <i key={`star-${i}`} className="fa fa-star"></i>
                    ))}

                    {Array.from(Array(5 - chef?.rating).keys()).map(
                      (star, i) => (
                        <i key={`star-${i}`} className="far fa-star"></i>
                      )
                    )}
                  </div>
                </div>
                <div className="food-count">
                  <ul>
                    {chef.cuisine.map((cuisine, i) => (
                      <li key={`cuisine-${i}`}>{cuisine}</li>
                    ))}
                  </ul>

                  <div className="location">
                    <div className="distance">
                      <img src="./images/chefs-house.svg" alt="" />
                      <span>{chef.address_distance}м</span>
                    </div>
                    <button className="btn">Дознај повеќе</button>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <Link to={"/chefs"} className="btn btn-chefs">
        Кон готвачи
      </Link>
    </div>
  );
};

export default WidgetChefs;
