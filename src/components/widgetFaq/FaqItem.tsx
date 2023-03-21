import React, { useState } from "react";
import { FaqItemInt } from "./WidgetFaq";

interface Props {
  faq: FaqItemInt;
}

const FaqItem: React.FC<Props> = ({ faq }) => {
  const [faqOpen, setFaqOpen] = useState(false);

  return (
    <div
      className={"faq " + (faqOpen === true ? "open" : "")}
      onClick={() => setFaqOpen(!faqOpen)}
    >
      <div className="faq-question">
        {faq.question}{" "}
        <i
          className={`fas ${
            faqOpen === true ? "fa-arrow-circle-up" : "fa-arrow-circle-down "
          }`}
        ></i>
      </div>
      <div className="faq-answer">{faq.answer}</div>
    </div>
  );
};

export default FaqItem;
