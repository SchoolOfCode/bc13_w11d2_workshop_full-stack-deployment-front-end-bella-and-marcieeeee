//This is the component which shows each individual list item.

import React from "react";
import "./listItem.css";

function ListItem({ name, completed, tickItem }) {
  return (
    <li
      data-testid="list-item"
      className={completed ? "tickedItem" : "untickedItem"}
      onClick={tickItem}
    >
      {name}
    </li>
  );
}

export default ListItem;
