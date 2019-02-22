import "antd/dist/antd.css";
import { Card, Layout, Menu, Icon, Divider } from "antd";
import React, { Component } from "react";
import { HashRouter, Route, NavLink } from "react-router-dom";
import View1 from "./View1";
import View2 from "./View2";
import { Row, Col } from "antd";

class Details extends Component {
  navigate = pathname => () => {
    this.setState({ selected: pathname });
  };
  render() {
    const { SubMenu } = Menu;
    const { Header, Content, Sider } = Layout;
    return (
      <HashRouter>
        <Layout>
          <Header className="header">
            <div className="logo" />
          </Header>
          <Layout>
            <Sider width={200} style={{ background: "#fff" }}>
              <Menu
                mode="inline"
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                style={{ height: "100%", borderRight: 0 }}
              >
                <SubMenu
                  key="sub1"
                  title={
                    <span>
                      <Icon type="user" />
                      subnav 1
                    </span>
                  }
                >
                  <Menu.Item key="1">
                    <NavLink to="/View1">option1</NavLink>
                  </Menu.Item>
                  <Menu.Item key="2">
                    <NavLink to="/View2">Option 2</NavLink>
                  </Menu.Item>
                  <Menu.Item key="3">
                    <NavLink to="/View2">option3</NavLink>
                  </Menu.Item>
                  <Menu.Item key="4">option4</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub2"
                  title={
                    <span>
                      <Icon type="laptop" />
                      subnav 2
                    </span>
                  }
                >
                  <Menu.Item key="5">option5</Menu.Item>
                  <Menu.Item key="6">option6</Menu.Item>
                  <Menu.Item key="7">option7</Menu.Item>
                  <Menu.Item key="8">option8</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub3"
                  title={
                    <span>
                      <Icon type="notification" />
                      subnav 3
                    </span>
                  }
                >
                  <Menu.Item key="9">option9</Menu.Item>
                  <Menu.Item key="10">option10</Menu.Item>
                  <Menu.Item key="11">option11</Menu.Item>
                  <Menu.Item key="12">option12</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Layout style={{ padding: "0 24px 24px" }}>
              <Content
                style={{
                  background: "#fff",
                  padding: 24,
                  margin: 0,
                  minHeight: 600
                }}
              >
                <div>
                  <Route path="/View2" component={View2} />
                  <Route exact path="/View1" exact component={View1} />
                </div>
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </HashRouter>
    );
  }
}
export default Details;
