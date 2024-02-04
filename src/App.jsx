// Import React Router Dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Rootes
import { Root } from "./Routes/Root.jsx";

// Pages
import { Home } from "./Pages/Home.jsx";
import { NotFound } from "./Pages/NotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Root>
        <Home />
      </Root>
    ),
    errorElement: <NotFound />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
