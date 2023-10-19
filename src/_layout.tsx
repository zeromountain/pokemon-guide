import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Header from "./components/molecules/header";

const Layout = () => {
  return (
    <Suspense fallback="로딩중">
      <Header />
      <Outlet />
    </Suspense>
  );
};

export default Layout;
