import { createBrowserRouter } from "react-router-dom";
import "./App.css";
import Login from "./pages/commonPages/Login";
import Layout from "./pages/superAdmin/Layout";
import Dashboard from "./pages/superAdmin/home/Dashboard";



export const App = createBrowserRouter([
  {
    path: "/",
    element: <Login />, // This will show the login page at the root URL
  },
  {
    path: "admin/",
    element: <Layout />,
    // errorElement: <ErrorPage />,
    children : [
      {
        path : "dashboard",
        element : <Dashboard />
      }
    ]
  }

  // {
  //   path: "*",
  //   element: <NotFound />,
  // },
]);


