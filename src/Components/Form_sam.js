import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import ReactDOM from "react-dom";
import moment from 'moment'
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
      id:"",
      dateO:moment(),
      dates:moment(),
      updated:false,
      start_time: "",
      start_times:moment(),
      end_time: "",
      end_times:moment(),
      title: "",
      price: "",
      category: "Select Category",
      img: "",
      status: "Set Status",
      loading:true,
      redirect: false,
      submitType:1,
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


  componentWillMount(){
    console.log(this.props)
   try{
     const { edit_id } = this.props.location.state
     console.log(edit_id) //this.props.location.edit_id
     if(edit_id!=undefined){
          axios.post('/edit_this', {
            "id":edit_id
          })
          .then((out)=>{
            console.log(out.data)
            //  this.setState({date:out.data.date})
            
            this.setState({
              "dateO":out.data.dateO,
              dates:out.data.dates,
              updated:true,
              submitType:2,
              "id":out.data._id,
            start_time:out.data.start_time,end_time:out.data.end_time,
            start_times:out.data.start_times, end_times:out.data.end_times,
            title:out.data.title,price:out.data.price,category:out.data.category,
            status:out.data.status})
            
            console.log("----------------------------")
            console.log(this.state.dates)
 
      })
      .catch((err)=>console.log(err))
     }else {
       console.log("startEdit")
     }
     
   } 
   catch(e){console.log(e)}
  }




  onDate(date, dateString, a) {
   console.log(dateString)
   console.log(date)
    console.log("dates: ",moment(dateString).format());
      if(date!=null)
        this.setState({dateO:dateString,
          dates:moment(dateString).format()})
      else
      console.log("date null")
        //02/01/2019
  }

  onChange(time, timeString) {
    console.log("timeString: ", timeString);
  }
  
  onStartTime(val){
    console.log(val)
    try { console.log(moment(val._d).format('LT'))
    this.setState({start_time:moment(val._d).format('LT'), start_times:val})}
    
    catch(e){console.log(e)}
    
  }
  
  onEndTime(val){
    console.log(val)
    try {console.log(moment(val._d).format('LT'))
    this.setState({end_time:moment(val._d).format('LT'),end_times:val})}
    
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
        if(this.state.submitType==1){ //first time
          const { dateO,dates, start_time,start_times, end_time,end_times, title, price, category, status } = this.state
          const res = await axios.post('/submit', {
            dates,dateO, start_time,start_times, end_time,end_times, title, price, category, status
          }).then((res)=>{
            this.props.history.push('/')
            // this.setState({loading:false, redirect:true}
              
            //   );
          console.log("Success");
          
          return "success"
          })
          .catch((err)=>{this.setState({loading:false});console.log("failed");return "Failed"})
        }
        else{
          const { id, dateO,dates, start_time,start_times, end_time,end_times, title, price, category, status } = this.state
          const res = await axios.post('/update_this', {id, 
            dates,dateO, start_time,start_times, end_time,end_times, title, price, category, status
          }).then((res)=>{
            this.props.history.push('/')
            // this.setState({loading:false, redirect:true}
              
            //   );
          console.log("Success");
          
          return "success"
          })
          .catch((err)=>{this.setState({loading:false});console.log("failed");return "Failed"})
        }
        
          
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


      redirecter(){
        
      }
  render() {


    if(this.state.redirect) {
      console.log("please redirect")
      console.log(this.props.location.pathname)
    }
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
                  {
                    this.state.updated?
                    <DatePicker className="inp"
                    placeholder="Select Date"
                    onOk={this.onOk} 
                    showTime
                    mode='date'
                    value={moment(this.state.dates)}
                    format={'lll'}
                    allowClear={false}
                    onPanelChange={()=>console.log("onPanelChange")}
                    onOpenChange={()=>console.log("onOpenChange")}
                    onChange={(date, dateString) => this.onDate(date, dateString)} 
                   />:
                   <DatePicker className="inp"
                   placeholder="Select Date"
                   onOk={this.onOk} 
                   showTime
                   mode='date'
                   format={'lll'}
                   onChange={(date, dateString) => this.onDate(date, dateString)} 
                  />
                    
                  }
                  </div>
                </Form.Item>
              </div>
              <div className="text">
                <Form.Item {...formItemLayout} label="Start Time">
                  <div className="element">
                    {

                      this.state.updated?
                      <TimePicker
                      className="inp"
                      use12Hours
                      format="h:mm a"
                    allowClear={false}
                      value={moment(this.state.start_times)}
                      onChange={this.onStartTime}
                    />:
                    <TimePicker
                    className="inp"
                    use12Hours
                    format="h:mm a"
                    onChange={this.onStartTime}
                  />
                    }

                    
                  </div>
                </Form.Item>
              </div>
              <div className="text">
                <Form.Item {...formItemLayout} label="End Time">
                  <div className="element">
                  {

                    this.state.updated?
                    <TimePicker
                      className="inp"
                      use12Hours
                      format="h:mm a"
                    allowClear={false}

                      value={moment(this.state.end_times)}
                      onChange={this.onEndTime}
                    /> :
                    <TimePicker
                    className="inp"
                    use12Hours
                    format="h:mm a"
                    onChange={this.onEndTime}
                  />}
                  </div>
                </Form.Item>
              </div>
              <div className="text">
                <Form.Item {...formItemLayout} label="Title">
                  <div className="element">
                    <Input className="inp" type="text" onChange={this.onTitle} value={this.state.title} />
                  </div>
                </Form.Item>
              </div>
              <div className="text">
                <Form.Item {...formItemLayout} label="Price">
                  <div className="element">
                    <Input className="inp" type="number" onChange={this.onPrice} value={this.state.price} />
                  </div>
                </Form.Item>
              </div>
              <div className="text">
                <Form.Item {...formItemLayout} label="Category" >
                  <div className="element">
                    <Dropdown overlay={menu}  >
                      <Button className="inp">
                        {this.state.category?this.state.category:'Category'}
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
                        {this.state.status?this.state.status:'Status'} <Icon type="down" />
                      </Button>
                    </Dropdown>
                  </div>
                </Form.Item>
              </div>
              <div>
                  
                
                  <Button onClick={this.onSubmit} className="but">Save</Button>
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
