import React from "react";
import FaqItem from "./FaqItem";

export interface FaqItemInt {
  question: string;
  answer: string;
}

const WidgetFaq: React.FC = () => {
  const faqArr = [
    {
      question: "Како да се регистрирам?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra lorem eu dolor rhoncus, at scelerisque ligula gravida. Sed porta id mi sit amet convallis. Etiam iaculis massa sit amet lacus blandit sodales. Nulla ultrices velit a diam placerat congue. Pellentesque iaculis, ipsum quis eleifend dapibus, est dui eleifend ante, quis fermentum mi ligula quis nisl. Ut et ex dui. Integer id venenatis quam.",
    },
    {
      question: "Како да променам коментар?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis qui officiis sequi a aut quo odit amet cum consequatur est quidem, quisquam unde dolorum sint similique quis laboriosam assumenda nostrum?",
    },
    {
      question: "Како да променам рецепт?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis qui officiis sequi a aut quo odit amet cum consequatur est quidem, quisquam unde dolorum sint similique quis laboriosam assumenda nostrum?",
    },
  ];

  return (
    <div className="widget-faq">
      <div className="img-box">
        <img src="/images/reviews-chef1.svg" alt="" />
      </div>
      <div className="content-box">
        <h2>Најчесто поставувани прашања</h2>
        <div className="faqs">
          {faqArr.map((faq, index) => (
            <FaqItem faq={faq} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WidgetFaq;
