import React, { createContext, useState } from "react";
import { data, dummyData } from "../assets/data";

interface DataContextProviderI {
  children: React.ReactNode;
}

type action = "EDIT" | "DELETE";

export const DataContext: React.Context<{
  users: data[];
  dispatch?: (newData: data, action: action) => void;
}> = createContext({
  users: dummyData,
});

const DataContextProvider = ({ children }: DataContextProviderI) => {
  const [users, setUsers] = useState(dummyData);

  const dispatch = (newData: data, action: action) => {
    if (action === "DELETE")
      setUsers((prev) => prev.filter((u) => u.uniqueId !== newData.uniqueId));
    else if (action === "EDIT")
      setUsers((prev) => {
        const newUsers = prev.map((u) => {
          if (u.uniqueId === newData.uniqueId) return newData;
          return u;
        });

        return newUsers;
      });
  };

  return (
    <DataContext.Provider value={{ users, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
