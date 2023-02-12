import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch} from "react-redux";
import { fetchPhotos} from "../store/rootSlice";

function Photos() {
  const { albumId } = useParams();
  const photos = useSelector((state) => state.structure.photos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPhotos(albumId));
  }, [albumId]);

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
