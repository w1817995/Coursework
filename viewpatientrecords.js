// Melissa Akinci did this page
import {Page,Footer, LabelText,Table} from "govuk-react";
import React, { useState,useEffect } from 'react';
import $ from 'jquery';

function ViewPR(props) {
  const [data, setData] = useState('');
  const[auth,setAuth] = useState('');

  useEffect(() => {
   var auth = sessionStorage.getItem('nhs');
   setAuth(auth);

    // Make an API call to fetch the user details
    $.ajax({
        url: `http://localhost:4000/patient.php?nhs=${auth}`,
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
      <LabelText><h1><center>View Patient Records Page</center></h1></LabelText>
 
   <br/>
   <br/>
      <div>
       {
        data.map(pat => (
           <div key={pat.NHSNo}>
            <br/>
            <Table>
            <Table.Row>
            <Table.CellHeader>NHS Number</Table.CellHeader>
            <Table.Cell>{pat.NHSNo}</Table.Cell>
            </Table.Row>
          <Table.Row>
            <Table.CellHeader>Forename</Table.CellHeader>
            <Table.Cell>{pat.Forename}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.CellHeader>Surname</Table.CellHeader>
            <Table.Cell>{pat.Surname}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.CellHeader>Date Of Birth</Table.CellHeader>
            <Table.Cell>{pat.DOfB}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.CellHeader>Gender</Table.CellHeader>
            <Table.Cell>{pat.Gender}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.CellHeader>Postcode</Table.CellHeader>
            <Table.Cell>{pat.Postcode}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.CellHeader>Email</Table.CellHeader>
            <Table.Cell>{pat.Email}</Table.Cell>
          </Table.Row>
          </Table>
           </div>
        ))
       }
</div>
    <br/>
    <br/>
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


export default ViewPR;