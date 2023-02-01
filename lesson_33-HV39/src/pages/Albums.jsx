import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import {useState,useEffect} from 'react'

function Albums({id}) {

    const [albums, setalbums] = useState([]);

    useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/albums?userId=${id}`)
        .then((response) => response.json())
        .then((json) => setalbums(json));
    }, []);
    console.log(id);

    return albums.map((album) => {
        return (
          <tr className="ffff" key={album.id}>
            <td>{album.title}</td>
            <td>
              <Link to={`/photos?albumId=${album.id}`}>Albums</Link>
            </td>

          </tr>
        );
      });
}

export default Albums