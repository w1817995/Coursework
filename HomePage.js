//Elis morina did this page
import React, { useEffect, useState } from "react";
import { Page, Button,UnorderedList,Link,ListItem,H1 } from "govuk-react";
import $ from 'jquery';

function HomePage(props) {
  const [data, setData] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const[auth,setAuth] = useState('');
  const[auth2,setAuth2] = useState('');
  
  useEffect(() => {
    var auth = sessionStorage.getItem('nhs');
    var auth_2 = sessionStorage.getItem('staffid');
    setAuth(auth);
    setAuth2(auth_2);
    if (!auth) {
      console.log('NHS number not found in URL');
      return;
    }
  
    // Make an authenticated request to the server
    var url = `http://localhost:4000/Homepage.php?nhs=${auth}`;
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
      <H1>Welcome to the Patient Homepage</H1>
      <div>
        <Button onClick={toggleDropdown} className="menu-button">
          {dropdownOpen ? "Hide Menu" : "Menu"}
        </Button>
        {dropdownOpen && (
          <UnorderedList>
            <ListItem>
              <Link href='/View'><Button>Medical Records</Button></Link>
            </ListItem>
            <ListItem>
              <Link href="/BookApp"><Button>Appointments</Button></Link>
            </ListItem>
            <ListItem>
              <Link href="/Cancel"><Button>Cancel Appointments</Button></Link>
            </ListItem>
          </UnorderedList>
        )}
      </div>
    </Page>
  );
}

export default HomePage;
