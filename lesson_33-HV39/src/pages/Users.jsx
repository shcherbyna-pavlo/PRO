import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  return (
    <main className="container">
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Username</td>
            <td>Phone</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.phone}</td>
              <td>
                <Link to={`/albums/${user.id}`}>Albums</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default Users;
