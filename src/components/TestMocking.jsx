import React, { useState } from "react";
const Item = ({ name, age, id }) => {
  return (
    <li>
      name: {name} / age: {age} / id: {id}
    </li>
  );
};

const url =
  "https://raw.githubusercontent.com/techoi/raw-data-api/main/simple-api.json?id=3168";

export default function TestMocking() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const handleClick = () => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        if (json.errorMessage) {
          throw new Error(json.errorMessage);
        }
        setData(json.data);
      })
      .catch((error) => {
        setError(`Something Worng: ${error}`);
      });
  };

  const handleClick2 = () => {
    fetch("/login")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(JSON.stringify(response));
      })
      .catch((error) => {
        setError(`Something Worng: ${error}`);
      });
  };
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <button onClick={handleClick}>json데이터가져오기</button>
      <button onClick={handleClick2}>데이터가져오기2(로그인)</button>
      {data && (
        <ul>
          {data.people.map((person) => (
            <Item
              key={`${person.name}-${person.age}`}
              name={person.name}
              age={person.age}
              id={person?.id}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
