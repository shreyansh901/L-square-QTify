import axios from "axios";


export const BACKEND_ENDPOINT="http://qtify-backend-labs.crio.do";

export const fromTopAlbum = async () => {
  try {
       const response= await axios.get(`${BACKEND_ENDPOINT}/album/top`);
       return response.data;
       }catch(e) {
        console.error(e);
       }
}; 

export const fromNewAlbum = async () => {
  try {
       const response= await axios.get(`${BACKEND_ENDPOINT}/album/new`);
       return response.data;
       }catch(e) {
        console.error(e);
       }
};

export const fetchSongs = async () => {
  try {
       const response= await axios.get(`${BACKEND_ENDPOINT}/songs`);
       return response.data;
       }catch(e) {
        console.error(e);
       }
};

export const fetchFilters = async () => {
  try {
       const response= await axios.get(`${BACKEND_ENDPOINT}/genres`);
       return response.data;
       }catch(e) {
        console.error(e);
       }
};