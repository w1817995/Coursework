//Elis Morina did this page
import { Button,ButtonArrow,Page,Footer,Heading,Link } from "govuk-react";
import React from "react";
function Startpage(){
return(
    <>
    <Page>
      
        <Heading size="LARGE">
        Welcome to the Westminster GP Surgery.
        </Heading>  
   
      
      <Link href="/Login"> 
        <div className="start">
          <Button
            icon={<ButtonArrow />}
            start
          >
            Start now
          </Button>
        </div>
      </Link>
   
     
   
    </Page>
    <div className="footer">
    <Footer />
    </div>
    </>

);
};


export default Startpage;