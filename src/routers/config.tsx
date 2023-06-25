import React from "react";
import MainLayout from "../layouts/MainLayout";
import MangeLayout from "../layouts/MangeLayout";
import QuestionLayout from "../layouts/QuestionLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFond";
import List from "../pages/mange/List";
import Trash from "../pages/mange/trash";
import Start from "../pages/mange/start";
import Stat from "../pages/question/Stat";
import Edit from "../pages/question/Edit";

export const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "mange",
        element: <MangeLayout />,
        children: [
          {
            path: "list",
            element: <List />,
          },
          {
            path: "start",
            element: <Start />,
          },
          {
            path: "trash",
            element: <Trash />,
          },
        ],
      },

      {
        path: "*", // 兜底操作，写在最后
        element: <NotFound />,
      },
    ],
  },
  {
    path: "question",
    element: <QuestionLayout />,
    children: [
      {
        path: "edit/:id",
        element: <Edit />,
      },
      {
        path: "stat/:id",
        element: <Stat />,
      },
    ],
  },
];

export enum PATHNAME {
  HOME = "/",
  LOGIN = "/login",
  REGISTER = "/register",
  LIST = "/mange/list",
  START = "/mange/start",
  TRASH = "/mange/trash",
  EDIT = "/question/edit",
  STAT = "/question/stat",
}
