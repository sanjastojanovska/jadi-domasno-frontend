import React from "react";

interface Props {
  testimonials: {
    fullname: string;
    description: string;
  }[];
}

const WidgetReviewsSlider: React.FC<Props> = ({ testimonials }) => {
  return (
    <div className="widget-reviews-slider">
      <p className="h3">
        Препораки за јадењата на готвачот од предходни корисници
      </p>
      <div className="grid-parent">
        {testimonials.map((testimonialItem) => (
          <div className="grid-item">
            <div className="grid-item-inner">
              <p className="h6">{testimonialItem.fullname}</p>
              <p>{testimonialItem.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WidgetReviewsSlider;
