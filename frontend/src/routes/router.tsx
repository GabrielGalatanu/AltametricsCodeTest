import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import { useSelector } from "react-redux";

import { RootState } from "../redux/store";

import NavBar from "../components/NavBar";
import Login from "../pages/Login";
import Home from "../pages/Home";

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<PrivateRoute />}>
          <Route element={<MainLayout />}>
            <Route index element={<Home />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const PrivateRoute: React.FC = () => {
  const { isLoggedIn } = useSelector((state: RootState) => state.auth);

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

const MainLayout: React.FC = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default AppRouter;
