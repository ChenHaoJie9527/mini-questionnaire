import React from "react";
import { RouterProvider } from "react-router-dom";
import routers from "./routers";

function App() {
  return (
    <div className="container">
      <RouterProvider router={routers}></RouterProvider>
    </div>
  );
}

export default App;
