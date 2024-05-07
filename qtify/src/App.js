import React from "react";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import Navbar from "./components/NavBar/NavBar.jsx";

function App(){
   return(
     <>
       <StyledEngineProvider injectFrist>
          <Navbar/>
       </StyledEngineProvider>
     </>
    );
   }
   
  export default App;    