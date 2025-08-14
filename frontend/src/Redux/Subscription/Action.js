import * as actionType from "./ActionTypes";
import api from "../../config/api";


export const getUserSubscription =(jwt)=>{
    return async (dispatch) =>{
        dispatch ({ type : actionType.GET_USER_SUBSCRIPTION_REQUEST});
        try{
            const response = await api.get("/api/subscriptions/user",{
                headers:{
                    "Authorization" :`Bearer ${jwt}`
                }
            });
            dispatch ({
                type: actionType.GET_USER_SUBSCRIPTION_SUCCESS,
                payload: response.data,
            });
            console.log("users subscription", response.data)
        }catch(error){
            console.log(error);
            dispatch ({
                type: actionType.GET_USER_SUBSCRIPTION_FAILURE,
                payload: error.message,
            });
        }
    }
};


export const upgradeSubscription =({planType})=>{
    return async (dispatch) =>{
        dispatch ({ type : actionType.UPGRADE_SUBSCRIPTION_REQUEST});
        try{
            const response = await api.patch("/api/subscriptions/upgrade",null,{
               params:{
                planType: planType,
               },
            });
            dispatch ({
                type: actionType.UPGRADE_SUBSCRIPTION_SUCCESS,
                payload: response.data,
            });
            console.log("UPGRADE subscription", response.data)
        }catch(error){
            console.log(error.response.data);
            dispatch ({
                type: actionType.UPGRADE_SUBSCRIPTION_FAILURE,
                payload: error.message,
            });
        }
    }
};