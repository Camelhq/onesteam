import axios from 'axios';
import { browserHistory } from 'react-router';

/********************
* localhost:3000/posts
*
*This receive tweets from the server
*
************/
export const ADD_POSTS = 'ADD_POSTS';

export const BACKEND = 'http://localhost:3000';

export function addPosts(data) {
  console.log(data)
  const request = axios.post(`${BACKEND}/residential`, data);
  return dispatch => {
    request.then(function(response){
      dispatch(addPost(response));
      // dispatch({type: "ADD_POSTS"})
    })
    .catch(error => {
          console.log('error', error.response);
      })
  }
}


const addPost = function addPost(data) {
  return {
    type: ADD_POSTS,
    data: data
  }
}



// export function getPost({ recipt}) {
//  return function(dispatch) {
//   axios.get(`${BACKEND}/residential`, {
//     recipt: recipt,
//   }).then(function(response) {
//     if(response.status === 200){
//       console.log(response);
//      }
//   }).catch((error) => {
//      errorHandler(dispatch, error.response, AUTH_ERROR)
//    });
//    }
//  }
//
//  const getPost = function getPost(data) {
//    return {
//      type: GET_POST,
//      data: data
//    }
//  }




// /********************
// * this is for stripe payments
// *
// *This is for stripe payments
// *
// ************/
//
// //this is payments
// // export const USER_PAYMENT = 'USER_PAYMENT';
//
// // export function userPayment(info) {
// //  return function(dispatch) {
//
// //   axios.post(`${API_URL}/pay`, info)
// //     .then(function(response) {
// //     // if(response.status === 200){
// //       console.log(response)
// //        dispatch({ type: USER_PAYMENT, payload: response.data });
//
// //     //  }
// //   }).catch((error) => {
// //      console.log("failed mission")
// //    });
// //    }
// //  }
