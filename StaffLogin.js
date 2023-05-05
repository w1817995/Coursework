import React, { useState, useEffect } from "react";
import { Button, Input, LabelText, Page } from "govuk-react";
import $ from "jquery";

function StaffLogin() {
  const [data, setData] = useState({
    email: "",
    pass: ""
  });

  const [staffID, setStaffID] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
    if (name === "nhs") {
      setStaffID(value);
    }
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
  
    var url_login = "http://localhost:4000/StaffLogin.php";
    var UserData = {
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
        console.log("Server response: ", response);
        if (response.status === "success") {
          window.sessionStorage.setItem('staffid', response.StaffID);
          window.sessionStorage.setItem('email', data.email);
          window.sessionStorage.setItem('pass', data.pass);
          setStaffID(response.StaffID);
          window.location.replace(`/StaffHomePage?staffid=${response.StaffID}`);
        } else {
          alert(response.message);
        }
      },      
      error: (error) => console.log(error)
    });
  };
  

  useEffect(() => {
    const staffID = window.sessionStorage.getItem('staffID');
    if (staffID) {
      setStaffID(staffID);
    }
  }, []);

  const renderStaffID = () => {
    if (staffID) {
      return <p>Logged in as Staff ID: {staffID}</p>;
    }
    return null;
  };
  
  return (
    <Page>
      <h1>Staff Login</h1>
      <form onSubmit={handleSubmit}>
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
      {renderStaffID()}
    </Page>
  );
}

export default StaffLogin;
