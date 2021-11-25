import '../dashboard/dashboard.css';
import './formAdd.css';
import dashboardImage from '../../images/dashboard.png';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Dashboard = () => {

  const [ list, updateList ] = useState("");
  const [ todo, updateTodo ] = useState("");
  const [ dueDate, updateDate ] = useState("");
  let navigate = useNavigate();
   
  const headers = {
      "token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ1c2VyQG1haWwuY29tIiwiaWF0IjoxNjM3NzQ3MTY0fQ.eZNF5kYpYZiOA3IXRaECWsoTOlkog7Yy0KORsr4vR0E"
    }

const handleSubmit = (e) => { 
  e.preventDefault();
  const objInput = {
    "title": list,
    "description": todo,
    "due_date": dueDate
  }
  

  axios.post('https://peaceful-citadel-71310.herokuapp.com/todo',objInput, {headers})
  .then((data) => {
    navigate(`/`);
  })
  .catch(err => {
    console.log(err);
  })
}

    
  return (
    <div className="bg-dashboard">
      <div className="w-page">
        <div className="page">
          <div className="w-header">
          <div className="header">
          <div className="img-header"><img src={dashboardImage} alt="" /></div> 
          <label htmlFor="">Add List</label>
          </div>
          </div>
          <div className="d-list">
              <form action="#" onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="">Todo List</label>
                <input type="text" id="" onChange={(e) => updateList(e.target.value.toUpperCase()) }/>
                <label htmlFor="">Todo First</label>
                <input type="text" id="" onChange={(e) => updateTodo(e.target.value.toUpperCase())}/>
                <label htmlFor="">Due Date</label>
                <input type="date" id="" onChange={(e) => updateDate(e.target.value)}/>

                <button type="submit" >Add New List</button>
              </form>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard