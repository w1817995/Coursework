//Fareed Khan Mohamed Rafi did this whole page
import React, { useEffect, useState } from 'react';
import { Page,H1, Table } from 'govuk-react';
import $ from 'jquery';

function Display() {  
  const[data,setData] = useState('');
  const[auth,setAuth] = useState('');
  useEffect(() => {
    var auth = sessionStorage.getItem('staffid');
    setAuth(auth);
 
     // Make an API call to fetch the user details
     $.ajax({
         url: `http://localhost:4000/ViewAppointment.php?staffid=${auth}`,
         method: "GET",
         dataType: "json",
         success: (response) => {
           console.log("Server response: ",response);
           setData(response);
         },
         error: (error) => console.log(error)
       });
     }, [auth]);

     if (!data) {
      return (
        <Page>
          <h1>Loading...</h1>
        </Page>
      );
    }  

  return (
    <Page>
    <div>
      <H1>View Appointments</H1>
      <p>Your appointments has been booked below</p>
       {
        data.map(app => (
          <div key={app.staffID}>
           <br/>
           <Table>
            <Table.Row>
              <Table.CellHeader>Appointment Date</Table.CellHeader>
              <Table.Cell>{app.appDate}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.CellHeader>Appointment Time</Table.CellHeader>
              <Table.Cell>{app.appTime}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.CellHeader>NHS Number</Table.CellHeader>
              <Table.Cell>{app.nhs}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.CellHeader>Staff ID</Table.CellHeader>
              <Table.Cell>{app.staffID}</Table.Cell>
            </Table.Row>
           </Table>
          </div>
        ))
       }
    </div>
    </Page>
  );
}

export default Display;