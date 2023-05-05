//Fareed Khan Mohamed Rafi did this whole page
import React, { useEffect, useState } from 'react';
import { Button, Fieldset,Page,H1, Label,Footer,Input } from 'govuk-react';
import $ from 'jquery';

function BookAppointments(props) {
  const [data, setData] = useState({
    dates:"",
    timer:""
  });
  const[auth,setAuth] = useState('');
  const[auth2,setAuth2] = useState('');
  

  const handleInputChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
    console.log(data);
  };


  useEffect(() =>{
    var auth = sessionStorage.getItem('nhs');
    var auth_2 = sessionStorage.getItem('staffid');
    setAuth(auth);
    setAuth2(auth_2);
    // Fetch doctor names from the database
    $.ajax({
      url: 'http://localhost:4000/GetDoctors.php',
      method: "GET",
      dataType:'json',
      success: (response) => {
        console.log("Server response: ",response);
      },
      error: (error) => console.log(error)
    });
  },[auth]);

  const handleSubmit = (event) => {
    event.preventDefault();
    $.ajax({
      url: `http://localhost:4000/Appointment.php?nhs=${auth}&staffid=${auth2}`,
      method: "POST",
      data: data,
      success: (response) => {
        console.log("Server response: ",response);
        window.sessionStorage.setItem('dates',data.dates);
        window.sessionStorage.setItem('timer',data.timer);
        window.location.replace("/AppConfirmation");
      },
      error: (error) => console.log(error)
    });
  };
  

  return (
    <Page>
      <H1>Book Appointments</H1>

      <form onSubmit={handleSubmit}>
        <Fieldset>
          <Label htmlFor="date">Date:</Label>
          <Input
            id='date'
            name="dates"
            value={data.dates}
            type="date"
            onChange={handleInputChange}
          />
          <br/>
          <br/>
          <Label htmlFor="time">Time:</Label>
          <Input
            id="time"
            name="timer"
            value={data.timer}
            type="time"
            onChange={handleInputChange}
          />
          <br/>
          <br/>
          <Button type="submit">Submit</Button>
        </Fieldset>
      </form>
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

export default BookAppointments;
