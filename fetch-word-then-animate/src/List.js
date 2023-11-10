import React, { useState, useEffect } from "react";

export default function List({ listItems }) {
  const [list, setList] = useState("");

  useEffect(() => {
    let currentList = "";

    function concatenateList() {
      const TIMERINTERVAL = 175;
      const timer = setTimeout(() => {
        if (currentList.length < listItems.length) {
          currentList = currentList + listItems.charAt(currentList.length);
          setList(currentList);
          concatenateList();
        }
        return () => clearInterval(timer);
      }, TIMERINTERVAL);
    }
    concatenateList();
  }, [listItems]);

  return (
    <div>
      <ul>
        {list.split("").map((listItem, index) => {
          return <li key={index}>{listItem}</li>;
        })}
      </ul>
    </div>
  );
}
