//Elis morina did this page
import React, { useEffect, useState } from "react";
import { Page, Button,UnorderedList,Link,ListItem } from "govuk-react";
import $ from 'jquery';

function HomePage(props) {
  const [data, setData] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const[auth,setAuth] = useState('');
  
  useEffect(() => {
    var auth = sessionStorage.getItem('staffid');
    setAuth(auth);
    if (!auth) {
      console.log('Staff number not found in URL');
      return;
    }
  
    // Make an authenticated request to the server
    var url = `http://localhost:4000/StaffHomepage.php?staffid=${auth}`;
    $.get(url, (data) => {
      setData(data);
    }).fail((error) => {
      console.log(`Error fetching user details: ${error}`);
    });
  }, [auth]);

  

  if (!data) {
    return (
      <Page>
        <h1>Loading...</h1>
      </Page>
    );
  }

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  

  return (
    <Page>
      <h1>Welcome to the Staff Homepage</h1>
      <div>
        <Button onClick={toggleDropdown} className="menu-button">
          {dropdownOpen ? "Hide Menu" : "Menu"}
        </Button>
        {dropdownOpen && (
          <UnorderedList>
            <ListItem>
              <Link href='/ViewAppointments'><Button>View Appointments</Button></Link>
            </ListItem>
            <ListItem>
              <Link href="/ViewPRecords"><Button>View Patient Records</Button></Link>
            </ListItem>
            <ListItem>
              <Link href="/patient-records"><Button>Add information on Medical Records</Button></Link>
            </ListItem>
          </UnorderedList>
        )}
      </div>
    </Page>
  );
}

export default HomePage;
