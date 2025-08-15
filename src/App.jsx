import { createHashRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Academic from "./pages/Academic";
import { LanguageProvider } from "./context/LanguageContext";
import Layout from "./components/layout/Layout";
import { SidebarProvider } from "./context/SidebarContext";

import { useState, useEffect } from "react";
import Loader from "./components/common/Loader";

const router = createHashRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home />, },
      { path: "/about", element: <About />, },
      { path: "/work", element: <Work />, },
      { path: "/academic", element: <Academic />, },
    ]
  }
]);

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <LanguageProvider>
      <SidebarProvider>
        {loading ? <Loader /> : <RouterProvider router={router} />}
      </SidebarProvider>
    </LanguageProvider>
  );
}

export default App;
