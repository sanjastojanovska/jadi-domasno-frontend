import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import WidgetReviewsSlider from "../components/widgetReviewsSlider/WidgetReviewsSlider";
import Details from "../components/details/Details";
import GridFood from "../components/gridFood/GridFood";
import CalendarSliderChef from "../components/calendarSliderChef/CalendarSliderChef";
import { Chef } from "./ChefsOverview";
import { MenuItem } from "./MenuOverview";

const ChefDetail: React.FC = () => {
  const { id } = useParams();
  const [currentChef, setCurrentChef] = useState<Chef>({} as Chef);
  const [foodMenus, setFoodMenus] = useState<MenuItem[]>([]);

  useEffect(() => {
    fetch(`https://glacier-glib-fox.glitch.me/chefs/${id}`)
      .then((response) => response.json())
      .then((data) => setCurrentChef(data))
      .catch((error) => console.error(error));
  }, [id]);

  useEffect(() => {
    fetch(`https://glacier-glib-fox.glitch.me/menu`)
      .then((response) => response.json())
      .then((data) => setFoodMenus(data))
      .catch((error) => console.error(error));
  }, [id]);

  if (Object.keys(currentChef).length === 0) {
    return null;
  }

  return (
    <div className="ChefDetail">
      <div className="image-heading">
        <img src="/images/image-heading.jpg" alt="" />
      </div>
      <Details chefDetail={currentChef} />
      <CalendarSliderChef />
      <GridFood foodMenu={foodMenus} />
      <WidgetReviewsSlider testimonials={currentChef.testimonials} />
    </div>
  );
};

export default ChefDetail;
