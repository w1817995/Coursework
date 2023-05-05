import { Panel,Page, Button,Link } from "govuk-react";
import React from "react";
const AppConfirmation = () =>{

return(
 <>
   <Page>
     <Panel title="Appointment Booked"/>
     <Link href="StaffHomePage">
     <Button>Go to Staff Home Page to view your appointments</Button>
     </Link>
   </Page>
 </>

  );
}

export default AppConfirmation;