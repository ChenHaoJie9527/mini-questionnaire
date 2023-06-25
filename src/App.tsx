import React from "react";
import { RouterProvider } from "react-router-dom";
import routers from "./routers";

function App() {
  return (
    <div className="">
      <RouterProvider router={routers}></RouterProvider>
    </div>
  );
}

export default App;
