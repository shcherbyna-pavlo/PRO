import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import {useState,useEffect} from 'react'

function Photos() {

    const [photos, setPhotos] = useState([]);

    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/photos?albumId=1")
        .then((response) => response.json())
        .then((json) => setPhotos(json));
    }, []);
    console.log(photos);

    return photos.map((photo) => {
        return (
          <tr className="ffff" key={photo.id}>
            <td>{photo.title}</td>
            <td><img src={photo.thumbnailUrl}></img></td>
            <td>
              <Link to={`/`}>Albums</Link>
            </td>
          </tr>
        );
      });
}

export default Photos