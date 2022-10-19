//Import de react router dom pour les routes
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";
import Aromates from "./pages/Aromates";
import Connexion from "./pages/Connexion";
import Astuces from "./pages/Astuces";
import Contact from "./pages/Contact";
import Fruits from "./pages/Fruits";
import Home from "./pages/Home";
import Journal from "./pages/Journal";
import Legumes from "./pages/Legumes";

import "./styles/styles.scss";
import Footer from "./components/Footer";

//Creation de la structure des pages dans un layout avec outlet de react router dom
const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

// Creation de la constante de la création de la route principale
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/journal",
        element: <Journal />,
      },
      {
        path: "/legumes",
        element: <Legumes />,
      },
      {
        path: "/fruits",
        element: <Fruits />,
      },
      {
        path: "/aromates",
        element: <Aromates />,
      },
      {
        path: "/astuces",
        element: <Astuces />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/connexion",
        element: <Connexion />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
