//Nasteha Omar Ahmed did this whole page
import { Page, Link, BackLink, Button, Select, Footer, ButtonArrow } from 'govuk-react';
import React, { useState, useEffect } from 'react';
import $ from 'jquery';

const Cancel = () => {
  const [data, setData] = useState([]);
  const [auth, setAuth] = useState('');


  const handleInputChange = (event) => {
    const selectedDate = event.target.value;
    const selectedAppointment = data.find(appointment => appointment.appointmentDate === selectedDate);
    setData(selectedAppointment);
    console.log(selectedAppointment);
  };
  

  useEffect(() => {
    var auth = sessionStorage.getItem('staffid');
    setAuth(auth);

    // Fetch appointments data from the database
    $.ajax({
      url: `http://localhost:4000/GetAppointments.php?staffid=${auth}`,
      method: 'GET',
      dataType: 'json',
      success: (response) => {
        console.log('Server response: ', response);
        setData(response);
      },
      error: (error) => console.log(error),
    });
  }, [auth]);

  const handleSubmit = (event) => {
    event.preventDefault();
    $.ajax({
      url: `http://localhost:4000/Cancel.php?staffid=${auth}`,
      method: 'POST',
      data: data,
      success: (response) => {
        console.log('Server response: ', response);
        window.sessionStorage.removeItem('dates', data.dates);
        window.location.replace('/AppConfirmation');
      },
      error: (xhr, status, error) => {
        console.log(`AJAX Error: ${error}`);
        console.log(`Status Code: ${xhr.status}`);
      }      
    });
  };

  return (
    <Page beforeChildren={<BackLink href="#">Back</BackLink>}>
      <h1>Cancel Appointments</h1>
      <form onSubmit={handleSubmit}>
      {data.length > 0 ? (
  <Select
    input={{
      name: 'appointment',
      onChange: handleInputChange,
    }}
    label="Select Appointment:"
  >
    {data.map((cancel) => (
      <option key={cancel.appointmentDate} value={cancel.appointmentDate}>
        {cancel.appointmentDate}
      </option>
    ))}
  </Select>
) : (
  <p>No appointments found</p>
)}

        <br />
        <div className="button">
            <Link>
          <Button icon={<ButtonArrow />} start>
            Cancel
          </Button>
          </Link>
        </div>
      </form>

      <div className="footer">
        <Footer />
      </div>
    </Page>
  );
};

export default Cancel;
