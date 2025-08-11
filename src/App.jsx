import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Academic from "./pages/Academic";

const router = createBrowserRouter([
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
]);

const App = () => {
  return <RouterProvider router={router} />;
}

export default App;
