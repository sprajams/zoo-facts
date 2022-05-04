import { useState, useEffect } from "react";
import "./style.scss";

function Accordion(props) {
  const { title, detail, handleClick, open } = props;

  return (
    <div>
      <button onClick={handleClick} className="collectionAccordian">
        {title}
      </button>
      {open ? <div>{detail}</div> : null}
    </div>
  );
}

export default Accordion;
