import React, { FC } from "react";
import "./App.css";
import Person from "./components/Person";
import { User } from "./types/type";

const App: FC = () => {
  const person: User = {name: "O.G", age: 25, email: "iyaraoagaga"}
  return <div className="App">
    <Person user={person}/>
  </div>;
};

export default App;
