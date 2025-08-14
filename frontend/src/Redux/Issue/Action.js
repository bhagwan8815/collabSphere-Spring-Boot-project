import * as actionType from "./ActionTypes";
import api from "../../config/api";

export const fetchIssues = (id)=>{
    return async (dispatch)=>{
        dispatch ({type:actionType.FETCH_ISSUE_REQUEST});
        try{
            const response = await api.get(`/api/issues/projects/${id}`);
            console.log("fetch issues ", response.data);
            dispatch({
                type : actionType.FETCH_ISSUE_SUCCESS,
               issues: response.data,
            });
           
        }catch(error){
            dispatch({
                type : actionType.FETCH_ISSUE_FAILURE,
               error : error.message,
            });
        }
    };
};

export const fetchIssueById = (id)=>{
    return async (dispatch)=>{
        dispatch ({type:actionType.FETCH_ISSUE_BY_ID_REQUEST});
        try{
            const response = await api.get(`/api/issues/${id}`);
            console.log("fetch issue by id ", response.data);
            dispatch({
                type : actionType.FETCH_ISSUE_BY_ID_SUCCESS,
               issues: response.data,
            });
           
        }catch(error){
            dispatch({
                type : actionType.FETCH_ISSUE_BY_ID_FAILURE,
               error : error.message,
            });
        }
    };
};


export const updateIssueStatus = ({id , status})=>{
    return async (dispatch)=>{
        dispatch ({type:actionType.UPDATE_ISSUE_STATUS_REQUEST});
        try{
            const response = await api.put(`/api/issues/${id}/status/${status}`);
            console.log("update issue status ", response.data);
            dispatch({
                type : actionType.UPDATE_ISSUE_STATUS_SUCCESS,
               issues: response.data,
            });
           
        }catch(error){
            dispatch({
                type : actionType.UPDATE_ISSUE_STATUS_FAILURE,
               error : error.message,
            });
        }
    };
};

export const assignedUserToIssue = ({issueId , userId})=>{
    return async (dispatch)=>{
        dispatch ({type:actionType.ASSIGNED_ISSUE_TO_USER_REQUEST});
        try{
            const response = await api.put(`/api/issues/${issueId}/assignee/${userId}`);
            console.log("assigned issue---- ", response.data);
            dispatch({
                type : actionType.ASSIGNED_ISSUE_TO_USER_SUCCESS,
               issues: response.data,
            });
           
        }catch(error){
            dispatch({
                type : actionType.ASSIGNED_ISSUE_TO_USER_FAILURE,
               error : error.message,
            });
        }
    };
};