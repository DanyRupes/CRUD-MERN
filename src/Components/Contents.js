import React, { Component } from "react";
import {
  Layout,
  Card,
  Icon,
  Avatar,
  Divider,
  Col,
  Row,
  Breadcrumb, Spin, List, Anchor
} from "antd";
import { Link, Redirect, Navlink } from 'react-router-dom'
import moment from 'moment'
import axios from 'axios'


class Contents extends Component {

  state = {
    "loading":true,
    "id":"",
    data:[],
    cursor: 0
    // sample_data:[1,2,3,4]
  }

  componentWillMount(){
    this.setState({loading:true})
    console.log("Content propssss")
    console.log(this.props)
  }
  componentDidMount(){
    console.log("fetching")
       axios.get('/get_list')
        .then((out)=>{
          this.setState({loading:false, data: out.data })
          console.log(this.state.data)
      })
      .catch((err)=>console.log(err))
  }
componentWillUnmount(){

}
  renderCards(){
    // try { 
      // console.log(this.props)
      // const route_id  = this.props.state.route_id
      // // if(route_id==2 || route_id==3){
      //   return  <Redirect to="/register"/>
      // // }
    // }
    // catch(e){console.log(e)}
    if(!this.state.loading){ 
      console.log("this.props")
      const { Meta } = Card;
      console.log(this.state.data)
      return(
          <div style={{ background: '#ECECEC', padding: '30px' }}>
              <p style={{
               " font-size": "18px",
    "font-weight": "800",
    "margin-bottom": "13px",
    "margin-top": "10px",
              }}>Appliance Services</p>
              
          <Card bordered={false} style={{ width: 1080, flexDirection:'column' }}>  
              <Row gutter={60}>
              <Col span={5  }>
                  <Card
                  hoverable
                  style={{ width: 180 }}
                  border ={false}
                  cover={<img alt="example" src="https://d2vj71og9gdu4k.cloudfront.net/WEB/mrz/ApplianceServices.jpg" />}
                >
                 
                </Card>
              </Col>
              <Col span={4}>
                <Card style={{
                  margin: "auto",
    "text-transform": "uppercase",
    "font-size": "12px",
    "border":"1px solid #95a5a6",
    width:160,
    "padding": "0 20px",
                }} bordered={true}>

                <img src="https://d2vj71og9gdu4k.cloudfront.net/WEB/service/20180108-180714-e2e_ac.svg" alt="" class="circle" width="50" height="50" />
                <p style={{
                  "padding": "0 20px",
                  "margin-top": "6px",
                  "margin-bottom": "0"
                }}><span class="line-clamp line-clamp-2 ">AC</span></p>
                </Card>
              </Col>
              
              
              
              <Col span={4}>
                    <Card style={{
                      margin: "auto",
        "text-transform": "uppercase",
        "font-size": "12px",
        "padding": "0 20px",
        "border":"1px solid #95a5a6",
        width:160
                    }} bordered={true}>

                    <img src="https://d2vj71og9gdu4k.cloudfront.net/WEB/service/20180108-185603-e2e_water_purifier.svg" alt="" class="circle" width="50" height="50" />
                    <p style={{
                      "margin-top": "6px",
                      "margin-bottom": "0",
                      width: "106px",
                      "margin-left": "-20px"
                    }}><span class="line-clamp line-clamp-2 ">Water Purifier</span></p>
                    </Card>  
              </Col>
              <Col span={4}>
                    <Card style={{
                      margin: "auto",
        "text-transform": "uppercase",
        "font-size": "12px",
        "border":"1px solid #95a5a6",
        width:160,
        "padding": "0 20px",
                    }} bordered={true}>

                    <img src="https://d2vj71og9gdu4k.cloudfront.net/WEB/service/20180108-185930-e2e_refrigerator.svg" alt="" class="circle" width="50" height="50" />
                    <p style={{
                      "margin-top": "6px",
                      "margin-bottom": "0",
                      "padding": "0 20px",
                      "margin-left": "-24px"
                    }}><span class="line-clamp line-clamp-2 ">Refrigerator</span></p>
                    </Card>  
              </Col>
            

              <Col span={4}>
                <Card style={{
                  margin: "auto",
    "text-transform": "uppercase",
    "font-size": "12px",
    "border":"1px solid #95a5a6",
    width:160,
    "padding": "0 20px",
                }} bordered={true}>

                <img src="https://d2vj71og9gdu4k.cloudfront.net/WEB/service/20180108-190058-e2e_geyser.svg" alt="" class="circle" width="50" height="50" />
                <p style={{
                  "margin-top": "6px",
                  "margin-bottom": "0",
                  "padding": "0 20px",
                  "margin-left": "-15px"
                }}><span class="line-clamp line-clamp-2 ">Geyser</span></p>
                </Card>
              </Col>
              
              
              
              <Col span={4}>
                    <Card style={{
                      margin: "auto",
        "text-transform": "uppercase",
        "font-size": "12px",
        "border":"1px solid #95a5a6",
        "borderTop":"0px ",
        width:160,
        "padding": "0 20px",
                    }} bordered={true}>

                    <img src="https://d2vj71og9gdu4k.cloudfront.net/WEB/service/20180108-185652-e2e_computer_repair.svg" alt="" class="circle" width="50" height="50" />
                    <p style={{
                      
                      "margin-top": "6px",
                      "margin-bottom": "0",
                      width: "106px",
                      "margin-left": "-20px"
                    }}><span class="line-clamp line-clamp-2 ">Computer Repair</span></p>
                    </Card>  
              </Col>
              <Col span={4}>
                    <Card style={{
                      margin: "auto",
        "text-transform": "uppercase",
        "font-size": "12px",
        "border":"1px solid #95a5a6",
        "borderTop":"0px ",
        width:160,
        "padding": "0 20px",
                    }} bordered={true}>

                    <img src="https://d2vj71og9gdu4k.cloudfront.net/WEB/service/20180108-190244-e2e_microwave_oven.svg" alt="" class="circle" width="50" height="50" />
                    <p style={{
                      "margin-top": "6px",
                      "margin-bottom": "0",
                      width: "106px",
                      "margin-left": "-20px"
                    }}><span class="line-clamp line-clamp-2 ">Microwave Oven</span></p>
                    </Card>  
              </Col>
              <Col span={4}>
                    <Card style={{
                      margin: "auto",
        "text-transform": "uppercase",
        "font-size": "12px",
        "border":"1px solid #95a5a6",
        "borderTop":"0px ",
        width:160,
        "padding": "0 20px",
        // marginRight:"0"
                    }} bordered={true}>

                    <img src="https://d2vj71og9gdu4k.cloudfront.net/WEB/service/20180108-185739-e2e_tv.svg" alt="" class="circle" width="50" height="50" />
                    <p style={{
                      "padding": "0 20px",
                      "margin-top": "6px",
                      "margin-bottom": "0",
                      
                    }}><span class="line-clamp line-clamp-2 ">TV</span></p>
                    </Card>  
              </Col>
              <Col span={4}>
                    <Card style={{
                      margin: "auto",
        "text-transform": "uppercase",
        "font-size": "12px",
        "border":"1px solid #95a5a6",
        "borderTop":"0px ",
        width:160,
        "padding": "0 20px",
                    }} bordered={true}>

                    <p style={{
                      "padding": "0 20px",
                      "margin-top": "6px",
                      "margin-bottom": "0",
                      "padding": "0 20px",
                    }}><span class="line-clamp line-clamp-2 "><a style={{color:"blue"}} href="#">View All</a></span></p>
                    </Card>  
              </Col>
            </Row>
          </Card>
        </div>
      
      )
    }
    else {
      return (<Spin size="large"/>)
    }

  }

  render() {
    const { Content } = Layout;
    const { CoLinkntent } = Layout;
    

    return (
      <Layout>
        <Content style={{ margin: "0 16px" }}>

          <div style={{backgroundColor:'#f5f6fa', paddingLeft:60}}>
          <Row gutter={60}>
              <Col span={4}>
                  <div style={{
                    margin: "auto",
        "text-transform": "uppercase",
        "font-size": "12px",
        "padding": "0 20px",
        width:160
                  }} bordered={true}>

                  <img src="https://d2vj71og9gdu4k.cloudfront.net/WEB/service/e2e_carpentry.svg" alt="" class="circle" width="50" height="50" />
                  <p style={{
                    "margin-top": "6px",
                    "margin-bottom": "0",
                    width: "106px",
                    "margin-left": "-20px"
                  }}><span class="line-clamp line-clamp-2 ">PLUMBING</span></p>
                  </div>  
        </Col>
              <Col span={4}>
                  <div style={{
                    margin: "auto",
        "text-transform": "uppercase",
        "font-size": "12px",
        "padding": "0 20px",
        width:160
                  }} bordered={true}>

                  <img src="https://d2vj71og9gdu4k.cloudfront.net/WEB/service/20180108-185603-e2e_water_purifier.svg" alt="" class="circle" width="50" height="50" />
                  <p style={{
                    "margin-top": "6px",
                    "margin-bottom": "0",
                    width: "106px",
                    "margin-left": "-20px"
                  }}><span class="line-clamp line-clamp-2 ">CARPENTRY</span></p>
                  </div>  
        </Col>
              <Col span={4}>
                  <div style={{
                    margin: "auto",
        "text-transform": "uppercase",
        "font-size": "12px",
        "padding": "0 20px",
        width:160
                  }} bordered={true}>

                  <img src="https://d2vj71og9gdu4k.cloudfront.net/WEB/service/e2e_electrical.svg" alt="" class="circle" width="50" height="50" />
                  <p style={{
                    "margin-top": "6px",
                    "margin-bottom": "0",
                    width: "106px",
                    "margin-left": "-20px"
                  }}><span class="line-clamp line-clamp-2 ">ELECTRICAL</span></p>
                  </div>  
        </Col>
              <Col span={4}>
                  <div style={{
                    margin: "auto",
        "text-transform": "uppercase",
        "font-size": "12px",
        "padding": "0 20px",
        width:160
                  }} bordered={true}>

                  <img src="https://d2vj71og9gdu4k.cloudfront.net/WEB/service/e2e_packers_movers.svg" alt="" class="circle" width="50" height="50" />
                  <p style={{
                    "margin-top": "6px",
                    "margin-bottom": "0",
                    width: "106px",
                    "margin-left": "-20px"
                  }}><span class="line-clamp line-clamp-2 ">PACKERS &AMP; MOVERS </span></p>
                  </div>  
        </Col>
              <Col span={4}>
                  <div style={{
                    margin: "auto",
        "text-transform": "uppercase",
        "font-size": "12px",
        "padding": "0 20px",
        width:160
                  }} bordered={true}>

                  <img src="https://d2vj71og9gdu4k.cloudfront.net/WEB/service/e2e_painting.svg" alt="" class="circle" width="50" height="50" />
                  <p style={{
                    "margin-top": "6px",
                    "margin-bottom": "0",
                    width: "106px",
                    "margin-left": "-20px"
                  }}><span class="line-clamp line-clamp-2 ">PAINTING</span></p>
                  </div>  
        </Col>
            </Row>
          
          </div>

          <div>
              {this.renderCards()}
          </div>
        </Content>
      </Layout>
    );
  }
}
export default Contents;
