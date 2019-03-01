import React, { Component } from "react";
import "./App.css";
import {NavLink , HashRouter,BrowserRouter, Router, Route, Redirect } from "react-router-dom";
import "antd/dist/antd.css";
import { Layout, Menu, Breadcrumb, Icon, Row, Col, Input, Button, Avatar ,Card} from "antd";
import Form_sam from "./Components/Form_sam";
import Contents from "./Components/Contents";
import Head from './Components/Head'
import End from "./Components/End";
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;




class App extends Component {

  state = {
    collapsed: false,
    page:'home',
    route_id : '1'
  };


  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  constructor(props) {
    super(props) 
    this.handler = this.handler.bind(this)
  }


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

  handler = ()=>{
    console.log("handle ittt-----------------")
    // if(this.state.route_id==1) {
    //   this.setState({route_id:2}) //register(add deals)
    // }
    // else 
    // this.setState({route_id:3}) //register(add deals)
    return <NavLink to="/register"/>
  }
  

  render() {
    const { Header } = Layout;
    const size = "default";

    return (
      <BrowserRouter>
        <div>
        <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1">
              <Icon type="dashboard" />
              <span>Home</span>
            </Menu.Item>
            <Menu.Item key="2">
              <NavLink exact to="/Account">
                <Icon type="clock-circle" />
                <span>My Account</span>
              </NavLink>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="calendar" />
              <span>Services</span>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="rise" />
              <span>Cart</span>
            </Menu.Item>
            <Menu.Item key="5">
              <Icon type="setting" />
              <span>Logout</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
        <Head handler={this.handler}/>
                    

        <div className="contentt">
            <Route exact  path="/" component={Contents}/>
            <Route path="/register" component={Form_sam}/>
        </div>

          <End />
        </Layout>
      </Layout>
    
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
