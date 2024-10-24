import React from "react";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import Calendar from "./components/calendar";
import Shift from "./components/shift";

const App = () => {
  return (
    <div>
      <h1>Nurse Schedule Plan</h1>
      <RegisterForm />
      <LoginForm />
      <Calendar />
      <Shift />
    </div>
  );
};

export default App;
