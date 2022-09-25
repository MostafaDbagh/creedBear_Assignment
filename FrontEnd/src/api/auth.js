
import Axios from 'axios';

const axios = Axios.create({
 baseURL: "http://localhost:4050/api/",
 timeout: Number(process.env.REACT_APP_REQUEST_TIMEOUT),
})

export const LoaginWithAuth =async (email)=>{
   const response = await axios.post('verification',{email:email});
   return response.data;

}
export const getUsers =async (email)=>{
   const response = await axios.get('getUsers');
   return response.data;

}

export const deleteUser =async (id)=>{
   const response = await axios.delete(`deleteUser/${id}`);
   return response.data;

}
export const updateUser =async (id,email,firstname,lastname)=>{
   const response = await axios.put(`updateUser/${id}`,{email:email,first_name:firstname,last_name:lastname});
   return response.data;

}
export const getUser =async (id)=>{
   const response = await axios.get(`getCurrentUser/${id}`);
   return response.data;

}