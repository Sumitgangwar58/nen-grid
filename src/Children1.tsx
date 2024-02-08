import React, { useContext } from "react";
import { data, dummyData } from "./assets/data";
import Card from "./components/CardComponent";
import { DataContext } from "./dataContext/dataContext";

export default function Children1() {
  const { users } = useContext(DataContext);
  return (
    <div className="layout">
      {users.map((item: data) => {
        return (
          <React.Fragment key={item.uniqueId}>
            <Card {...item} />
          </React.Fragment>
        );
      })}
    </div>
  );
}
