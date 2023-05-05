import React, { useState } from "react";
import { Button, Input, LabelText, Page,Footer } from "govuk-react";
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
        window.sessionStorage.setItem('nhs',data.nhs);
        window.sessionStorage.setItem('email',data.email);
        window.sessionStorage.setItem('pass',data.pass);
        window.location.replace(`/HomePage?nhs=${data.nhs}`);
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
        <br/>
        <br/>
        <Button type="submit">Login</Button>
      </form>

      <p>
      <Link to="/StaffLogin">Login as a staff</Link>
      <br/>
      <br/>
        <Link to="/Register">Don't have an account? Register here</Link>
      </p>
      <div className="footer">
        <Footer
          copyright={{
            image: {
              height: 102,
              src: 'https://ministryofinjustice.co.uk/wp-content/uploads/2022/03/Crown-Copyright.jpg',
              width: 125
            },
            link: 'https://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/uk-government-licensing-framework/crown-copyright/',
          }}
        />
      </div>
    </Page>
  );
}

export default Login;