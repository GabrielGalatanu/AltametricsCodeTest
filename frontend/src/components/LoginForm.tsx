import { useState, useEffect, FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { RootState, AppDispatch } from "../redux/store";
import { login } from "../redux/authSlice";

import Textfield from "./Textfield";
import BasicButton from "./BasicButton";

import "../styles/LoginForm.scss";

const LoginForm: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { token, loading, error } = useSelector(
    (state: RootState) => state.auth
  );

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleLoginButton = async () => {
    if (loading) return;

    if (!email || !password) {
      setErrorMessage("Please fill in all fields");
      return;
    }

    dispatch(login({ email, password }));
  };

  useEffect(() => {
    if (token) navigate("/");
  }, [token, navigate]);

  useEffect(() => {
    if (error) setErrorMessage(error.message);
  }, [error]);

  return (
    <div className="login-form__container">
      <p className="login-text">Login</p>
      <div className="email-and-password-container">
        <Textfield
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Textfield
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <div className="login-button-container">
        <BasicButton label="Login" onPress={handleLoginButton} />
      </div>
    </div>
  );
};

export default LoginForm;
