import api from "../../config/api";
import * as actionType from "./ActionTypes";

export const sendMessage = (messageData) =>{
    return async (dispatch) =>{
        dispatch({type: actionType.SEND_MESSAGE_REQUEST});
        try{
            const response = await api.post("/api/messages/send", messageData);
            dispatch({
                type: actionType.SEND_MESSAGE_SUCCESS,
                message:response.data
            });
        }catch(error){
            dispatch({
                type: actionType.SEND_MESSAGE_FAILURE,
               error: error.message,
            }); 
        }
    }
};


export const fetchChatByProject = (projectId) =>{
    return async (dispatch) =>{
        dispatch({type: actionType.FETCH_CHAT_BY_PROJECT_REQUEST});
        try{
            const response = await api.get(`/api/projects/${projectId}/chat`);
            console.log("fetch chat ", response.data);
            dispatch({
                type: actionType.FETCH_CHAT_BY_PROJECT_SUCCESS,
                message:response.data
            });
        }catch(error){
            console.log("error------", error);
            dispatch({
                type: actionType.FETCH_CHAT_BY_PROJECT_FAILURE,
               error: error.message,
            }); 
        }
    }
};


export const fetchChatMessages = (chatId) =>{
    return async (dispatch) =>{
        dispatch({type: actionType.FETCH_CHAT_MESSAGE_REQUEST});
        try{
            const response = await api.get(`/api/messages/chat/${chatId}`);
            console.log("fetch message ", response.data);
            dispatch({
                type: actionType.FETCH_CHAT_MESSAGE_SUCCESS,
                chatId,
                message:response.data
            });
        }catch(error){
            console.log("error------", error);
            dispatch({
                type: actionType.FETCH_CHAT_MESSAGE_FAILURE,
               error: error.message,
            }); 
        }
    }
};


