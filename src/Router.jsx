import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Profile from "./Profile";
import ErrorPage from "./ErrorPage";

// this is sorta confusing. You're importing a react component RouterProvider.
// you want to export it with some props. 
// the props come from this page.
// So to export it with props you need to enclose it in a new function Router.
// Apparently can't import RouterProvider and re-export it with props.
// Originally, if this was on the Main.jsx page, you can just call RouterProvider with props. Whereaas here since we import/export you can't. On the Main.jsx page you just call <Router /> since it will return the <RouterProvicer router={}/> from here.

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: "profile/",
      element: <Profile />,
    },
    {
      path: "profile/:name",
      element: <Profile />
    }
  ]);

  return <RouterProvider router={router} />;
};


export default Router;
