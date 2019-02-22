import React, { Component } from "react";
import {
  Layout,
  Card,
  Icon,
  Avatar,
  Divider,
  Col,
  Row,
  Breadcrumb, Spin, List
} from "antd";
import { Link } from 'react-router-dom'
import axios from 'axios'

class Contents extends Component {

  state = {
    "loading":true,
    "id":"",
    data:[],
    sample_data:[1,2,3,4]
  }

  componentWillMount(){
    this.setState({loading:true})
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

  renderCards(){
    
    if(!this.state.loading){ 
      console.log("start now")   
      const { Meta } = Card;
      console.log(this.state.data)
      return(
        <List
        bordered
        dataSource={this.state.data}
        renderItem={item => (<Card style={{ width: 1050, height: "fit-content" }}>
        <Col span={3}>
          <img
            src="http://hdwallpapersrocks.com/wp-content/uploads/2013/10/Small-plant-of-tree-beautiful-nature.jpg"
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
          <Col span={4}>{item.date} </Col>
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
          <Link to={{"pathname":"/register","edit_id":item._id}} >Edit</Link>

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
