import Layout from "../_layout";
import Detail from "../components/pages/detail";
import Main from "../components/pages/main";

const router = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/:id",
        element: <Detail />,
      },
    ],
  },
];

export default router;
