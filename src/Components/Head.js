import React, { Component } from "react";
import { Layout, Row, Col, Icon } from "antd";

class Head extends Component {
  render() {
    const { Header } = Layout;
    return (
      <Layout>
        <Header style={{ background: "#fff", padding: 0 }}>
          <Row>
            <Col>
              <Icon type="search" />
            </Col>
          </Row>
        </Header>
      </Layout>
    );
  }
}
export default Head;
