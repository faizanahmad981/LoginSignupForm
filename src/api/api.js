import axios from 'axios';
const url='https://localhost:4000'
export const postContact=async(data)=>{
    console.log('request reached ',data)
   try{
    return await axios.post(`${url}/Contact`,data);
   }catch(error){
    console.log(error)
   }
}