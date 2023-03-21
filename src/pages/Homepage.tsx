import React from 'react';
import IntroBanner from '../components/introBanner/IntroBanner';
import WidgetValues from '../components/widgetValues/WidgetValues';
import WidgetUsp from '../components/widgetUsp/WidgetUsp';
import WidgetReviews from '../components/widgetReviews/WidgetReviews';
import WidgetCta from '../components/widgetCta/WidgetCta';
import WidgetChefs from '../components/widgetChefs/WidgetChefs';
import HowItWorks from './HowItWorks';

interface Props {}

const Homepage: React.FC<Props> = (props) => {
  return (
    <div className="Homepage">
      <IntroBanner/>
      <WidgetValues/>
      <WidgetChefs/>
      <WidgetUsp/>
      <WidgetReviews/>
      <WidgetCta/>
    </div>
  );
};

export default Homepage;