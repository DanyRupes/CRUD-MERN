import React, { Component } from "react";
import "./App.css";
import { HashRouter, Router, Route } from "react-router-dom";
// import Form_sam from "./Components/Form_sam";
import Mainpage from "./Components/Mainpage";
import Form_sam from "./Components/Form_sam";

// import Details from "./Components/Details";
// import View2 from "./Components/View2";
class App extends Component {
  componentDidMount() {
    // Call our fetch function below once the component mounts
  this.callBackendAPI()
    .then((res)=>{this.setState({ backend_connected:true})})
    .catch(err => console.log(err));
}
  // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
callBackendAPI = async () => {
  const response = await fetch('/letsgo');
  const body = await response.json();

  if (response.status !== 200) {
    throw Error(body.message) 
  }
  return body;
};

  
  render() {
    // return <Details />;
    return (
      <HashRouter>
        <div>
            <Route exact path="/" component={Mainpage} />
            <Route path="/register" component={Form_sam}/>
        </div>
      </HashRouter>
    )
  }
}

export default App;
