import React, { useState } from "react";

const RegisterForm = () => {
  const [userType, setUserType] = useState("user");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [contractDetail, setContractDetail] = useState("staff nurse");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userType,
        name,
        email,
        phone,
        password,
        contractDetail,
      }),
    });

    const data = await response.json();
    setMessage(data.message);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <form onSubmit={handleSubmit}>
        <h2>Rejestracja</h2>
        <table>
          <tbody>
            <tr>
              <td>User Type:</td>
              <td>
                <select
                  value={userType}
                  onChange={(e) => setUserType(e.target.value)}
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Name:</td>
              <td>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>Phone:</td>
              <td>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>Password:</td>
              <td>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>Contract Detail:</td>
              <td>
                <select
                  value={contractDetail}
                  onChange={(e) => setContractDetail(e.target.value)}
                >
                  <option value="staff nurse">Staff Nurse</option>
                  <option value="out-patient nurse">Out-Patient Nurse</option>
                  <option value="ward nurse">Ward Nurse</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
        <button type="submit">Register</button>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
};

export default RegisterForm;
