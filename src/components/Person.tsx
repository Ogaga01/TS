import React, { FC } from "react";
import { User } from "../types/type";

interface Props {
    user: User
}

const Person: FC<Props> = ({user}) => {
  return (
    <div>
      <h1>{user.name}</h1>
      <h1>{user.age}</h1>
      <h1>{user.email}</h1>
    </div>
  );
};

export default Person;
