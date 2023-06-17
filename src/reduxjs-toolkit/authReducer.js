import { createSlice } from '@reduxjs/toolkit';
import {authAPI} from '../api/api'

const authSlice = createSlice({
  name: 'auth',
  initialState: { 
    email : null,
    firstname : null,
    id : null,
    lastname : null,
    addCookie : false,
    jwt : null,
    isAuth : null
  },

  reducers: {

    setJwt: (state, action) => { state.jwt = action.payload.jwt; },
    setYesAuth: (state, action) => { state.email = action.payload.data.email; 
      state.firstname = action.payload.data.firstname;
      state.id = action.payload.data.id;
      state.lastname = action.payload.data.lastname;
      state.isAuth = action.payload.isAuth;
    },
    setNoAuth: (state, action) => { state.isAuth = action.payload.isAuth; },
  },
});

export const login = (values) => {
    return (dispatch) => {
        authAPI.login(values)
        .then(data => {
          if(data.result_code){
            dispatch(setJwt(data));
            dispatch(getAuth(data.jwt));
          }
        });
    }
}
export const getAuth = (values) => {
    return (dispatch) => {
        authAPI.getAuth(values)
        .then(data => {
             if(data.isAuth === true){
                dispatch(setYesAuth(data));
             }else{
                dispatch(setNoAuth(data));
             }
        });
    }
}
export const {setJwt, setYesAuth, setNoAuth} = authSlice.actions;
export default authSlice.reducer;

