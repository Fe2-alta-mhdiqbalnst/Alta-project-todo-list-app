import './sidebar-list.css';
import logo from '../../images/to-do-list.png'
import dashboardImage from '../../images/dashboard.png';
import listImage from '../../images/list.png';
import user from '../../images/user.png';
import logoutImage from '../../images/log-out.png';
import { useNavigate } from 'react-router-dom';


const SidebarList = () => {
  const locationPathName = window.location.pathname;
    let pathName = locationPathName.substring(1, locationPathName.lastIndexOf('/'));
    let PathList = locationPathName.substring(locationPathName.lastIndexOf('/') + 1);
  
    let display = "";
    let active = "";
    let activeList = "";
    if ( pathName === 'todo-list') {
       display = "d-active";
    }else {
        display = "d-none";
    }
    
    if  (pathName === '/') {
        active = "active";
    }

    if  (PathList === 'form-add-data') {
      active = "";
    }
    
    if ( PathList === "r" ) {
        activeList = "active";
    }
  // const navigate = useNavigate();
  const handleRoute = () => {
    // navigate(`/`);
  }

 
  return (
    <>
    <div className="bg-sidebar">
      <div className="wrapper-sidebar"> 
      <div className="logo"><img src={logo} alt="" /><label htmlFor="">Todo-List-App</label></div>
          <div className="w-dashboard">
            <div className={"menu-dashboard " + active}><img src={dashboardImage} alt="" width="20px"/><label 
            onClick={() => handleRoute()}
            >Dashboard</label></div>
            <div className={"list-task " + display}>
              <p>Lists</p>
              <div className={"task " + activeList}>
                <img src={listImage} alt="" width="20px"/>
                <label>Events</label>
              </div>
              <div className="task">
                <img src={listImage} alt="" width="20px"/>
                <label>Work</label>
              </div>
              <div className="task">
                <img src={listImage} alt="" width="20px"/>
                <label>Traveler</label>
              </div>
            </div>
            <div className="w-user">
              <div className="user-img"><img src={user} alt="user" width="20px"/></div>
              <p>Lukman</p>
              <img className="logout" src={logoutImage} alt="" width="18px"/>
            </div>
          </div>
      </div>
    </div>

    <div id="page"></div>
    
    </>
    

    
  )
}

export default SidebarList;