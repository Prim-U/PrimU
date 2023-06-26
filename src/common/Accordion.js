import React, { useState } from "react";
import "./Accordion.css";

function Accordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(-1);
  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);

  };

  return (
    <div>
      {items.map((item, index) => (
        <div key={item.title} className="faq-card">
          <div className="question">
            <div className="faq-card-title">{item.title}</div>
            {/* {item.title} */}
            <button className="faq-button" onClick={() => handleClick(index)}>
              <i class="bi bi-plus"></i> 
            </button>

          </div>
          {/* <div className='card-title'><button onClick={() =>handleClick(index)}>{item.title}<i class="bi bi-plus"></i></button></div> */}
          {index === activeIndex && (
            <div className="faq-card-text">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
}
export default Accordion;
