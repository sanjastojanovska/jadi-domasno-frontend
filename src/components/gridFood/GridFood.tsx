import React from "react";
import { MenuItem } from "../../pages/MenuOverview";

interface Props {
  foodMenu: MenuItem[];
}

const GridFood: React.FC<Props> = ({ foodMenu }) => {
   // Shuffle the chefs array
   const shuffledMenus = foodMenu.sort(() => Math.random() - 0.5);

   // Return the first three shuffled chefs
   const randomMenus = shuffledMenus.slice(0, 6);

  return (
    <div className="grid-food">
      <div className="h3">Достапни јадења за недела</div>
      <div className="grid-parent">
        {randomMenus.map((foodItem) => (
          <div className="grid-item">
            <div className="grid-item-inner">
              <div>
                <img src={foodItem.meal_image} alt="" />
              </div>
              <div className="inner-content">
                <div className="name-price">
                  <div>
                    <p>{foodItem.meal_name}</p>
                    <div className="star-icons">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>

                      {/* {Array.from(Array(foodItem.meal_rating).keys()).map((star, i) => (
                        <i key={`star-${i}`} className="fa fa-star"></i>
                      ))}

                      {Array.from(Array(5 - foodItem.meal_rating).keys()).map((star, i) => (
                        <i key={`star-${i}`} className="far fa-star"></i>
                      ))} */}
                    </div>
                  </div>
                  <div>
                    <p className="price">{foodItem.meal_price} ден.</p>
                  </div>
                </div>
                <div className="time-cont">
                  <p>{foodItem.meal_description}</p>
                  <i className="fa-regular fa-clock fa-lg"></i>
                  <span> {foodItem.meal_prep_time} min</span>
                </div>
                <div className="inner-btn">
                  <button className="btn">Додај во кошница</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridFood;
