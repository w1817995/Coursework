import React, { useState, useEffect } from "react";
import { Page } from "govuk-react";
import { Table } from "govuk-react";

function Homepage() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch("/Homepage.php")
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <Page>
      <h1>Welcome to the Homepage</h1>
      <p>This is the homepage content after a successful login.</p>
      <Table>
      </Table>
    </Page>
  );
}

export default Homepage;
