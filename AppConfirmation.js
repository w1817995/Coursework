import { Panel,Page, Button,Link } from "govuk-react";
import React from "react";
const AppConfirmation = () =>{

return(
 <>
   <Page>
     <Panel title="Appointment Booked"/>
     <Link href="ViewAppointments">
     <Button>View Appointments</Button>
     </Link>
   </Page>
 </>

  );
}

export default AppConfirmation;