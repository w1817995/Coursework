import React, { useState } from "react";
import { Button, Input, LabelText, Page } from "govuk-react";
import { Link } from "react-router-dom";
import $ from "jquery";

function Login() {
  const [data, setData] = useState({
    nhs: "",
    email: "",
    pass: ""
  });

  const handleInputChange = event => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    var url_login = "http://localhost:4000/Login.php";
    var UserData = {
      nhs: data.nhs,
      email: data.email,
      pass: data.pass
    };

    $.ajax({
      url: url_login,
      method: "POST",
      data: JSON.stringify(UserData),
      contentType: 'application/json',
      dataType: 'json',
      success: (response) => {
        console.log("Server response: ",response);
        window.location.replace("/HomePage");
      },
      error: (error) => console.log(error)
    });
  };
  
  return (
    <Page>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <LabelText>NHS Number:</LabelText>
        <Input
          name="nhs"
          value={data.nhs}
          onChange={handleInputChange}
        />

        <LabelText>Email:</LabelText>
        <Input
          type="email"
          name="email"
          value={data.email}
          onChange={handleInputChange}
        />

        <LabelText>Password:</LabelText>
        <Input
          type="password"
          name="pass"
          value={data.pass}
          onChange={handleInputChange}
        />

        <Button type="submit">Login</Button>
      </form>

      <p>
        <Link to="/Register">Don't have an account? Register here</Link>
      </p>
    </Page>
  );
}

export default Login;