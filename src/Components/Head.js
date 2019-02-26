import React, { Component } from "react";
import { Layout, Row, Col, Icon, Input, Button, Avatar } from "antd";
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


    return (
      <Header style={{ background: "#fff", padding: 0 }}>
        <Row>
          <Col span={1}>
            <Icon type="search" />
          </Col>
          <Col span={7}>
            <Input style={{ width: 300, border: 0 }} placeholder="Search" />
          </Col>
          <Col span={7} />
          <Col span={3}>
            <Button type="primary" icon="plus" shape="round" size={size}>
              <Link to={{ pathname: '/register', state: { rowdy: 'A'} }}>Add Deals </Link> 
            </Button>
          </Col>
          <Col span={2}>
            <Icon type="mail" theme="filled" style={{ fontSize: 25 }} />
          </Col>
          <Col span={2}>
            <Icon type="bell" theme="filled" style={{ fontSize: 25 }} />
          </Col>
          <Col span={2} style={{ marginTop: -5 }}>
            <Avatar
              size="large"
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            />
            <Icon type="caret-down" />
          </Col>
        </Row>
      </Header>
    );
  }
}
export default Head;