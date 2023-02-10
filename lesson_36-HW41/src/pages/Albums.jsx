import React from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch} from "react-redux";
import { fetchAlbums} from "../store/routSlice";

function Albums() {
  const { userId } = useParams();
  const albums = useSelector((state) => state.rout.albums);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAlbums(userId));
  }, [userId]);

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
