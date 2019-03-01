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
        <List
        bordered
        dataSource={this.state.data}
        renderItem={item => (
        <Card style={{ width: 1132, height: "fit-content" }}>
            <Col span={3}>
              <img
                src={item.img_file}
                width="100"
              />
            </Col>
            <Col span={6}>
              <Meta
                title={item.title}
                description={item.category}
                style={{ width: 200 }}
              />
            </Col>
          <div className="font">
            <Col span={1} />
            <Col span={4}>{item.dateO} </Col>
            <Col span={1}>
              <Divider type="vertical" />
            </Col>
            <Col span={2}>
              <Icon type="clock-circle" />
              {item.start_time}
            </Col>
            <Col span={2}>
              <Icon type="clock-circle" />
              {item.end_time}
            </Col>
            <Col span={2}>$ {item.price}</Col>
            <Col span={1}>
              <Divider type="vertical" />
            </Col>
            <Col span={2}>
           <Anchor />
            </Col>
            <Col span={2}>
              <Link to={{pathname:'/register',state:{edit_id:item._id}}}>
                <p style={{color:'blue'}}>Edit</p>
              </Link>
            </Col>
            <Col span={1}>
              <Divider type="vertical" />
            </Col>
            <Col span={2}>
           <Anchor />
            </Col>
        </div>
      </Card>)}/>
     
      
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
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div>
              {this.renderCards()}
          </div>
        </Content>
      </Layout>
    );
  }
}
export default Contents;
