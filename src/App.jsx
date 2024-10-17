import React from "react";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";

const App = () => {
  return (
    <div>
      <h1>Nurse Schedule Plan</h1>
      <RegisterForm />
      <LoginForm />
    </div>
  );
};

export default App;
