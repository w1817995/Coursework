import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Page, Table } from "govuk-react";
import $ from 'jquery';

function HomePage(props) {
  const [data, setData] = useState(null);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const nhs = searchParams.get("nhs");

  useEffect(() => {
    // Make an API call to fetch the user details
    $.ajax({
      url: `http://localhost:4000/Homepage.php?nhs=${nhs}`,
      method: "GET",
      dataType: "json",
      success: (response) => {
        console.log("Server response: ",response);
        setData(response);
      },
      error: (error) => console.log(error)
    });
  }, [nhs]);

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
        <h1>Welcome to the Homepage</h1>
        <p>This is the homepage content after a successful login.</p>
        <p>Your NHS number is: {nhs}</p>
        <Table>
          <Table.Row>
            <Table.CellHeader>FName</Table.CellHeader>
            <Table.Cell>{data.fname}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.CellHeader>SName</Table.CellHeader>
            <Table.Cell>{data.sname}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.CellHeader>Email</Table.CellHeader>
            <Table.Cell>{data.email}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.CellHeader>PostCode</Table.CellHeader>
            <Table.Cell>{data.post}</Table.Cell>
          </Table.Row>
        </Table>
      </div>
    </Page>
  );
}

export default HomePage;
