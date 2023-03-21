import React, { useEffect, useState } from "react";
import WidgetStories from "../components/widgetStories/WidgetStories";
import WidgetCriteria from "../components/widgetCriteria/WidgetCriteria";
import WidgetSteps from "../components/widgetSteps/WidgetSteps";
import WidgetReviews from "../components/widgetReviews/WidgetReviews";
import WidgetRegister from "../components/widgetRegister/WidgetRegister";
import WidgetFaq from "../components/widgetFaq/WidgetFaq";
import WidgetStepsGurman from "../components/widgetStepsGurman/WidgetStepsGurman";
import Toggle from "../components/toggle/Toggle";

export type ToggleType = "chef" | "gurman";

const HowItWorks: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<ToggleType>("gurman");

  // na pocetok koga ke dojdes, da se setira vo state momentalniot filter od url gore
  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const filter = query.get("filter");
    if (filter) {
      setSelectedFilter(filter as ToggleType);
    }
  }, []);

  const handleFilterToggle = (currentFilter: ToggleType) => {
    setSelectedFilter(currentFilter);

    const urlParams = new URLSearchParams();
    urlParams.set("filter", currentFilter);
    const newUrl = window.location.pathname + "?" + urlParams.toString();
    window.history.pushState({ path: newUrl }, "", newUrl);
  };

  return (
    <div>
      <Toggle handleFilterToggle={handleFilterToggle} />

      {selectedFilter === "chef" ? (
        <>
          <WidgetStories />
          <WidgetCriteria />
          <WidgetSteps />
          <WidgetReviews />
          <WidgetRegister />
          <WidgetFaq />
        </>
      ) : (
        <>
          <WidgetStories />
          <WidgetRegister />
          <WidgetStepsGurman />
          <WidgetFaq />
        </>
      )}
    </div>
  );
};

export default HowItWorks;
