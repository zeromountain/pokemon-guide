import { createBrowserRouter } from "react-router-dom";
import Detail from "../components/pages/detail";
import Main from "../components/pages/main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/:id",
    element: <Detail />,
  },
]);

export default router;
