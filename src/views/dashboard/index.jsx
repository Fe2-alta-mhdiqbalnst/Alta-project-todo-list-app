import './dashboard.css';
import dashboardImage from '../../images/dashboard.png';
import addImage from '../../images/add.png';
import listImage from '../../images/list.png'
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import allStore from "../../store/actions";

const Dashboard = () => {
  const dispatch = useDispatch();
  const data = useSelector(({listPost}) => listPost);
  const [state, updateState] = useState(null);
  let navigate = useNavigate();

  useEffect(() => {
    dispatch(allStore.fetchData())
  }, [dispatch]);

  useEffect(() => {
    updateState(data);
  },[data])

  if (state === null ) {return  <div className="bg-dashboard">Loading</div>}

  if (state.data === undefined) {
    return (
    <div className="bg-dashboard">
      <div className="w-page">
        <div style= {{ justifyContent : "center", alignItems : "center" }}>
            <h1>Loading ...</h1>
        </div>
      </div>
    </div>
    )};
    
    const title = state.data.map((el) => el.title);
    const uniq = title.reduce(function(a,b){
      if (a.indexOf(b) < 0 ) a.push(b);
      return a;
    },[]);

    const formAddData = () => {
      navigate(`/form-add-data`);
    }


    
  return (
    <div className="bg-dashboard">
      <div className="w-page">
        <div className="page">
          <div className="w-header">
          <div className="header">
          <div className="img-header"><img src={dashboardImage} alt="" /></div> 
          <label htmlFor="">Dashboard</label>
          </div>
          </div>
          <div className="d-list">
            {uniq.map((el) => 
              <div className="list">
                <div className="b-list">
                  <img src={listImage} alt="list-image" width="30px" />
                </div>
                <label> {el}</label>
              </div>
            )}
        <div className="add-list" onClick={() => formAddData()}><img src={addImage} alt="add-image" width="50px"/></div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard