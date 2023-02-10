import {createSlice} from '@reduxjs/toolkit';

export const fetchUsers = () => {
    return async (dispatch, getState) => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users`
      );
      const data = await response.json();

      dispatch(setUsers(data));
    };
  };

export const fetchAlbums = (userId) => {
    return async (dispatch, getState) => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/albums?userId=${userId}`
      );
      const data = await response.json();

      dispatch(setAlbums(data));
    };
  };

export const fetchPhotos = (albumId) => {
    return async (dispatch, getState) => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`
      );
      const data = await response.json();

      dispatch(setPhotos(data));
    };
  };

const routSlice = createSlice({
    name: 'rout',
    initialState:{
        users: [],
        albums: [],
        photos: []
    },

    reducers: {
        setUsers(state, action) {
            state.users = action.payload;
        },
        setAlbums(state, action) {
            state.albums = action.payload;
        },
        setPhotos(state, action) {
            state.photos = action.payload;
        }
    },
});

const {setUsers, setAlbums, setPhotos} = routSlice.actions;

export default routSlice.reducer;