import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import FiltersChefs, {
  IFiltersChefs,
} from "../components/filters-chefs/FiltersChefs";

export interface Chef {
  id: string;
  fullname: string;
  avatar_image: string;
  cuisine: string[];
  address: {
    street: string;
    street_number: string;
    city: string;
    postal_code: string;
  };
  address_distance: number;
  rating: number;
  testimonials: {
    fullname: string;
    description: string;
  }[];
}

const ChefsOverview: React.FC = () => {
  const [chefs, setChefs] = useState<Chef[]>([]);
  const [chefsRendered, setChefsRendered] = useState<Chef[]>([]);
  const [areResultsLoading, setResultsLoading] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<{
    filterBy: { [key: string]: string[] };
  }>({ filterBy: { рејтинг: [], кујна: [] } });

  useEffect(() => {
    fetch("https://glacier-glib-fox.glitch.me/chefs")
      .then((response) => response.json())
      .then((data) => {
        setChefs(data);
        setChefsRendered(data);
      })
      .catch((error) => console.error(error));
  }, []);

  const filterResults = useCallback(
    (currentFilters: IFiltersChefs) => {
      if (Object.entries(currentFilters).length > 0) {
        const filteredChefs = chefs.filter((m) => {
          return (
            currentFilters.кујна?.some((a) => m.cuisine.includes(a)) ||
            m.rating >= +currentFilters.рејтинг
          );
        });

        setChefsRendered(filteredChefs);
      } else {
        setChefsRendered(chefs);
      }
    },
    [chefs]
  );

  // na pocetok koga ke dojdes, da se setira vo state momentalniot filter od url gore
  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const filters: any = {};
    const allFilters = ["рејтинг", "кујна"];

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

  if (Object.keys(chefs).length === 0) {
    return null;
  }

  return (
    <div className="ChefsOverview">
      <div className="content-section">
        <h2 className="main-title">Нашите готвачи</h2>
        <p>Јади Домашно поврзува талентирани готвачи со локални клиенти.</p>
        <p>
          Ние веруваме во обезбедувањето на шефовите во нашата заедница -
          поединци кои отсекогаш сонувале да градат сопствен бизнис со храна -
          можност да заработат значаен приход правејќи го она што го сакаат!
          Ние, исто така, веруваме дека секој човек треба да има пристап до
          здрав, домашен оброк по прифатлива цена. Градење заедница посветена на
          економско зајакнување и културна инклузивност - затоа почнавме да го
          градиме нашето семејство.
        </p>
      </div>

      <div className="grid">
        <FiltersChefs
          initialFilters={selectedFilters}
          handleSetResultsLoading={setResultsLoading}
          filterResults={filterResults}
        />

        <div className="widget-chefs">
          <div className="grid-parent">
            {areResultsLoading && <p>Loading...</p>}

            {!areResultsLoading && chefsRendered.length > 0 ? (
              chefsRendered.map((chef) => (
                <div className="grid-item" key={chef.id}>
                  <Link to={`/chefs/${chef.id}`} className="grid-item-inner">
                    <img src={chef.avatar_image} alt="" />
                    <div className="content">
                      <div className="head-flex">
                        <p>{chef.fullname}</p>
                        <div className="star-icon">
                          {Array.from(
                            Array(Math.floor(chef.rating)).keys()
                          ).map((star, i) => (
                            <i key={`star-${i}`} className="fa fa-star" />
                          ))}

                          {Array.from(
                            Array(5 - Math.floor(chef.rating)).keys()
                          ).map((star, i) => (
                            <i key={`star-${i}`} className="far fa-star" />
                          ))}
                        </div>
                      </div>
                      <div className="food-count">
                        <ul>
                          {chef.cuisine.map((c, i) => (
                            <li key={`chef-cuisine-${i}`}>{c}</li>
                          ))}
                        </ul>

                        <div className="location">
                          <div className="distance">
                            <img src="./images/chefs-house.svg" alt="" />
                            <span>{chef.address_distance}м</span>
                          </div>
                          <span className="btn">Дознај повеќе</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))
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

export default ChefsOverview;
