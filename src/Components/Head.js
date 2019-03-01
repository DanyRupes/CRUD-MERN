import React, { Component } from "react";
import {  Layout,
  Row,
  Col,
  Icon,
  Input,
  Button,
  Avatar,
  Dropdown,
  Menu } from "antd";
import { Link, Redirect } from 'react-router-dom'

class Head extends Component {
  state = {navigate:false}
  constructor(props){
    super(props);
  }


  render() {
    const { Header } = Layout;
    const size = "default";
    const  {navigate} = this.state

    const menu = (
      <Menu>
        <Menu.Item key="0">
          <a href="http://www.alipay.com/">1st menu item</a>
        </Menu.Item>
        <Menu.Item key="1">
          <a href="http://www.taobao.com/">2nd menu item</a>
        </Menu.Item>
        <Menu.Item key="3">3rd menu item</Menu.Item>
      </Menu>
    );


    return (
      <Header style={{ background: "#fff", padding: 0 }}>
        <Row>
          <Col span={1} xs={1}>
            <Icon type="search" />
          </Col>
          <Col span={7} xs={7} lg={7}>
            <Input style={{ width: 300, border: 0 }} placeholder="Search" />
          </Col>
          <Col span={7} xs={2} lg={7} />
          <Col span={3} xs={4} lg={3}>
            <Button type="primary" icon="plus" shape="round" size={size}>
                <Link to={{ pathname: '/register', state: { rowdy: 'A'} }}>Add Deals </Link>
            </Button>
          </Col>
          <Col span={2} xs={2} lg={1} style={{ marginTop: -5 }}>
            <Icon type="mail" theme="filled" style={{ fontSize: 20}} />
          </Col>
          <Col span={2} xs={3} lg={3} style={{ marginTop: -5 }}>
            <Icon type="environment"  style={{ fontSize: 20 }} />
            <a style={{color:'blue', paddingLeft:6}} href="#">Select Location</a>
          </Col>


          <Col span={2} xs={3} lg={2} style={{ marginTop: -5 }}>
            <Dropdown overlay={menu} trigger={["click"]}>
              <a style={{color:'green'}} className="ant-dropdown-link" href="#">
                <Avatar
                  size="large"
                  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                />

                <Icon type="caret-down" />
              </a>
            </Dropdown>
          </Col>
        </Row>
      </Header>
    );
  }
}
export default Head;