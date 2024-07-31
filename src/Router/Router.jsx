import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "./../component/Home/Home";
import About from "./../component/About/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Main></Main>
      </div>
    ),
    children: [
      {
        path: "/",
        element: (
          <div>
            <Home></Home>
          </div>
        ),
      },
      {
        path: "/about",
        element: (
          <div>
            <About></About>
          </div>
        ),
      },
    ],
  },
]);
