import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Show from "./Show";
import Update from "./Update";

const Nomatch=()=>{
  return(

    <div>NOT FOUND</div>
  );
}
ReactDOM.render(
  <div>
    <BrowserRouter>
    <Switch>
        <Route exact path="/" component={App} />
        <Route path="/show" component={Show} />
        {/* <Route path="/{id}/update" component={Update} /> */}
        <Route component={Nomatch}/>
      </Switch>
    </BrowserRouter>
  </div>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
