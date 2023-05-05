import { Panel,Page, Button,Link } from "govuk-react";
import React from "react";
const Confirmation = () =>{

return(
 <>
   <Page>
     <Panel title="Registration Success"/>
     <Link href="Login">
     <Button>Login</Button>
     </Link>
     <Link>
     <Button>De-Register</Button>
     </Link>
   </Page>
 </>

  );
}

export default Confirmation;