import React from 'react';

import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomeTemplate from "./template/HomeTemplate"
import AdminTemplate from "./template/AdminTemplate"

import PageNotFound from "./container/Home/PageNotFound"
import { routesHome, routesAdmin } from "./routes";


function App() {

const showMenuHome = (routes)=>{
  if(routes && routes.length >0){
    return routes.map((item,index)=>{
      return <HomeTemplate key={index} exact={item.exact} path={item.path} Component={item.Component} />
    })
  } 
}

const showMenuAdmin = (routes) =>{
  if(routes && routes.length >0){
    return routes.map((item,index)=>{
      return <AdminTemplate key={index} exact={item.exact} path={item.path} Component={item.Component} />
    })
  }
}

  return (
    <div >
      
      <BrowserRouter >
     
          <Switch>
              {showMenuHome(routesHome)}

              {showMenuAdmin(routesAdmin)}

              <Route path="" component={PageNotFound} />
          </Switch>
      </BrowserRouter>

    </div>
  );

}


export default App;
