import axios from 'axios';
const url="http://localhost:3002/getdata"
export const fetchProduct=()=>axios.get(url);
