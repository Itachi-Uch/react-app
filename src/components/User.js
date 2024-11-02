import { useState } from "react";

const User = (props) => {
  let [count, setcount] = useState(0);
  const [count2] = useState(1);
  const { name, location } = props;
  return (
    <div className="user-card">
      <button
        onClick={() => {
          ++count;
          setcount(count);
        }}
      >
        count: {count}
      </button>
      <h1>count2: {count2}</h1>

      <h3>Name: {name}</h3>
      <h3> Location: {location}</h3>
    </div>
  );
};
export default User;
