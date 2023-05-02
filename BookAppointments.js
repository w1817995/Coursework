import React, { useState } from 'react';
import { Button, Fieldset,Page,H1, Label,Footer,Input } from 'govuk-react';
import $ from 'jquery';

function BookAppointments() {
  const [data, setData] = useState({
    dates:"",
    timer:""
  });

  const handleInputChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
    console.log(data);
  };

  var url_info = "http://localhost:4000/Appointment.php";

   const handleSubmit = (event) => {
      event.preventDefault();
      $.ajax({
        url: url_info,
        method: "POST",
        data: data,
        dataType:'json',
        success: (response) => console.log(response),
        error: (error) => console.log(error),
      });
    };
  return (
    <Page>
      <H1>Book Appointments</H1>
    <form onSubmit={handleSubmit}>
      <Fieldset>
        <Label htmlFor="date">Date:</Label>
        <Input
          name="dates"
          type="date"
          onChange={handleInputChange}
        />
        <br/>
        <br/>
        <Label htmlFor="time">Time:</Label>
        <Input
          id="time"
          name="timer"
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
