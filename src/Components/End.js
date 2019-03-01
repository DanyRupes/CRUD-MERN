import React, { Component } from "react";
import { Layout } from "antd";
const { Footer } = Layout;
class End extends Component {
  render() {
    return (
      <Layout>
        <Footer style={{ maxHeight: "50px", textAlign: "center" }}>
          Raydeous ©2019 Created by The Blues Consultants.
        </Footer>
      </Layout>
    );
  }
}
export default End;