import axios from "axios";

export const fetchData = () => {
  return (dispatch) => {
    const headers = {
      "token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ1c2VyQG1haWwuY29tIiwiaWF0IjoxNjM3NzQ3MTY0fQ.eZNF5kYpYZiOA3IXRaECWsoTOlkog7Yy0KORsr4vR0E"
    }

    axios.get('https://peaceful-citadel-71310.herokuapp.com/todo', {headers})
      .then(( {data} ) => {
        dispatch(setData(data))
      })
      .catch( err => {
        console.log(err);
      })
  }
}

export const setData = (payload) => {
  return {
    type : 'SET_DATA',
    payload
  }
}