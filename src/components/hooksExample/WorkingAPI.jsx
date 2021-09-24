import { useState } from "react";

export const APIFunctions = () => {
  // State created to store fetched users
  const [users, getUsers] = useState([]);

  // Below function will use Browser in built FETCH to hit an API
  // 1st THEN - response is received and converted to JSON
  // 2nd THEN - response is set to state variable USERS through it's function GETUSERS
  // CATCH - if any error happens, it will get captured in this section
  const getUserData = () => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((res) => {
        getUsers(res.data);
      })
      .catch((err) => console.log(`Error ->`, err));
  };

  return (
    <div>
      {/* Function on button click - To hit API to get results */}
      <button onClick={getUserData}>Get Data</button>
      <table>
        <tbody>
          {/* MAP function - To display users while iterating through array */}
          {users.map((x) => (
            <tr key={x.id}>
              <td>{x.id}</td>
              <td>{x.first_name}</td>
              <td>{x.last_name}</td>
              <td>{x.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
