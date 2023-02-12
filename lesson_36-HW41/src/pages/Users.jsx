import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch} from "react-redux";
import { fetchUsers } from "../store/rootSlice";

function Users() {
  const users = useSelector((state) => state.structure.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
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
