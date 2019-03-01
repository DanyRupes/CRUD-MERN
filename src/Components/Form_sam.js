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
      img_file:"",
      img_info:"",
      status: "Set Status",
      loading:true,
      redirect: false,
      submitType:1,
      isFormHere:false,
    };
    this.onDate = this.onDate.bind(this)
    this.onStartTime = this.onStartTime.bind(this)
    this.onEndTime = this.onEndTime.bind(this)
    this.onTitle = this.onTitle.bind(this)
    this.onPrice = this.onPrice.bind(this)
    

    this.onCategory = this.onCategory.bind(this)
    this.onStatus = this.onStatus.bind(this)
    this.onSubmit = this.onSubmit.bind(this) 
    this.uploadData=this.uploadData.bind(this)
  }


  componentDidMount(){
    // this.setState({isFormHere:true})
  }

  componentWillUnmount(){
    // this.setState({isFormHere:false})    
  }
  componentWillMount(){
    
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
            
            const { dateO,dates,_id,start_time,end_time,start_times,
              end_times,title,price,category,status, img_file} = out.data

            this.setState({
              "dateO":dateO,
              dates:dates,
              updated:true,
              "id":_id,
              submitType:2,
            start_time:start_time,end_time:end_time,
            start_times:start_times, end_times:end_times,
            title:title,price:price,category:category,
            img_file:img_file,
            status:status})
            
            console.log("----------------------------")
              let et = moment(out.data.end_times)
              let st = moment(out.data.start_times)


              let duration = moment.duration(et.diff(st))
            console.log(duration.asSeconds())
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
    console.log("--------------------------------------")
    console.log(val.key)
    this.setState({category:val.key==1?"Mediterranean":val.key==2?"Mexican":"Indian"})
  }

  
  uploadData(info) {
    this.setState({img_file:info.file})
    console.log(info)
        if (info.file.status !== "uploading") {
          console.log(info.file.response);
        }
        if (info.file.status === "done") {
          this.setState({img_file:info.file.response.url})
          message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === "error") {
          message.error(`${info.file.name} file upload failed.`);
        
      }
  }
  
  onStatus(val) {
    console.log(val.key)
    this.setState({status:val.key==1?"Active":"InActive"})
  }
  

  
  async submit() {
    // console.log(this.state)
  
    
    const { id,dateO,dates, start_time,start_times, end_time,end_times, title, price, category, status,img_file } = this.state
        if(this.state.submitType==1){ //first time
          axios.post('/submit',{
            dates,dateO, start_time,start_times, end_time,end_times, title, price, category, status, img_file
          }).then((res)=>{
            this.props.history.push('/')
            this.setState({loading:false});
          console.log("Success");
          
          return "success"
          })
          .catch((err)=>{this.setState({loading:false});console.log("failed");return "Failed"})
        }
        else{
          axios.post('/update_this', {id, 
            dates,dateO, start_time,start_times, end_time,end_times, title, price, category, status,img_file
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
          Mediterranean
        </Menu.Item>
        <Menu.Item key="2" onClick={this.onCategory}  >
          <Icon type="user" />
          Mexican
        </Menu.Item>
        <Menu.Item key="3"  onClick={this.onCategory} >
          <Icon type="user" />
          Indian
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
      name: "image",
      action: "/upload_image/test",
      headers: {
        authorization: "authorization-text"
      },
    
       
    };


    return (
      <div className="back">
        <br />
        <h1 className="head">REGISTRATION FORM</h1>
        <Row>
          <Col span={7} />
          <Col className="content" span={9}>
            <Form >
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
                <Form.Item  {...formItemLayout} label="Image">
                  <Upload {...props} onChange={this.uploadData} >
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
              <div className="submitBtn">
                  
                
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




// let et = moment(out.data.end_times)
// let st = moment(out.data.start_times)
// let duration =moment.duration(et.diff(st))
// var hours = parseInt(duration.asHours());
// var minutes = parseInt(duration.asMinutes())%60;


// console.log(duration, hours, minutes)