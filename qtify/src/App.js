import React,{useEffect,useState} from "react";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import Navbar from "./components/NavBar/NavBar.jsx";
import HeroSection from "./components/HeroSection/hero.jsx";
import Homepage from "./pages/HomePage/HomePage.jsx";
import { Outlet } from "react-router-dom";
import { fetchTopAlbums, fetchNewAlbums, fetchSongs} from "./components/api/api.js";
//import Accordion from "./components/Accordion/Accordion.jsx";

function App(){
  const [data, setData] =useState({});

  const generateData = (key,source) =>{
    source().then((data) => {
      setData((prevState) => {
        // Object.assign would also work
        return {...prevState,[key]:data};
      });
    });
  };

  useEffect(()=>{
    generateData("topAlbums",fetchTopAlbums);
    generateData("newAlbums",fetchNewAlbums);
    generateData("songs",fetchSongs);
  },[]);

  const { topAlbums = [], newAlbums =[], songs = [] } = data;
 console.log(data);

   return(
     <>
       <StyledEngineProvider injectFrist>
          <Navbar SearchData={[...topAlbums, ...newAlbums]}/>
          <Outlet context={{data:{topAlbums, newAlbums, songs} }} />

       </StyledEngineProvider>
     </>
    );
   }
   
  export default App;    