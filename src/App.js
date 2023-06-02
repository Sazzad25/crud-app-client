import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AddUser from "./component/AddUser";
import Home from "./component/Home";
import Update from "./component/Update";
import Home1 from "./component/Home1";
import Main from "./layout/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home1></Home1>,
        },

        {
          path: "/table",
          element: <Home></Home>,
          loader: () => fetch("https://crud-server-rho.vercel.app/information"),
        },

        {
          path: "/users/add",
          element: <AddUser></AddUser>,
        },

        {
          path: "/update/:id",
          element: <Update></Update>,
          loader: ({ params }) =>
            fetch(`https://crud-server-rho.vercel.app/information/${params.id}`),
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
