import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './index.css';
import List from './views/list';
import Dashboard from './views/dashboard';
import FormAddData from './views/form-add-data';
import SidebarList from './components/sidebar-list';
import reportWebVitals from './reportWebVitals';
import { compose, applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./store/reducers";

const composeEnhancers = compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <SidebarList />
    <Routes>
    <Route path="/" element={<Dashboard /> } />
    <Route path="/form-add-data" element={<FormAddData /> } />
    <Route path="/todo-list" element={<List /> } />
    <Route path="/todo-list/:id" element={<List /> } />
    </Routes>
  </BrowserRouter>,
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
