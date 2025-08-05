import { createBrowserRouter } from "react-router-dom";
import "./App.css";

// Common Pages
import Login from "./pages/commonPages/Login";

// Super Admin Pages
import Layout from "./pages/superAdmin/Layout";
import Dashboard from "./components/dashboard/Dashboard";
import GroupAdmins from "./components/dashboard/Group-admins";
import Institutions from "./components/dashboard/Institutions";
import Subscriptions from "./components/dashboard/Subscriptions";
import Analytics from "./components/dashboard/Analytics";
import Settings from "./components/dashboard/Settings";

// Optional: Not Found Page
// import NotFound from "./pages/commonPages/NotFound";

export const App = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "admin/",
    element: <Layout />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
         path : "user-management",
         children : [
           {
        path: "group-admins",
        element: <GroupAdmins />,
      },
         ]
      },
      {
        path : "institutions",
        children : [
           {
          path: "all-institutions",
          element: <Institutions />,
        },
        ]
      },
      {
       path : "subscriptions",
       children : [
          {
        path: "active-plans",
        element: <Subscriptions />,
      },
       ]
      },
      {
        path: "analytics",
       children : [
         {
          path: "analytics",
           element: <Analytics />,
         }
       ]
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },

  // Optional: wildcard route for 404
  // {
  //   path: "*",
  //   element: <NotFound />,
  // },
]);
