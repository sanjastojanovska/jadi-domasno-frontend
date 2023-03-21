import React, { useCallback, useEffect, useState } from "react";

import CalendarSliderMenu from "../components/calendarSliderMenu/CalendarSliderMenu";
import FiltersMenu, { IFilters } from "../components/filters-menu/FiltersMenu";

export interface MenuItem {
  meal_name: string;
  meal_image: string;
  meal_rating: number;
  meal_price: number;
  meal_description: string;
  meal_prep_time: string;
  cuisine:
    | "Vegan"
    | "Vegetarian"
    | "Traditional"
    | "Chinese"
    | "Mediterranean"
    | "Salads"
    | "Fish"
    | "Italian"
    | "Mexican"
    | "Keto";
  availability: "денес" | "утре" | "нарачка";
  delivery: "delivery" | "pickup";
  chef: string;
  alergeni: string[];
}

const MenuOverview: React.FC = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [menuItemsRendered, setMenuItemsRendered] = useState<MenuItem[]>([]);
  const [areResultsLoading, setResultsLoading] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<{
    filterBy: { [key: string]: string[] };
  }>({ filterBy: { достапност: [], алергени: [], достава: [], рејтинг: [] } });

  useEffect(() => {
    fetch("https://glacier-glib-fox.glitch.me/menu")
      .then((response) => response.json())
      .then((data) => {
        setMenuItems(data);
        setMenuItemsRendered(data);
      })
      .catch((error) => console.error(error));
  }, []);

  const filterResults = useCallback(
    (currentFilters: IFilters) => {
      if (Object.entries(currentFilters).length > 0) {
        console.log(currentFilters);
        const filteredMenu = menuItems.filter((m) => {
          return (
            currentFilters.алергени?.some((a) => m.alergeni.includes(a)) ||
            currentFilters.достапност?.includes(m.availability) ||
            m.meal_rating >= +currentFilters.рејтинг ||
            currentFilters.достава?.includes(m.delivery)
          );
        });

        setMenuItemsRendered(filteredMenu);
      } else {
        setMenuItemsRendered(menuItems);
      }
    },
    [menuItems]
  );

  // na pocetok koga ke dojdes, da se setira vo state momentalniot filter od url gore
  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const filters: any = {};
    const allFilters = ["достапност", "алергени", "рејтинг", "достава"];

    allFilters.forEach((f) => {
      if (query.get(f)) {
        filters[f] = [...query.get(f)?.split(",")!];
      }
    });

    if (Object.keys(filters).length > 0) {
      setSelectedFilters({
        filterBy: filters,
      });
      filterResults(filters);
    }
  }, [filterResults]);

  return (
    <div className="MenuOverview">
      <CalendarSliderMenu />
      <div className="grid">
        <FiltersMenu
          initialFilters={selectedFilters}
          handleSetResultsLoading={setResultsLoading}
          filterResults={filterResults}
        />

        <div className="widget-chefs">
          <div className="grid-parent">
            {areResultsLoading && <p>Loading...</p>}

            {!areResultsLoading && menuItemsRendered.length > 0 ? (
              menuItemsRendered.map((menuItem, i) => {
                return (
                  <div className="grid-item" key={`menu-item-${i}`}>
                    <div className="grid-item-inner">
                      <img src={menuItem.meal_image} alt="" />
                      <div className="content state-alt">
                        <div className="chef-image">
                          <img src={menuItem.meal_image} alt="" />
                        </div>

                        <div className="head-flex">
                          <p className="name">{menuItem.meal_name}</p>
                          <p className="price">{menuItem.meal_price}ден</p>
                        </div>

                        <div className="star-icon">
                          {Array.from(
                            Array(Math.floor(menuItem.meal_rating)).keys()
                          ).map((star, i) => (
                            <i key={`star-${i}`} className="fa fa-star" />
                          ))}

                          {Array.from(
                            Array(5 - Math.floor(menuItem.meal_rating)).keys()
                          ).map((star, i) => (
                            <i key={`star-${i}`} className="far fa-star" />
                          ))}
                        </div>

                        <div className="food-count">
                          <div className="location">
                            <div className="distance">
                              <img src="./images/chefs-house.svg" alt="" />
                              <span>300м</span>
                            </div>
                          </div>
                          <button className="btn">Во кошничка</button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <p>Нема резултати, пробајте различен филтер.</p>
            )}
          </div>
          <button className="btn btn-chefs">Види повеќе</button>
        </div>
      </div>
    </div>
  );
};

export default MenuOverview;
