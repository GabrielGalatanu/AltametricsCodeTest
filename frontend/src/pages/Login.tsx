import LoginForm from "../components/LoginForm";

import "../styles/Login.scss";

const Login: React.FC = () => {
  return (
    <div className="login__container">
      <LoginForm />
    </div>
  );
};

export default Login;
