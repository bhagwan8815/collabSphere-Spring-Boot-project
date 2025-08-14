import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  LOGOUT,
} from "./ActionType";
import axios from "axios";
import { API_BASE_URL } from "../../config/api";

export const register = (userData) => async (dispatch) => {
  dispatch({ type: REGISTER_REQUEST });
  try {
    const { data } = await axios.post(`${API_BASE_URL}/auth/signup`, userData);
    if (data.jwt) {
     localStorage.setItem("jwt", data.jwt);
      dispatch({ type: REGISTER_SUCCESS, payload: data });
      console.log("register success: done in resgister reducer :" , data);
    }
  } catch (error) {
    dispatch({ type: REGISTER_FAILURE, payload: error.message });
  }
};

// export const login = (userData) => async (dispatch) => {
//   dispatch({ type: LOGIN_REQUEST });
//   try {
//     const { data } = await axios.post(`${API_BASE_URL}/auth/signing`, userData);
//     if (data.jwt) {
//       localStorage.setItem("jwt", data.jwt);
//       dispatch({ type: LOGIN_SUCCESS, payload: data });
//     }
//   } catch (error) {
//     dispatch({ type: LOGIN_FAILURE, payload: error.message });
//   }
// };

// export const login = (userData) => async (dispatch) => {
//   dispatch({ type: LOGIN_REQUEST });
//   try {
//     const { data } = await axios.post(`${API_BASE_URL}/auth/signing`, userData);
//     console.log("Login Response+++++++++++++++++++++++++++++++++++:", data);
//     if (data.jwt) {
//       // Save token in localStorage
//      localStorage.setItem("jwt", data.jwt);
//       //localStorage.setItem("token", data.jwt);
//   //Dispatch LOGIN_SUCCESS action with payload including JWT token
//       dispatch({ type: LOGIN_SUCCESS, payload: { token: data.jwt, user: data.user } });

//       // Optionally, if you're using Redux to store token, set it here
//       // dispatch({ type: SET_TOKEN, payload: data.jwt });

//     }
//   } catch (error) {
//     dispatch({ type: LOGIN_FAILURE, payload: error.message });
//   }
// };


export const login = (userData) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });

  try {
    const { data } = await axios.post(`${API_BASE_URL}/auth/signing`, userData);

    console.log("Login Response:", data); // ✅ Debug: shows token & message
    console.log("login ke baad ye token he :" , data.jwt);
    localStorage.setItem("jwt", data.jwt);
    if (data.jwt) {
      localStorage.setItem("jwt", data.jwt);
     // localStorage.setItem("token", data.jwt); // ✅ storing token

      dispatch({
        type: LOGIN_SUCCESS,
        payload: { jwt: data.jwt },
      });
    }

  } catch (error) {
    console.error("Login Error:", error);
    dispatch({ type: LOGIN_FAILURE, payload: error.message });
  }
};

export const getUser = () => async (dispatch) => {
  dispatch({ type: GET_USER_REQUEST });
  try {
    const { data } = await axios.get(`${API_BASE_URL}/api/users/profile`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    });
    // localStorage.setItem("fullName",data.fullName);
    console.log("User in the console is :", data.fullName);

    dispatch({ type: GET_USER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_USER_FAILURE, payload: error.message });
  }
};

export const logout = () => (dispatch) => {
  localStorage.clear();
  dispatch({ type: LOGOUT });
};






// import {
//     REGISTER_REQUEST,
//     REGISTER_SUCCESS,
//     REGISTER_FAILURE,
//     LOGIN_REQUEST,
//     LOGIN_SUCCESS,
//     LOGIN_FAILURE,
//     GET_USER_REQUEST,
//     GET_USER_SUCCESS,
//     GET_USER_FAILURE,
//     LOGOUT,
//   } from "./ActionType";
//   import axios from "axios";
//   import { API_BASE_URL } from "../../config/api";
  
//   export const register = (userData) => async (dispatch) => {
//     dispatch({ type: REGISTER_REQUEST });
//     try {
//       const { data } = await axios.post(`${API_BASE_URL}/auth/signup`, userData);
//       if (data.jwt) {
//         localStorage.setItem("jwt", data.jwt);
//         dispatch({ type: REGISTER_SUCCESS, payload: data });
//       }
//       console.log("register success ", data);
//     } catch (error) {
//       dispatch({ type: REGISTER_FAILURE, payload: error.message });
//       console.error(error);
//     }
//   };
  
//   export const login = (userData) => async (dispatch) => {
//     dispatch({ type: LOGIN_REQUEST });
//     try {
//       const { data } = await axios.post(`${API_BASE_URL}/auth/signing`, userData);
//       if (data.jwt) {
//         localStorage.setItem("jwt", data.jwt);
//         dispatch({ type: LOGIN_SUCCESS, payload: data });
        
//       }
//       console.log("login success ", data);
//     } catch (error) {
//       dispatch({ type: LOGIN_FAILURE, payload: error.message });
//       console.error(error);
//     }
//   };
// export const login=userData=>async(dispatch)=>{
//     dispatch({type:LOGIN_REQUEST})
//     try{
//         const{data} =await axios.post(`${API_BASE_URL}/auth/signing`,userData)
//         if(data.jwt){
//             localStorage.setItem("jwt",data.jwt)
//             dispatch({type:LOGIN_REQUEST , payload:data})
//         }
    
//         console.log("login success ",data);
//     }catch(error){
//         console.log(error);
//     }
// }

// export const login = (credentials) => async (dispatch) => {
//     dispatch({ type: "LOGIN_REQUEST" });
//     try {
//      // dispatch({ type: "LOGIN_REQUEST" });
//       const res = await axios.post("/auth/signing", credentials);
//       dispatch({
//         type: "LOGIN_SUCCESS",
//         payload: {
//           token: res.data.token,
//           user: res.data.user,
//         },
//       });
//       localStorage.setItem("token", res.data.token);
//     } catch (error) {
//       dispatch({
//         type: "LOGIN_FAILURE",
//         payload: error.response?.data?.message || "Login failed",
//       });
//     }
//   };
  
  
  // export const getUser = () => async (dispatch) => {
  //   dispatch({ type: GET_USER_REQUEST });
  //   try {
  //     const { data } = await axios.get(`${API_BASE_URL}/api/users/profile`, {
  //       headers: {
  //         Authorization: `Bearer ${localStorage.getItem("jwt")}`,
  //       },
  //     });
  //     dispatch({ type: GET_USER_SUCCESS, payload: data });
  //   } catch (error) {
  //     dispatch({ type: GET_USER_FAILURE, payload: error.message });
  //     console.error(error);
  //   }
  // };
  
  // export const logout = () => async (dispatch) => {
  //   localStorage.clear();
  //   dispatch({ type: LOGOUT });
  // };
  








// import axios from "axios";
// import { API_BASE_URL } from "../../config/api";
// import { REGISTER_REQUEST } from "./ActionType";

// export const register=userData=>async(dispatch)=>{
//     dispatch({type:REGISTER_REQUEST})
//     try{
//         const{data} =await axios.post(`${API_BASE_URL}/auth/signup`,userData)
//         if(data.jwt){
//             localStorage.setItem("jwt",data.jwt)
//             dispatch({type:REGISTER_REQUEST , payload:data})
//         }
    
//         console.log("register success ",data);
//     }catch(error){
//         console.log(error);
//     }
// }


// export const login=userData=>async(dispatch)=>{
//     dispatch({type:LOGIN_REQUEST})
//     try{
//         const{data} =await axios.post(`${API_BASE_URL}/auth/signing`,userData)
//         if(data.jwt){
//             localStorage.setItem("jwt",data.jwt)
//             dispatch({type:LOGIN_REQUEST , payload:data})
//         }
    
//         console.log("login success ",data);
//     }catch(error){
//         console.log(error);
//     }
// }


// export const getUser=()=>async(dispatch)=>{
//     dispatch({type:GET_USER_REQUEST})
//     try{
//         const{data} =await axios.get(`${API_BASE_URL}/api/users/profile`,{
//             headers:{
//                 "Authorization":`Bearer ${localStorage.getItem("jwt")}`
//             }
//         })
//         if(data.jwt){
//             localStorage.setItem("jwt",data.jwt)
//             dispatch({type:GET_USER_REQUEST , payload:data})
//         }
//         console.log("login success ",data);
//     }catch(error){
//         console.log(error);
//     }
// };


// export const logout=()=> async (dispatch)=>{
//     dispatch({type:LOGOUT},
//     localStorage.clear()
//  )
// }

