import { createBrowserRouter } from "react-router-dom";
import "./App.css";

// Common Pages
import Login from "./pages/commonPages/Login";

// Super Admin Pages
import Layout from "./pages/superAdmin/Layout";
import Dashboard from "./pages/superAdmin/dashboard/dashboard/Dashboard";
import GroupAdmins from "./pages/superAdmin/dashboard/userManagement/Group-admins";
import Institutions from "./pages/superAdmin/dashboard/institutions/Institutions";
import Subscriptions from "./pages/superAdmin/dashboard/subscriptions/Subscriptions";
import Analytics from "./pages/superAdmin/dashboard/analytics/Analytics";
import Settings from "./pages/superAdmin/dashboard/settings/Settings";
import NotificationPage from "./pages/superAdmin/dashboard/notifications/NotificationPage";
import Support from "./pages/superAdmin/dashboard/support/Support";
import RevenueReports from "./pages/superAdmin/dashboard/analytics/Revenue-reports";
import GrowthMetrics from "./pages/superAdmin/dashboard/analytics/Growth-metrics";
import BillingHistory from "./pages/superAdmin/dashboard/subscriptions/Billing-history";
import PaymentMethods from "./pages/superAdmin/dashboard/subscriptions/PaymentMethods";
import Colleges from "./pages/superAdmin/dashboard/institutions/Colleges";
import Schools from "./pages/superAdmin/dashboard/institutions/Schools";
import AllUsers from "./pages/superAdmin/dashboard/userManagement/AllUsers";
import InstitutionAdmins from "./pages/superAdmin/dashboard/userManagement/InstitutionAdmins";
import Universities from "./pages/superAdmin/dashboard/institutions/Universities";
import AddGroupAdminModal from "./components/dashboard/usermManagement/addGroupAdminModal";
import EditGroupAdminModal from "./components/dashboard/usermManagement/editGroupAdminModal";

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
        children: [
          {
            index: true,
            element: <GroupAdmins />,
          },
          {
            path: "add-group-admin-modal",
            element: <AddGroupAdminModal />,
          },
          {
            path: "edit-group-admin-modal",
            element: <EditGroupAdminModal />,
          },
         
        ],
      },
      {
        path : "all-users",
        element : <AllUsers/>
      },
      {
        path : "institution-admins",
        element : <InstitutionAdmins/>
      }
         ]
      },
      {
        path : "institutions",
        children : [
           {
          path: "all-institutions",
          element: <Institutions />,
        },
        {
          path : "colleges",
          element : <Colleges/>
        },
        {
          path : "schools",
          element : <Schools/>
        },
        {
          path : "universities",
          element : <Universities/>
        }
        ]
      },
      {
       path : "subscriptions",
       children : [
          {
        path: "active-plans",
        element: <Subscriptions />,
      },
      {
        path : "billing-history",
        element : <BillingHistory/>
      },
      {
        path : "payment-methods",
        element : <PaymentMethods/>
      }
       ]
      },
      {
        path: "analytics",
       children : [
         {
          path: "usage-statistics",
           element: <Analytics />,
         },
         {
          path : "revenue-reports",
          element : <RevenueReports/>
         },
         {
          path : "growth-metrics",
          element : <GrowthMetrics/>
         }
       ]
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "notifications",
        element: <NotificationPage/>,
      },
      {
        path : "support",
        element :  <Support/>
      }
    ],
  },

  // Optional: wildcard route for 404
  // {
  //   path: "*",
  //   element: <NotFound />,
  // },
]);
