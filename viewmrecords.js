// Melissa Akinci did this page
// Line 46 - 50 was done by Fareed Khan Mohamed Rafi 
import {Button, Page,Footer, LabelText,Link, Table} from "govuk-react";
import React, { useState,useEffect } from 'react';
import $ from 'jquery';

function ViewMR(props) {
  const [data, setData] = useState('');
  const[auth,setAuth] = useState('');

  useEffect(() => {
   var auth = sessionStorage.getItem('nhs');
   setAuth(auth);

    // Make an API call to fetch the user details
    $.ajax({
        url: `http://localhost:4000/med.php?nhs=${auth}`,
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
      <LabelText><h1><center>View Medical Records Page</center></h1></LabelText>
 
   <br/>
   <br/>
      <div>
        <p>Your NHS number is: {auth}</p>
       {
        data.map(record => (
           <div key={record.vaccinationDate}>
            <br/>
            <h2>Vaccination Date: {record.vaccinationDate}</h2>
            <Table>
          <Table.Row>
            <Table.CellHeader>DoseNum</Table.CellHeader>
            <Table.Cell>{record.DoseNum}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.CellHeader>vaccinationDate</Table.CellHeader>
            <Table.Cell>{record.vaccinationDate}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.CellHeader>vaccineManufacturer</Table.CellHeader>
            <Table.Cell>{record.vaccineManufacturer}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.CellHeader>diseaseTargeted</Table.CellHeader>
            <Table.Cell>{record.diseaseTargeted}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.CellHeader>vaccineType</Table.CellHeader>
            <Table.Cell>{record.vaccineType}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.CellHeader>product</Table.CellHeader>
            <Table.Cell>{record.product}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.CellHeader>vaccineBatchNumber</Table.CellHeader>
            <Table.Cell>{record.vaccineBatchNumber}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.CellHeader>countryOfVaccination</Table.CellHeader>
            <Table.Cell>{record.countryOfVaccination}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.CellHeader>authority</Table.CellHeader>
            <Table.Cell>{record.authority}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.CellHeader>totalSeriesOfDoses</Table.CellHeader>
            <Table.Cell>{record.totalSeriesOfDoses}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.CellHeader>displayName</Table.CellHeader>
            <Table.Cell>{record.displayName}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.CellHeader>snomedCode</Table.CellHeader>
            <Table.Cell>{record.snomedCode}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.CellHeader>dateEntered</Table.CellHeader>
            <Table.Cell>{record.dateEntered}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.CellHeader>procedureCode</Table.CellHeader>
            <Table.Cell>{record.procedureCode}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.CellHeader>booster</Table.CellHeader>
            <Table.Cell>{record.booster}</Table.Cell>
          </Table.Row>
          </Table>
           </div>
        ))
       }
</div>
    <br/>
    <br/>
    <br/>
    <Link href="./Rconfirm">
    <center>
      <div className="update">
      <Button>Update GP Records</Button>
      </div>
      </center>
      </Link>
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


export default ViewMR;