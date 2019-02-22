import React, { Component } from "react";
import { Row, Col, Card } from "antd";
class View2 extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col span={12}>
            <div className="seccard">
              <Card
                style={{
                  height: "170px",
                  width: "900px",
                  margin: "50px"
                }}
                title="CARD 1"
              >
                <Row>
                  <Col span={1}>
                    <img
                      width="100px"
                      height="70px"
                      alt="example"
                      src="https://static1.squarespace.com/static/540e66dee4b046661226f6c0/t/547d1a17e4b0e4a56263321c/1417484824530/?format=1000w"
                    />
                  </Col>
                  <p>
                    15-02-2019
                    <br />
                    10.00AM - 1:00PM
                    <br />
                    $150.00
                  </p>
                </Row>
              </Card>
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Card
              style={{
                height: "170px",
                width: "900px",
                margin: "50px"
              }}
              title="CARD 2"
            >
              <Row>
                <Col span={1}>
                  <img
                    width="100px"
                    height="70px"
                    alt="example"
                    src="http://www.rambina.com/wp-content/uploads/2016/05/website-design-background-1.jpg"
                  />
                </Col>
                <p>
                  16-02-2019
                  <br />
                  8.00AM - 5:00PM
                  <br />
                  $2000.00
                </p>
              </Row>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
export default View2;
