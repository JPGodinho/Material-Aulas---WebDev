import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../pages/AdminLayout";
import PageNotFound from "../pages/PageNotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AdminLayout />,
    errorElement: <PageNotFound />, 
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);
