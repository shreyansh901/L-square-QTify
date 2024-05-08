import React from "react";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import Navbar from "./components/NavBar/NavBar.jsx";
import HeroSection from "./components/HeroSection/hero.jsx";

function App(){
   return(
     <>
       <StyledEngineProvider injectFrist>
          <Navbar/>
          <HeroSection />
       </StyledEngineProvider>
     </>
    );
   }
   
  export default App;    