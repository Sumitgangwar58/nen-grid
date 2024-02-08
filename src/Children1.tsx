import React from "react";
import { data, dummyData } from "./assets/data";
import Card from "./components/CardComponent";

export default function Children1() {
  console.log(dummyData);
  return (
    <div className="layout">
      {dummyData.map((item: data) => {
        return (
          <React.Fragment key={item.uniqueId}>
            <Card {...item} />
          </React.Fragment>
        );
      })}
    </div>
  );
}
