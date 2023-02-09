import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Albums() {
  const [albums, setalbums] = useState([]);
  const { userId } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
      .then((response) => response.json())
      .then((json) => setalbums(json));
  }, []);

  return (
    <main className="container">
      <table>
        <thead>
          <tr>
            <td>Id User</td>
            <td>Title</td>
          </tr>
        </thead>
        <tbody>
          {albums.map((album) => (
            <tr key={album.id}>
              <td>{album.userId}</td>
              <td>{album.title}</td>
              <td>
                <Link to={`/photos/${album.id}`}>Photos</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default Albums;
