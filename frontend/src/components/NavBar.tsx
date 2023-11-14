import { FC, MouseEvent } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";

import { AppDispatch } from "../redux/store";
import { logout } from "../redux/authSlice";

import "../styles/NavBar.scss";

const NavBar: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const handleLogout = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="nav-bar_container">
      <Button className="logout-button" onClick={handleLogout}>
        <p>Logout</p>
      </Button>
    </div>
  );
};

export default NavBar;
