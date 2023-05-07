//Fareed Khan Mohamed Rafi did the whole page.
import { Panel,Page, Button,Link } from "govuk-react";
import React from "react";
const AppConfirmation = () =>{

return(
 <>
   <Page>
     <Panel title="Appointment Booked"/>
     <Link href="StaffLogin">
     <Button>Login as Staff to view your appointments</Button>
     </Link>
   </Page>
 </>

  );
}

export default AppConfirmation;