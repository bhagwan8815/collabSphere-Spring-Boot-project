import * as actionType from './ActionTypes';

const initialState = {
  messages: [],
  loading: false,
  error: null,
  chat: null,
};

export const ChatReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.FETCH_MESSAGES_REQUEST:
    case actionType.SEND_MESSAGE_REQUEST:
    case actionType.FETCH_CHAT_MESSAGE_REQUEST: // ✅ Corrected singular constant
      return {
        ...state,
        loading: true,
        error: null,
      };

    case actionType.FETCH_MESSAGES_SUCCESS:
    case actionType.FETCH_CHAT_MESSAGE_SUCCESS: // ✅ Corrected singular constant
      return {
        ...state,
        loading: false,
        messages: action.messages,
      };

    case actionType.SEND_MESSAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        messages: [...state.messages, action.messages],
      };

    case actionType.FETCH_CHAT_BY_PROJECT_SUCCESS:
      return {
        ...state,
        loading: false,
        chat: action.chat,
      };

    case actionType.FETCH_MESSAGES_FAILURE:
    case actionType.SEND_MESSAGE_FAILURE:
    case actionType.FETCH_CHAT_MESSAGE_FAILURE: // ✅ Corrected singular constant
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};






// import { act } from 'react';
// import * as actionType from './ActionTypes'
// const initialState ={
//     messages: [],
//     loading: false,
//     error : null,
//     chat: null

// };

// export const ChatReducer =(state= initialState , action)=>{
//     switch(action.type){
//       case actionType.FETCH_MESSAGES_REQUEST:
//       case actionType.SEND_MESSAGE_REQUEST:
//       case actionType.FETCH_CHAT_MESSAGES_REQUEST:
//         return {
//             ...state,
//             loading:true,
//             error:null
//         };
//       case actionType.FETCH_MESSAGES_SUCCESS:
//       case actionType.FETCH_CHAT_MESSAGE_SUCCESS:
//         return {
//             ...state,
//             loading:false,
//             messages:action.messages
//         };
//        case actionType.SEND_MESSAGE_SUCCESS:
//           return{
//             ...state,
//             loading:false,
//             messages: [...state.messages, action.messages]
//           };
//         case actionType.FETCH_CHAT_BY_PROJECT_SUCCESS:
//             return{
//                 ...state,
//                 loading:false,
//                 chat:action.chat
//             };
//         case actionType.FETCH_MESSAGES_FAILURE:
//         case actionType.SEND_MESSAGE_FAILURE:
//         case actionType.FETCH_CHAT_MESSAGE_FAILURE:
//             return{
//                 ...state,
//                 loading:false,
//                 error:action.error
//             };
       
//         default:
//            return state
//     }
// };