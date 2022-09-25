import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    email:'',
    isAuth:false,
    firstname:'',
    lastname:''
}

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    saveUser: (state,action) => {
      const {email,first_name,last_name} = action.payload.user;

    return{
        ...state,
        email:email,
        isAuth:action.payload.status ==="success" ? true:false,
        firstname:first_name,
        lastname:last_name
    }},
  },
})

export const { saveUser } = UserSlice.actions

export default UserSlice.reducer