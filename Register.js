//Muhammad Saad Faisal and Elis Morina helped with the rest of the pages
//Fareed Khan Mohamed Rafi did lines 8-35
import React, { useState } from "react";
import { Button, LabelText, Page, Select,Input,Link,Footer,H1 } from "govuk-react";
import $ from "jquery";

function SignUp() {
  const [data, setData] = useState({
    fname:"",
    sname:"",
    dates:"",
    gender:"",
    post:"",
    email:"",
    pass:""
  });

  const handleInputChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
    console.log(data);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    $.ajax({
      url: "http://localhost:4000/SignUp.php",
      method: "POST",
      data: data,
      success: (response) => {
        console.log("Server response: ",response);
        window.location.replace("/Confirmation");
      },
      error: (error) => console.log(error)
    });
  };

  return (
    <Page>
      <H1>Registration</H1>
      <form onSubmit={handleSubmit}>
        <LabelText>First Name:</LabelText>
        <div className="input">
        <Input
          name="fname"
          value={data.fname}
          onChange={handleInputChange}
          required
        />
        </div>
       <br/>
        <LabelText>Last Name:</LabelText>
        <div className="input">
        <Input
          name="sname"
          value={data.sname}
          onChange={handleInputChange}
          required
        />
        </div>
       <br/>
        <LabelText>Gender:</LabelText>
        
        <Select  
    input={{
      name: 'gender',
      onChange: handleInputChange,
      value: data.gender
    }}
    required>
    <option value="">Select Gender</option>
    <option value="male">M</option>
    <option value="female">F</option>
  </Select>
       <br/>
       <LabelText>PostCode:</LabelText>
       <div className="input">
        <Input
          name="post"
          value={data.post}
          onChange={handleInputChange}
          required
        />
        </div>
        <br/>
        <LabelText>Date of Birth:</LabelText>
        <div className="input">
        <Input
          name="dates"
          value={data.dates}
          type="date"
          onChange={handleInputChange}
          required
        />
        </div>
       <br/>
        <LabelText>Email:</LabelText>
        <div className="input">
        <Input
          type="email"
          name="email"
          value={data.email}
          onChange={handleInputChange}
          required
        />
        </div>
        <br/>
        <LabelText>Password:</LabelText>
        <div className="input">
        <Input
          type="password"
          name="pass"
          value={data.pass}
          onChange={handleInputChange}
          required
        />
        </div>
       <br/>
       <LabelText>Confirm Password:</LabelText>
       <div className="input">
        <Input
          type="password"
          name="conf_pass"
          onChange={handleInputChange}
          required
        />
        </div>
        <br/>
        <Button type="submit">Register</Button>
        <br/>
        <Link href="Login">Already have an account? Login</Link>
      </form>
      <br/>
      <div className="footer_2">
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

export default SignUp;