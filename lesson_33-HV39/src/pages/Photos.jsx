import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Photos() {
  const [photos, setPhotos] = useState([]);
  const { albumId } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      .then((response) => response.json())
      .then((json) => setPhotos(json));
  }, []);

  return (
    <main className="container">
      <table>
        <thead>
          <tr>
            <td>Id Album</td>
            <td>Title</td>
            <td>Photo</td>
          </tr>
        </thead>
        <tbody>
          {photos.map((photo) => (
            <tr key={photo.id}>
              <td>{photo.albumId}</td>
              <td>{photo.title}</td>
              <td>
                <img src={photo.thumbnailUrl}></img>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default Photos;
