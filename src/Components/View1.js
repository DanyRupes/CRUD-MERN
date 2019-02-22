import React, { Component } from "react";
import { Row, Col, Card } from "antd";

class View1 extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col span={8}>
            <Card
              title="CARD 1"
              cover={
                <img
                  alt="example"
                  src="https://static1.squarespace.com/static/540e66dee4b046661226f6c0/t/547d1a17e4b0e4a56263321c/1417484824530/?format=1000w"
                  width="100px"
                  height="165px"
                />
              }
              style={{ width: "300px", margin: "50px" }}
            >
              <p>
                15-02-2019
                <br />
                10.00AM - 1:00PM
                <br />
                $150.00
              </p>
            </Card>
          </Col>
          <Col span={8}>
            <Card
              title="CARD 2"
              cover={
                <img
                  width="100px"
                  height="165px"
                  alt="example"
                  src="http://www.rambina.com/wp-content/uploads/2016/05/website-design-background-1.jpg"
                />
              }
              style={{ width: "300px", margin: "50px" }}
            >
              <p>
                16-02-2019
                <br />
                8.00AM - 5:00PM
                <br />
                $2000.00
              </p>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
export default View1;
