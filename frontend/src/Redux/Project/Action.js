
import axios from "axios";
import api from "../../config/api";
import {
  CREATE_PROJECT_REQUEST,
  CREATE_PROJECT_SUCCESS,
  CREATE_PROJECT_FAILURE,
  FETCH_PROJECTS_REQUEST,
  FETCH_PROJECTS_SUCCESS,
  FETCH_PROJECT_FAILURE,
  FETCH_PROJECT_BY_ID_REQUEST,
  FETCH_PROJECT_BY_ID_SUCCESS,
  FETCH_PROJECT_BY_ID_FAILURE,
  SEARCH_PROJECT_REQUEST,
  SEARCH_PROJECT_SUCCESS,
  SEARCH_PROJECT_FAILURE,
  DELETE_PROJECT_REQUEST,
  DELETE_PROJECT_SUCCESS,
  DELETE_PROJECT_FAILURE,
  INVITE_TO_PROJECT_REQUEST,
  INVITE_TO_PROJECT_SUCCESS,
  INVITE_TO_PROJECT_FAILURE,
  ACCEPT_INVITATION_REQUEST,
  ACCEPT_INVITATION_SUCCESS,
  ACCEPT_INVITATION_FAILURE,
} from "./ActionTypes";

export const createProjects = (projectData, jwt) => async (dispatch) => {
  console.log("the project data in createproject action :", projectData);
  dispatch({ type: CREATE_PROJECT_REQUEST });
  try {
    const { data } = await axios.post("http://localhost:8080/api/projects", projectData, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });

    dispatch({ type: CREATE_PROJECT_SUCCESS, project: data });
  } catch (error) {
    dispatch({ type: CREATE_PROJECT_FAILURE, error: error.message });
  }
};


// DELETE
export const deleteProject = ({ projectId }) => async (dispatch) => {
  dispatch({ type: DELETE_PROJECT_REQUEST });
  try {
    await api.delete(`/api/projects/${projectId}`);
    dispatch({ type: DELETE_PROJECT_SUCCESS, projectId });
  } catch (error) {
    dispatch({ type: DELETE_PROJECT_FAILURE, error: error.message });
    console.log("Error deleting project", error);
  }
};




export const fetchProjects = ({ category, tag }) => async (dispatch) => {
  const token = localStorage.getItem("jwt");

  if (!token) {
    console.warn("❌ JWT not found in localStorage, fetchProjects aborted");
    return;
  }

  dispatch({ type: FETCH_PROJECTS_REQUEST });
  const params = {};
  if (category && category !== "all") params.category = category;
  if (tag && tag !== "all") params.tag = tag;

  try {
    const res = await api.get("/api/projects", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
      params: {
        category: category !== "all" ? category : "",
        tag: tag !== "all" ? tag : "",
      },
    });

    dispatch({ type: FETCH_PROJECTS_SUCCESS, payload: res.data });
    console.log("✅ projects from backend:", res.data);
  } catch (error) {
    dispatch({ type: FETCH_PROJECT_FAILURE, error: error.message });
    console.error("❌ Error fetching projects:", error);
  }
};




// SEARCH
export const searchProjects = (keyword) => async (dispatch) => {
  dispatch({ type: SEARCH_PROJECT_REQUEST });
  try {
    const { data } = await api.get("/api/projects/search?keyword=" + keyword);
    dispatch({ type: SEARCH_PROJECT_SUCCESS, projects: data });
  } catch (error) {
    dispatch({ type: SEARCH_PROJECT_FAILURE, error: error.message });
    console.log("Search error", error);
  }
};

// CREATE
// export const createProjects = (projectData) => async (dispatch) => {
//   dispatch({ type: CREATE_PROJECT_REQUEST });
//   try {
//     const { data } = await api.post("/api/projects/", projectData);
//     dispatch({ type: CREATE_PROJECT_SUCCESS, projects: data });
//   } catch (error) {
//     dispatch({ type: CREATE_PROJECT_FAILURE, error: error.message });
//     console.log("Create error", error);
//   }
// };





// FETCH BY ID
export const fetchProjectsById = (id) => async (dispatch) => {
  dispatch({ type: FETCH_PROJECT_BY_ID_REQUEST });
  try {
    const { data } = await api.get(`/api/projects/${id}`);
    dispatch({ type: FETCH_PROJECT_BY_ID_SUCCESS, projects: data });
  } catch (error) {
    dispatch({ type: FETCH_PROJECT_BY_ID_FAILURE, error: error.message });
    console.log("Fetch by ID error", error);
  }
};

// INVITE
export const inviteToProject = ({ email, projectId }) => async (dispatch) => {
  dispatch({ type: INVITE_TO_PROJECT_REQUEST });
  try {
    const { data } = await api.post("/api/projects/invite", { email, projectId });
    dispatch({ type: INVITE_TO_PROJECT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: INVITE_TO_PROJECT_FAILURE, error: error.message });
    console.log("Invite error", error);
  }
};

// ACCEPT INVITATION
export const acceptInvitation = ({ invitationToken, navigate }) => async (dispatch) => {
  dispatch({ type: ACCEPT_INVITATION_REQUEST });
  try {
    const { data } = await api.get("/api/projects/accept_invitation", {
      params: {
        token: invitationToken,
      },
    });
    navigate("/project/" + data.projectId);
    dispatch({ type: ACCEPT_INVITATION_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ACCEPT_INVITATION_FAILURE, error: error.message });
    console.log("Accept invitation error", error);
  }
};











// import {
//   CREATE_PROJECT_REQUEST,
//   CREATE_PROJECT_SUCCESS,
//   CREATE_PROJECT_FAILURE,
//   FETCH_PROJECTS_REQUEST,
//   FETCH_PROJECTS_SUCCESS,
//   FETCH_PROJECT_FAILURE,
//   FETCH_PROJECT_BY_ID_REQUEST,
//   FETCH_PROJECT_BY_ID_SUCCESS,
//   FETCH_PROJECT_BY_ID_FAILURE,
//   SEARCH_PROJECT_REQUEST,
//   SEARCH_PROJECT_SUCCESS,
//   SEARCH_PROJECT_FAILURE,
//   DELETE_PROJECT_REQUEST,
//   DELETE_PROJECT_SUCCESS,
//   DELETE_PROJECT_FAILURE,
//   INVITE_TO_PROJECT_REQUEST,
//   INVITE_TO_PROJECT_SUCCESS,
//   INVITE_TO_PROJECT_FAILURE,
//   ACCEPT_INVITATION_REQUEST,
//   ACCEPT_INVITATION_SUCCESS,
//   ACCEPT_INVITATION_FAILURE,
// } from "./ActionTypes"; 
// import api from "../../config/api"



// export const deleteProject = ({ projectId }) => async (dispatch) => {
//   dispatch({ type: DELETE_PROJECT_REQUEST });
//   try {
//     await api.delete(`/api/projects/${projectId}`); // <-- Correct endpoint
//     dispatch({ type: DELETE_PROJECT_SUCCESS, projectId });
//   } catch (error) {
//     dispatch({ type: DELETE_PROJECT_FAILURE, error: error.message });
//     console.log("Error deleting project", error);
//   }
// };

// export const fetchProjects = ({ category, tag }) => async (dispatch) => {
//   dispatch({ type: FETCH_PROJECTS_REQUEST });
//   try {
//     const { data } = await api.get("/api/projects", {
//       params: {
//         category: category !== "all" ? category : null,
//         tag: tag !== "all" ? tag : null,
//       },
//     });
//     dispatch({ type: FETCH_PROJECTS_SUCCESS, payload: data });
//   } catch (error) {
//     dispatch({ type: FETCH_PROJECT_FAILURE, error: error.message });
//     console.log("Error fetching projects", error);
//   }
// };


// // export const fetchProjects=({category,tag})=>async (dispatch)=>{
// //     dispatch({type:FETCH_PROJECTS_REQUEST})
// //     try{
// //       const {data} = await api.get("/api/projects",{params:{category,tag}})
// //       console.log("app projects", data)
// //       dispatch({type:FETCH_PROJECTS_SUCCESS, projects:data})
// //     }catch(error){
// //         console.log("error", error)
// //     }
// // }

// export const searchProjects=(keyword)=>async (dispatch)=>{
//     dispatch({type:SEARCH_PROJECTS_REQUEST})
//     try{
//       const {data} = await api.get("/api/projects/search?keyword="+keyword)

//       console.log("search projects", data)
//       dispatch({type:SEARCH_PROJECTS_SUCCESS, projects:data})
//     }catch(error){
//         console.log("error", error)
//     }
// }

// export const createProjects=(projectData)=>async (dispatch)=>{
//     dispatch({type:CREATE_PROJECTS_REQUEST})
//     try{
//       const {data} = await api.post("/api/projects/", projectData)

//       console.log("projects created: ", data)
//       dispatch({type:CREATE_PROJECTS_SUCCESS, projects:data})
//     }catch(error){
//         console.log("error", error)
//     }
// }

// export const fetchProjectsById=(id) =>async (dispatch)=>{
//     dispatch({type:FETCH_PROJECTS_BY_ID_REQUEST})
//     try{
//       const {data} = await api.post("/api/projects/",+id)

//       console.log("projects ", data)
//       dispatch({type:FETCH_PROJECTS_BY_ID_SUCCESS, projects:data})
//     }catch(error){
//         console.log("error", error)
//     }
// }



// // export const deleteProject=({projectId}) =>async (dispatch)=>{
// //     dispatch({type:DELETE_PROJECT_REQUEST})
// //     try{
// //       const {data} = await api.delete("/api/projects/",+id)

// //       console.log(" deleted projects ", data)
// //       dispatch({type:DELETE_PROJECT_SUCCESS, projectId})
// //     }catch(error){
// //         console.log("error", error)
// //     }
// // }



// export const inviteToProject=({email, projectId}) =>async (dispatch)=>{
//     dispatch({type:INVITE_TO_PROJECT_REQUEST})
//     try{
//       const {data} = await api.post("/api/projects/invite",{email, projectId})

//       console.log(" invite projects ", data)
//       dispatch({type:INVITE_TO_PROJECT_SUCCESS, payload:data})
//     }catch(error){
//         console.log("error", error)
//     }
// }


// export const acceptInvitation=({invitationToken , navigate}) =>async (dispatch)=>{
//     dispatch({type:ACCECPT_INVITATION_REQUEST})
//     try{
//       const {data} = await api.get("/api/projects/accept_invitation",{
//         params:{
//             token:invitationToken
//         }
//       })
//     navigate("/project"+data.projectId)
//       console.log(" accept invitation ", data)
//       dispatch({type:ACCEPT_INVITATION_SUCCESS, payload:data})
//     }catch(error){
//         console.log("error", error)
//     }
// }