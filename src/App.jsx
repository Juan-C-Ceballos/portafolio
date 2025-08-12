import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Academic from "./pages/Academic";
import { LanguageProvider } from "./context/LanguageContext";
import Layout from "./components/layout/Layout";
import { SidebarProvider } from "./context/SidebarContext";

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
      <SidebarProvider>
        <RouterProvider
          router={router}
          fallbackElement={<div>Cargando...</div>} // Aca puede ir un Spinner
        />
      </SidebarProvider>
    </LanguageProvider>
  );
}

export default App;
