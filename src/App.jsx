import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Academic from "./pages/Academic";
import { LanguageProvider } from "./context/LanguageContext";
import Layout from "./components/layout/Layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/work",
        element: <Work />,
      },
      {
        path: "/academic",
        element: <Academic />,
      },
    ]
  }
]);

const App = () => {
  return (
    <LanguageProvider>
      <RouterProvider
        router={router}
        fallbackElement={<div>Cargando...</div>} // Aca puede ir un Spinner
      />
    </LanguageProvider>
  );
}

export default App;
