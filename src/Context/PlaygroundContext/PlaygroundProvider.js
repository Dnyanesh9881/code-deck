import React, { createContext, useEffect, useState } from "react";
import { v4 } from "uuid";

export const PlaygroundContext = createContext();
const initialState = [
  {
    id: v4(),
    title: "DSA",
    files: [
      {
        id: v4(),
        title: "Stack Implementation",
        language: "cpp",
        code: `cout << "Hello World!";`,
      },
      {
        id: v4(),
        title: "Array Implementation",
        language: "Java",
        code: `System.out.println("Hello World")`,
      },
    ],
  },
];
export const PlaygroundProvider = ({ children }) => {
  const [folders, setFolders] = useState(() => {
    const data = JSON.parse(localStorage.getItem("data"));
    if (data) {
      return data;
    }
    return initialState;
  });

  

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(folders));
  }, []);

  return (
    <PlaygroundContext.Provider value={{ folders, setFolders }}>
      {children}
    </PlaygroundContext.Provider>
  );
};
