import './list.css';
import dotsImage from '../../images/dots.png';
import listImage from '../../images/list.png';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import allStore from "../../store/actions";

const List = () => {
  const dispatch = useDispatch();
  const data = useSelector(({listPost}) => listPost);
  const [state, updateState] = useState(null)
  
  useEffect(() => {
    dispatch(allStore.fetchData())
  }, [dispatch]);

  useEffect(() => {
    updateState(data)
  },[data])
  
  if (state === null ) {return  <div className="bg-list">Loading</div>}

  if (state.data === undefined) {
    return (
    <div className="bg-list">
      <div className="w-page">
        <div style= {{ justifyContent : "center", alignItems : "center" }}>
            <h1>Loading ...</h1>
        </div>
      </div>
    </div>
    )}

  const detail = state.data.filter((el) => el.title === "EVENT" )
  
  return (
    <div className="bg-list">
      <div className="w-page">
        <div className="page">
          <div className="w-header">
          <div className="header">
          <div className="img-header"><img src={listImage} alt="" /></div> 
          <label htmlFor="">{detail[0].title}</label>
          </div>
          <button><img src={dotsImage} alt="" /></button>
          </div>
          <div className="page-list">
          <h2>Todo-List</h2><br />
          {detail.map((el, i) => 
          <div className="w-container" key={i}>
          <label className="container">{el.description}  
          <input type="checkbox"  id="a" />
          <span className="checkmark"></span>
          </label>
          </div>
          )}
          <label htmlFor="a"></label>
        </div>
        </div>
      </div>
    </div>
  );
}

export default List