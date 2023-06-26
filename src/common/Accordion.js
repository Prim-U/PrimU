import React, { useState } from "react";
import "./Accordion.css";

function Accordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <div className="accordion-flex">
      {items.map((item, index) => (
        <div key={item.title} className="faq-card">
          <div className="question">
            <div className="faq-card-title">{item.title}</div>
            <button className="faq-button" onClick={() => handleClick(index)}>
              {index === activeIndex ? (
                <i className="bi bi-dash" />
              ) : (
                <i className="bi bi-plus" />
              )}
            </button>
          </div>
          {index === activeIndex && (
            <div className="faq-card-text">{item.content}</div>
          )}
        </div>

      ))}
    </div>
  );
}
export default Accordion;
