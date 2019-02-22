import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Container } from "reactstrap";
import Details from "./Details";
import axios from 'axios';

import {
  Card,
  message,
  Layout,
  Input,
  Row,
  Col,
  DatePicker,
  Form,
  TimePicker,
  Menu,
  Dropdown,
  Icon,
  Upload,
  Button
} from "antd";

class Form_sam extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      date: "",
      start_time: "",
      end_time: "",
      title: "",
      price: "",
      category: "",
      img: "",
      status: ""
    };
    this.onDate = this.onDate.bind(this)
    this.onStartTime = this.onStartTime.bind(this)
    this.onEndTime = this.onEndTime.bind(this)
    this.onTitle = this.onTitle.bind(this)
    this.onPrice = this.onPrice.bind(this)
    

    this.onCategory = this.onCategory.bind(this)
    this.onStatus = this.onStatus.bind(this)
    this.onSubmit = this.onSubmit.bind(this) 
  }

  onDate(date, dateString) {
   
    console.log("date: ", dateString);
    this.setState({date:dateString}) 
  }

  onChange(time, timeString) {
    console.log("timeString: ", timeString);
  }
  
  onStartTime(val){
    try {console.log(val._d)
    this.setState({start_time:val})}

    catch(e){console.log(e)}
      
  }
  
  onEndTime(val){
    try {console.log(val._d)
    this.setState({end_time:val})}
    
    catch(e){console.log(e)} 
  }

  onTitle(val){
    console.log(val.target.value)
    this.setState({title:val.target.value}) 
  }

  onPrice(val) {
    console.log(val.target.value)
    this.setState({price:val.target.value})
  }

  onCategory(val) {
    console.log(val.key)
    this.setState({category:val.key==1?"Item1":val.key==2?"Item2":"Item3"})
  }

  
  uploadData(data) {
    console.log(data)
  }
  
  onStatus(val) {
    console.log(val.key)
    this.setState({status:val.key==1?"Active":"InActive"})
  }
  

  
      async submit() {
        const { date, start_time, end_time, title, price, category, status } = this.state
          const res = await axios.post('/submit', {
            date, start_time, end_time, title, price, category, status
          }).then((res)=>{console.log("Success");return "Success"})
          .catch((err)=>{console.log("failed");return "Failed"})
          
      }
  

  onSubmit() {
    console.log("Submitting")
    console.log(this.state)
    
    this.submit()

    // this.props.onSubmit(this.state);
  } 
      // onOk(value) {
      //   // console.log("onOk: ", value)
      // }
  render() {
    const { RangePicker } = DatePicker;
    const { Header, Footer, Sider, Content } = Layout;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 16 },
        sm: { span: 4 }
      }
    };
    const menu = (
      <Menu>
        <Menu.Item key="1" onClick={this.onCategory} >
          <Icon type="user" />
          1st item
        </Menu.Item>
        <Menu.Item key="2" onClick={this.onCategory}  >
          <Icon type="user" />
          2nd item
        </Menu.Item>
        <Menu.Item key="3"  onClick={this.onCategory} >
          <Icon type="user" />
          3rd item
        </Menu.Item>
      </Menu>
    );
    const statusMenu = (
      <Menu>
        <Menu.Item key="1" onClick={this.onStatus} >
          <Icon type="user" />
          Active
        </Menu.Item>
        <Menu.Item key="2" onClick={this.onStatus}  >
          <Icon type="user" />
          InActive
        </Menu.Item>

      </Menu>
    );

    const props = {
      name: "file",
      action: "//jsonplaceholder.typicode.com/posts/",
      headers: {
        authorization: "authorization-text"
      },
      onChange(info) {
        if (info.file.status !== "uploading") {
          console.log(info.file, info.fileList);
        }
        if (info.file.status === "done") {
          this.setState({img:info})
          message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === "error") {
          message.error(`${info.file.name} file upload failed.`);
        }
      }
    };

   

    return (
      <div className="back">
        <br />
        <h1 className="head">REGISTRATION FORM</h1>
        <Row>
          <Col span={8} />
          <Col className="content" span={8}>
            <Form>
              <div className="text">
                <Form.Item {...formItemLayout} label="Date">
                  <div className="element">
                    <DatePicker
                      className="inp"
                      showTime
                      placeholder="Select Date"
                      onChange={this.onDate}
                      onOk={this.onOk}
                    />
                  </div>
                </Form.Item>
              </div>
              <div className="text">
                <Form.Item {...formItemLayout} label="Start Time">
                  <div className="element">
                    <TimePicker
                      className="inp"
                      use12Hours
                      format="h:mm a"
                      onChange={this.onStartTime}
                    />
                  </div>
                </Form.Item>
              </div>
              <div className="text">
                <Form.Item {...formItemLayout} label="End Time">
                  <div className="element">
                    <TimePicker
                      className="inp"
                      use12Hours
                      format="h:mm a"
                      onChange={this.onEndTime}
                    />
                  </div>
                </Form.Item>
              </div>
              <div className="text">
                <Form.Item {...formItemLayout} label="Title">
                  <div className="element">
                    <Input className="inp" type="text" onChange={this.onTitle} />
                  </div>
                </Form.Item>
              </div>
              <div className="text">
                <Form.Item {...formItemLayout} label="Price">
                  <div className="element">
                    <Input className="inp" type="number" onChange={this.onPrice} />
                  </div>
                </Form.Item>
              </div>
              <div className="text">
                <Form.Item {...formItemLayout} label="Category" >
                  <div className="element">
                    <Dropdown overlay={menu} >
                      <Button className="inp">
                        CATEGORY
                        <Icon type="down" />
                      </Button>
                    </Dropdown>
                  </div>
                </Form.Item>
              </div>
              <div className="text">
                <Form.Item {...formItemLayout} label="Image">
                  <Upload {...props} data={this.uploadData}>
                    <div className="element">
                      <Button className="inp">
                        <Icon type="upload" /> CLICK TO UPLOAD
                      </Button>
                    </div>
                  </Upload>
                </Form.Item>
              </div>
              <div className="text">
                <Form.Item {...formItemLayout} label="Status">
                  <div className="element">
                    <Dropdown overlay={statusMenu}>
                      <Button className="inp">
                        STATUS <Icon type="down" />
                      </Button>
                    </Dropdown>
                  </div>
                </Form.Item>
              </div>
              <div>
                <Link to="/#"> 
                  
                
                  <Button onClick={this.onSubmit} className="but">Save</Button>
                </Link>
                <span style={{ padding: 40 }} />
                <Button className="but">Cancel </Button>
              </div>
            </Form>
          </Col>
          <Col span={8} />
        </Row>
      </div>
    );
  }
}
export default Form_sam;
