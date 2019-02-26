import React, { Component } from "react";
import ReactDOM from "react-dom";

import "antd/dist/antd.css";
import { Layout, Menu, Breadcrumb, Icon, Row, Col, Input, Button, Avatar } from "antd";
import Head from "./Head";
import Contents from "./Contents";
import Form_sam from "./Form_sam";
import Routers from './router'
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class Mainpage extends Component {

  constructor(props) {
    super(props)

    this.handler = this.handler.bind(this)
  }

  state = {
    collapsed: false,
    page:'home'
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };



  // renderPages(){
  //   switch(this.state.page){
  //     case 'register': 
  //       return(<Form_sam edit_id='1'/>)
  //     default :
  //     return (<Contents />)

  //   }
  // }

  handler = ()=>{
    this.setState({page:'register'})  
  }



  render() {
    const { Header } = Layout;
    const size = "default";

    return (
                <Routers route_id={this.props.route_id} />
    );
  }
}
export default Mainpage;