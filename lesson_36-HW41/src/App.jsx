import React from "react";
import { Routes, Route } from "react-router-dom";
import Users from "./pages/Users";
import Albums from "./pages/Albums";
import Photos from "./pages/Photos";
import Notfoundpage from "./pages/Notfoundpage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Users />}></Route>
        <Route path="/albums/:userId" element={<Albums />}></Route>
        <Route path="/photos/:albumId" element={<Photos />}></Route>
        <Route path="/*" element={<Notfoundpage />}></Route>
      </Routes>
    </div>
  );
}

export default App;