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

const initialState = {
  user: null,
  loading: false,
  error: null,
  jwt: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
    case LOGIN_REQUEST:
    case GET_USER_REQUEST:
      return { ...state, loading: true, error: null };

    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        jwt: action.payload.jwt,
        user: action.payload.user,
        loading: false,
        error: null,
      };

    case GET_USER_SUCCESS:
      return { ...state, loading: false, user: action.payload, error: null };

    case REGISTER_FAILURE:
    case LOGIN_FAILURE:
    case GET_USER_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case LOGOUT:
      return initialState;

    default:
      return state;
  }
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
  
//   const initialState = {
//     user: null,
//     loading: false,
//     error: null,
//     jwt: null,
//   };
  
//   export const authReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case REGISTER_REQUEST:
//       case LOGIN_REQUEST:
//       case GET_USER_REQUEST:
//         return { ...state, loading: true, error: null };
  
//       case REGISTER_SUCCESS:
//       case LOGIN_SUCCESS:
//             return {
//               ...state,
//               jwt: action.payload.token,
//               user: action.payload.user,
//               loading: false,
//               error: null,
//             };
          
  
//       case GET_USER_SUCCESS:
//         return { ...state, loading: false, user: action.payload, error: null };
  
//       case REGISTER_FAILURE:
//       case LOGIN_FAILURE:
//       case GET_USER_FAILURE:
//         return { ...state, loading: false, error: action.payload };
  
//       case LOGOUT:
//         return initialState;
  
//       default:
//         return state;
//     }
//   };
  


// import { GET_USER_REQUEST, LOGIN_REQUEST, REGISTER_REQUEST } from "./ActionType"

// const initialState={
//     user:null,
//     loading:false,
//     error:null,
//     jwt:null,
//     projectSize:0,
// }

// export const authReducer=(state=initialState, action)=>{
//     switch (action.type){
//         case REGISTER_REQUEST:
//         case LOGIN_REQUEST:
//         case GET_USER_REQUEST:
//             return {...state, loading:true, error:null}

//         default:
//             return state
//         }
// }