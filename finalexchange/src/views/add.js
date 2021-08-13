import React from "react";

import Loading from './Loading';
import Countdown from "react-countdown";
import {Button, CardText, CardTitle, Form, FormText, Input, Label,InputGroup, InputGroupAddon,CardImg,CardBody,CardSubtitle} from 'reactstrap'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import Paper from '@material-ui/core/Paper';
import Tabs1 from '@material-ui/core/Tabs';
import Tab1 from '@material-ui/core/Tab';
import 'react-tabs/style/react-tabs.css';
import UserActions from "./user-actions";

import QRCode from "react-qr-code";

import SweetAlert from 'react-bootstrap-sweetalert';
import Modal from 'react-awesome-modal';
import FlatList from 'flatlist-react';
import {Redirect, Switch} from 'react-router-dom';
import './nextStep.css'
import 'rc-steps/assets/index.css'
import StepContent from '@material-ui/core/StepContent';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import { Card,CardHeader,CardFooter } from "reactstrap";
  import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from "axios";
import InputAdornment from '@material-ui/core/InputAdornment';
import Stepper from '@material-ui/core/Stepper';

import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import swal from "sweetalert";

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

function getStepContent(step) {
  switch (step) {
    case 0:
      return `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`;
    case 1:
      return 'An ad group contains one or more ads which target a shared set of keywords.';
    case 2:
      return `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`;
    default:
      return 'Unknown step';
  }
}
const steps = ['Pay to the merchant', 'Create an ad group', 'Create an ad']
function getFinishIcon() {
  const path = 'M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.' +
  '5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139' +
  '.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5' +
  '-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 ' +
  '55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33' +
  '.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99' +
  '.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.' +
  '7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 10' +
  '1.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 ' +
  '20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z';
return (
  <svg
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 1024 1024"
    style={{ verticalAlign: '-.125em' }}
  >
    <path d={path} />
  </svg>
);
}

function getErrorIcon() {
  const path1 =
    'M512 0C229.2 0 0 229.2 0 512s229.2 512 512 512 512-229' +
    '.2 512-512S794.8 0 512 0zm311.1 823.1c-40.4 40.4-87.5 72.2-139.9 9' +
    '4.3C629 940.4 571.4 952 512 952s-117-11.6-171.2-34.5c-52.4-22.2-99' +
    '.4-53.9-139.9-94.3-40.4-40.4-72.2-87.5-94.3-139.9C83.6 629 72 571.' +
    '4 72 512s11.6-117 34.5-171.2c22.2-52.4 53.9-99.4 94.3-139.9 40.4-4' +
    '0.4 87.5-72.2 139.9-94.3C395 83.6 452.6 72 512 72s117 11.6 171.2 3' +
    '4.5c52.4 22.2 99.4 53.9 139.9 94.3 40.4 40.4 72.2 87.5 94.3 139.9C' +
    '940.4 395 952 452.6 952 512s-11.6 117-34.5 171.2c-22.2 52.4-53.9 9' +
    '9.5-94.4 139.9z';
  const path2 =
    'M640.3 765.5c-19.9 0-36-16.1-36-36 0-50.9-41.4-92.3-92' +
    '.3-92.3s-92.3 41.4-92.3 92.3c0 19.9-16.1 36-36 36s-36-16.1-36-36c0' +
    '-90.6 73.7-164.3 164.3-164.3s164.3 73.7 164.3 164.3c0 19.9-16.1 36' +
    '-36 36zM194.2 382.4a60 60 0 1 0 120 0 60 60 0 1 0-120 0zM709.5 382' +
    '.4a60 60 0 1 0 120 0 60 60 0 1 0-120 0z';
  return (
    <svg
      width="1em"
      height="1em"
      fill="currentColor"
      viewBox="0 0 1024 1024"
      style={{ verticalAlign: '-.125em' }}
    >
      <path d={path1} />
      <path d={path2} />
    </svg>
  );
}
const icons = {
  finish: getFinishIcon(),
  error: getErrorIcon(),
};
// const steps = [{
//   title:"Step 1",
//   description: "Download MetaMask Wallet and Singup/Signin to open your account"
// },
// {
//   title : "Step 2",
//   description: "Select your Currency and Pay to the below Merchant"
// },
// {title : "Step 3",  description: "Go to pancake exhange swap to exchange your currency to AntNet (ANTEAG)"},
// {
//   title : "Step 4"
// }]

const useStyles = makeStyles((theme) => ({
  root: {

    backgroundColor: theme.palette.background.paper,
  },
}));

let context;
let upis = ['cryptomaster98@icici']
const tempupi = upis[Math.floor(Math.random()*upis.length)]

class Add extends React.Component {
  constructor(props){
    super(props)
    context = this
  }
  
  state = {
    users_USDT: [],
    users_BTC: [],
    users_BNB: [],
    users_ETH: [],
    value : 2,
    users_INRD: [],
    users_ANTEAG: [],
    visible : localStorage.getItem("bank") ? true : false,
    visible_1 : localStorage.getItem("bank") ? false :true,
    loading: true,
    upi : null,
    amount : null,
    recieve: null,
    orig_amount : null,
    upi_buy:false,
    accnumber_1 : '',
    accnumber_2 : '',
    bankname : '',
    validity : false,
    accname : '',
    ifsc : '',
    curr : 'INRD',
    reqpay : false,
    payment:false,
    final: null,
    antlive : 0,
    currentStep: 0,
    activesteps : 0,
    sendername: '',
    senderupi : ''

  };
  componentDidMount() {
    setInterval(()=>{
      this.getUsers();
    },1000)
  }
handleChange(event, newValue){
context.setState({value:newValue})
}
renderPerson = (person, idx) => {
  console.log(person,idx)
  return (

      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <img src={person.picture.medium}/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText style={{marginRight:"-10%"}} primary={person.name} secondary={person.price} />
        <Button>dhfgdjh</Button>
      </ListItem>
     

  );
}

  async getUsers() {
    const res0 = await axios({
      method:'get',
      url : `https://api.anteagle.tech/liveprice?pair=ANTEAG/INRD`
    })
    const all = await axios({
      url :"https://api.binance.com/api/v3/ticker/price",
      method : "get"
    
  })
  const live = await axios({
    method:"get",
    url: "https://api.exchangerate.host/convert?from=USD&to=INR"
  })
  const lif_f = live.data.info.rate * 1.03;
  
    const res = await fetch("https://randomuser.me/api/?results=1");
    const {results} = await res.json();

    const res2 = await fetch("https://randomuser.me/api/?results=1");
    const results1 = await res2.json();
    const res3 = await fetch("https://randomuser.me/api/?results=1");
    const results2 = await res3.json();
    const res4 = await fetch("https://randomuser.me/api/?results=1");
    const results3 = await res4.json();
    const res5 = await fetch("https://randomuser.me/api/?results=1");
    const results4 = await res5.json();
    const res6 = await fetch("https://randomuser.me/api/?results=1");
    const results5 = await res6.json();

    console.log(results1);
    console.log(results2);
    console.log(results5)
    for(let i=0;i<results.length;i++){
      results[i].name = `Antuser ${Math.floor(Math.random()*10)}`;
      results[i].price = (parseFloat(lif_f).toFixed(2))
      results[i].picture.medium = `https://ui-avatars.com/api/?name=${results[i].name}`
      results[i].modal = false

    }
    
    for(let i=0;i<results1.results.length;i++){
      results1.results[i].name =  `Antuser ${Math.floor(Math.random()*10)}`;
      results1.results[i].price = (parseFloat(all.data[98].price*lif_f)*(1+(i*0.0001))).toFixed(2)
      results1.results[i].picture.medium = `https://ui-avatars.com/api/?name=${results1.results[i].name}`
      console.log()
      results[i].modal = false
    }
    
    for(let i=0;i<results2.results.length;i++){
      results2.results[i].name =  `Antuser ${Math.floor(Math.random()*10)}`;
      results2.results[i].price = (parseFloat(all.data[12].price*lif_f)*(1+(i*0.0001))).toFixed(2)
      results2.results[i].picture.medium = `https://ui-avatars.com/api/?name=${results2.results[i].name}`
      results[i].modal = false
    }
    
    for(let i=0;i<results3.results.length;i++){
      results3.results[i].name = `Antuser ${Math.floor(Math.random()*10)}`;
      results3.results[i].price = (parseFloat(all.data[11].price*lif_f)*(1+(i*0.0001))).toFixed(2)
      console.log(results3.results[i].price)
      results3.results[i].picture.medium = `https://ui-avatars.com/api/?name=${results3.results[i].name}`
      results[i].modal = false
    }

    for(let i=0;i<results5.results.length;i++){
      results5.results[i].name =  `Antuser ${Math.floor(Math.random()*10)}`;
      results5.results[i].price = 1;
      console.log(results5.results[i].price)
      results5.results[i].picture.medium = `https://ui-avatars.com/api/?name=${results5.results[i].name}`
      results[i].modal = false
    }
    for(let i=0;i<results4.results.length;i++){
      results4.results[i].name =  `Antuser ${Math.floor(Math.random()*10)}`;
      results4.results[i].price = (this.state.antlive + (Math.random())*0.01).toFixed(2)
      console.log(results4.results[i].price)
      results4.results[i].picture.medium = `https://ui-avatars.com/api/?name=${results4.results[i].name}`
      results[i].modal = false
    }
    
    this.setState({ users_USDT: [...results] });
    this.setState({ users_BNB: [...results1.results] });
    this.setState({ users_ETH:[...results2.results] });
    this.setState({ users_ANTEAG:[...results4.results] })
    this.setState({ users_INRD:[...results5.results] })
    this.setState({ users_BTC:[...results3.results], loading: false });
console.log(results1)



  }
  handleNext = () => {
    const {activesteps} = this.state;
    let s = activesteps + 1;
    this.setState({activesteps:s})
};
handleBack = () => {
const {activesteps} = this.state;
let s = activesteps - 1;
this.setState({activesteps:s})
};
handleReset = () =>{
  this.setState({activesteps:0})
}
  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  }

  nextStep = () => {
    const { currentStep } = this.state;
    let s = currentStep + 1;
    if (s === steps.length) {
      s = 0;
    }
    this.setState({
      currentStep: s,
    });
  };
  render() {
    const { currentStep: cs } = this.state;
    this.stepsRefs = [];
    return (
      <div className="content">

        <div style={{pointerEvents:"none",disabled:true,opacity:0.3}}>
        <Dialog fullScreen open={this.state.payment} aria-labelledby="Payment Gateway">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText style={{textAlign:"center",fontSize:"2rem"}}>
            PAYMENT ZONE Please Do not refresh rage or go back...
          </DialogContentText>
         
      {this.state.activesteps === steps.length && (
        <Paper square elevation={0}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={this.handleReset} >
            Reset
          </Button>
        </Paper>
      )}
        <DialogContentText >Pay the bill of <span style={{fontWeight:"bold"}}>{this.state.orig_amount} INR</span> to the deatils of the Merchant given Below</DialogContentText>
      
     
      <Label style={{color:"black"}}>Merchnat UPI ID</Label>
      <InputGroup style={{width:"60%"}}>
       <Input placeholder={tempupi} disabled="true" />
      <Button style={{marginTop:"-0.01rem"}}><img src="https://img.icons8.com/fluent-systems-regular/20/000000/copy.png"/></Button>
      </InputGroup>
    
      <Label style={{color:"black"}}>OR Scan this QR Code to pay</Label>
      <br/>
       <QRCode value={`upi://pay?pa=${tempupi}&am=${this.state.orig_amount}`} />
       <br></br><br></br><br></br>
      <DialogContentText>If you have paid fill the details bewlow and submit the request for verification</DialogContentText>
      
      <Label style={{color:"black"}}>Enter your UPI</Label>
                  <Input placeholder="Enter your UPI ID from which you have paid to the merchant" style={{width:"60%",color:'black'}} onChange={(e)=>{
                    this.setState({senderupi:e.target.value})
                  }}></Input>
                  <br></br>
                  <Label style={{color:"black"}}>Name</Label>
                 
                  <Input placeholder="Enter Account holder's name linked with that UPI" style={{width:"60%",color:'black'}} onChange={(e)=>{
                    this.setState({sendername:e.target.value})
                  }} ></Input>
                  <br></br>
                  <FormText>* Make sure the UPI ID you have entered is correct and verifies by your end and have paid the given Amount to the merchnat</FormText>
                  <Button disabled={this.state.reqpay} onClick={()=>{
                if(this.state.sendername.length == 0 || this.state.senderupi == 0){
                  swal("EMPTY","Please fill your Acount UPI ID and Name","warning")
                }
                else{
                  this.setState({reqpay:true})
                  axios({
                    method:"post",
                    url: `https://api.anteagle.tech/requestupi?upiid=${this.state.senderupi}&name=${this.state.sendername}&amount=${this.state.final}`,
                    headers:{
                      'Accept' : 'Application/json',
                      'Content-type' : 'application/json'
                    }
                  }).then(res=>{
                    console.log(res.data)
                    if(res.data.message){
                      swal(`Submitted !!`,`Your request for verification has been submitted Successfully. As soon as Merchant verifies, Coins will get automatically transfered in your Wallet\n Your Req ID is ${res.data.id}`,"success");
                      setInterval(()=>{
                        axios({
                          method: "post",
                          url : `https://api.anteagle.tech/checkupi?id=${res.data.id}`,
                          headers:{
                            "Accept" : "Application/json",
                            'Content-type' : "application/json"
                          }
                        }).then(res=>{
                          if(res.data.success){
                            const temp = parseFloat(localStorage.getItem(`INRD_Coins`))+parseFloat(this.state.final); 
                            console.log(temp)
                              axios({
                                method : "post",
                                url : `https://api.anteagle.tech/get${this.state.curr.toLowerCase()}?coins=${temp}&userid=${localStorage.getItem("userid")}`,
                                headers:{
                                  "Accept" : "Application/json",
                                  'Content-type' : "application/json"
                                }
                              }).then(res=>{
                                window.location.href = "/"
                              })
                             
                          }
                        })
                      },1000)
                    }
                  })
                }
                    
                  }}>Submit</Button>
     
     
        </DialogContent>
        </Dialog>
        </div>
        
          <Dialog open={this.state.visible}  aria-labelledby="form-dialog-title">
       
        <DialogContent>
          {this.state.upi_buy ? <>
            <DialogContentText style={{cursor:"pointer"}} onClick={()=>{
              this.setState({upi_buy:false})
            }}>
            Back
          </DialogContentText>
          
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Enter Amount to Add"
            placeholder="Limit 50-5000000"
            InputProps={{
              endAdornment: <InputAdornment position="end">INR</InputAdornment>,
            }}
            onChange={(e)=>{
              this.setState({final:parseFloat(e.target.value)})
            }}/>
            <CardText style={{color:'black'}}>
            * 1 INR = 1 INRD
          </CardText>
          <br></br>
          {/* <TextField
          autoFocus
          margin="dense"
          id="name"
          label={`You will recieve ${parseFloat(this.state.orig_amount/this.state.amount).toFixed(6)}`}
          disabled="true"
          placeholder="Limit 50-500000"
          
          InputProps={{
            endAdornment: <InputAdornment position="end">{this.state.curr}</InputAdornment>,
          }}
        /> */}
        <DialogActions>
          <Button onClick={()=>{
           this.setState({payment:true})
          }} color="secondary">
            BUY {this.state.curr}
          </Button>
        </DialogActions>
          </> : <>
            <Card>
      
          <CardBody>
            <CardTitle tag="h5">UPI </CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">UPI Tranfer</CardSubtitle>
            <CardText>Use any UPI app on your phone like GooglePay, PhonePe, BHIM, Paytm | Fees : ₹ 0  <img src="https://img.icons8.com/color/48/000000/google-pay-india.png"/> <img src="https://img.icons8.com/color/48/000000/phone-pe.png"/>  <img src="https://img.icons8.com/color/48/000000/paytm.png"/> <img src="https://img.icons8.com/fluency/48/000000/bhim.png"/>  </CardText>
            <Button onClick={()=>{
              this.setState({upi_buy:true})
            }}>BUY</Button>
          </CardBody>
        </Card>
      <Card>
    
    <CardBody>

      <CardTitle tag="h5">Bank </CardTitle>
      <CardSubtitle tag="h6" className="mb-2 text-muted">Bank Transfer</CardSubtitle>
      <CardText>Minimum: ₹100 | Maximum: ₹5000000 <img src="https://img.icons8.com/office/16/000000/checked--v1.png"/> NEFT | <img src="https://img.icons8.com/office/16/000000/checked--v1.png"/> RTGS | <img src="https://img.icons8.com/office/16/000000/checked--v1.png"/>  IMPS</CardText>
      <Button disabled></Button>
    </CardBody>
  </Card> 
          
          </>}
        
                  
          
        </DialogContent>
        <Button onClick={()=>{
          this.setState({loading:false})
          window.location.href = "/"
        }}>Close</Button>
      </Dialog>

      <Dialog open={this.state.visible_1}  aria-labelledby="form-dialog-title">
       
       <DialogContent>
       <Card>
              <CardHeader>
                <h5 className="title">Enter Your Bank Details</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Label>Enter Acoount Number</Label>
                  <Input type="password" placeholder="Enter You Account Number" onChange={(e)=>{
                    this.setState({accnumber_1:e.target.value})
                  }}></Input>
                  <Label>Confirm Acoount Number</Label>
                  <Input placeholder="Enter You Account Number" onChange={(e)=>{
                    if(this.state.accnumber_1 == e.target.value){
                      this.setState({accnumber_2:e.target.value})
                      this.setState({validity : true})

                    }
                    else{
                      this.setState({validity : false})
                    }
                  }}></Input>
                  <Label>Enter Account Holder Name</Label>
                 
                  <Input placeholder="Enter Account Holder Name" onChange={(e)=>{
                    this.setState({accname:e.target.value})
                  }}></Input>
        
                  <Label>Enter You Bank IFSC Code</Label>
                  <Input placeholder="IFSC Code"  onChange={(e)=>{
                  this.setState({ifsc:e.target.value})
                  }}>
                   
                  </Input>
                  <Label>Enter You Bank Full Name</Label>
                  <Input placeholder="Bank Name"  onChange={(e)=>{
                  this.setState({bankname:e.target.value})
                  }}>
                   
                  </Input>
      
                  <FormText>* Make sure you own this Account Beause you can only withdraw you money in this Account only</FormText>
                </Form>
               

              </CardBody>
              <CardFooter>
                <Button disabled={!this.state.validity} className="btn-fill" color="primary" type="submit" onClick={()=>{
                  axios("https://api.anteagle.tech/add_bank",{
                    method : "post",
                    headers: {
                      'Accept' : 'Application/json',
                      'Content-type' : 'application/json'
                    },
                    data : JSON.stringify({
                      bankname : this.state.bankname,
                      accnumber : this.state.accnumber_2,
                      ifsc : this.state.ifsc,
                      accname : this.state.accname,
                      userid : localStorage.getItem("userid")
                    })
                  }).then(reas=>{
                    if(reas.data.success){
                    localStorage.setItem("bank",true)
                    this.setState({visible_1:false})
                     this.setState({visible:true})
                    }
                  })   
                }}>
                  Submit
                </Button>
              </CardFooter>
            </Card>
       
                 
         
       </DialogContent>
       <Button onClick={()=>{
         this.setState({loading:false})
         window.location.href = "/"
       }}>Close</Button>
     </Dialog>
      {/* <Paper square>
      <Tabs1
        value={this.state.value}
        indicatorColor="secondary"
        textColor="secondary"
        onChange={this.handleChange}
        aria-label="disabled tabs example"
        centered
      >
        <Tab1 label="UPI" />
        <Tab1 label="Bank" disabled />
      </Tabs1>
    </Paper>
       <Tabs>
    <TabList>
      <Tab>BTC</Tab>
      <Tab>USDT</Tab>
      <Tab>BNB</Tab>
      <Tab>ETH</Tab>
      <Tab>ANTEAG</Tab>
      <Tab>INRD</Tab>
    </TabList>

    <TabPanel>
   
            {this.state.loading ? (
              <Card style={{height:"40rem"}}>
              <Countdown
              date={Date.now()+30000}
              intervalDelay={0}
              precision={3}
              renderer={(props) => <CardText style={{color:"#ff8179",alignSelf:"center",fontSize:"2rem",marginTop:"6rem"}}>Fetching Live Prices {props.seconds}...
              <Loading />
              </CardText>}
              />
              </Card>
              
            ):this.state.users_BTC.map((person,i)=>{
              return(
                <Card style={{padding:"1rem",flexFlow:"row"}}>
         <img src={person.picture.medium} style={{height:"5rem",width:"5rem",borderRadius:"100px"}} />
               
                   
                    <div style={{overflow:"hidden"}}>
                   
                    <CardTitle style={{fontSize:"2rem", marginLeft:"2rem"}}>{person.name}</CardTitle>
                   <CardText style={{ marginLeft:"2rem",fontSize:"1.5rem",color:"yellow",fontWeight:"bold"}}>{person.price} INR</CardText>
                    </div>
                   <Button onClick={()=>{
                     this.setState({upi:person.name})
                     this.setState({amount:person.price})
                     this.setState({curr:'BTC'})
                     this.setState({visible:true})
                   }} style={{marginLeft:"-2%",width:"10rem"}}>BUY</Button>
                   
             
                </Card>
              )
            })}
   
        
          
    </TabPanel>
    <TabPanel>
    {this.state.loading ? (
              <Card style={{height:"40rem"}}>
              <Countdown
              date={Date.now()+30000}
              intervalDelay={0}
              precision={3}
              renderer={(props) => <CardText style={{color:"#ff8179",alignSelf:"center",fontSize:"2rem",marginTop:"6rem"}}>Fetching Live Prices {props.seconds}...
              <Loading />
              
              </CardText>}
            
              />
              
              </Card>
              
            ):this.state.users_USDT.map((person,i)=>{
              return(
                <Card style={{padding:"1rem",flexFlow:"row"}}>
         <img src={person.picture.medium} style={{height:"5rem",width:"5rem",borderRadius:"100px"}} />
               
                   
                    <div>
                   
                    <CardTitle style={{fontSize:"2rem", marginLeft:"2rem"}}>{person.name}</CardTitle>
                   <CardText style={{ marginLeft:"2rem",fontSize:"1.5rem",color:"yellow",fontWeight:"bold"}}>{person.price} INR
                   </CardText>
                    </div>
                   <Button onClick={()=>{
                     this.setState({upi:person.name})
                     this.setState({amount:person.price})
                     this.setState({curr:'USDT'})
                     this.setState({visible:true})
                   }} style={{marginLeft:"-2%",width:"10rem"}}>BUY</Button>
                   
             
                </Card>
              )
            })}
    </TabPanel>
    <TabPanel>
    {this.state.loading ? (
              <Card style={{height:"40rem"}}>
              <Countdown
              date={Date.now()+30000}
              intervalDelay={0}
              precision={3}
              renderer={(props) => <CardText style={{color:"#ff8179",alignSelf:"center",fontSize:"2rem",marginTop:"6rem"}}>Fetching Live Prices {props.seconds}...
              <Loading />
              </CardText>}
              />
              </Card>
              
            ):this.state.users_BNB.map((person,i)=>{
              return(
                <Card style={{padding:"1rem",flexFlow:"row"}}>
         <img src={person.picture.medium} style={{height:"5rem",width:"5rem",borderRadius:"100px"}} />
               
                   
                    <div>
                   
                    <CardTitle style={{fontSize:"2rem", marginLeft:"2rem"}}>{person.name}</CardTitle>
                   <CardText style={{ marginLeft:"2rem",fontSize:"1.5rem",color:"yellow",fontWeight:"bold"}}>{person.price} INR
                   </CardText>
                    </div>
                   <Button onClick={()=>{
                     this.setState({upi:person.name})
                     this.setState({amount:person.price})
                     this.setState({curr:'BNB'})
                     this.setState({visible:true})
                   }} style={{marginLeft:"-2%",width:"10rem"}}>BUY</Button>
                   
             
                </Card>
              )
            })}
    </TabPanel>
    <TabPanel>
    {this.state.loading ? (
              <Card style={{height:"40rem"}}>
              <Countdown
              date={Date.now()+30000}
              intervalDelay={0}
              precision={3}
              renderer={(props) => <CardText style={{color:"#ff8179",alignSelf:"center",fontSize:"2rem",marginTop:"6rem"}}>Fetching Live Prices {props.seconds}...
              <Loading />
              </CardText>}
              />
              </Card>
              
            ):this.state.users_ETH.map((person,i)=>{
              return(
                <Card style={{padding:"1rem",flexFlow:"row"}}>
         <img src={person.picture.medium} style={{height:"5rem",width:"5rem",borderRadius:"100px"}} />
               
                   
                    <div>
                   
                    <CardTitle style={{fontSize:"2rem", marginLeft:"2rem"}}>{person.name}</CardTitle>
                   <CardText style={{ marginLeft:"2rem",fontSize:"1.5rem",color:"yellow",fontWeight:"bold"}}>{person.price} INR</CardText>
                    </div>
                   <Button onClick={()=>{
                     this.setState({upi:person.name})
                     this.setState({amount:person.price})
                     this.setState({curr:'ETH'})
                     this.setState({visible:true})
                   }} style={{marginLeft:"-2%",width:"10rem"}}>BUY</Button>
                   
             
                </Card>
              )
            })}
    </TabPanel>
    <TabPanel>
    {this.state.loading ? (
              <Card style={{height:"40rem"}}>
              <Countdown
              date={Date.now()+30000}
              intervalDelay={0}
              precision={3}
              renderer={(props) => <CardText style={{color:"#ff8179",alignSelf:"center",fontSize:"2rem",marginTop:"6rem"}}>Fetching Live Prices {props.seconds}...
              <Loading />
              </CardText>}
              />
              </Card>
              
            ):this.state.users_ANTEAG.map((person,i)=>{
              return(
                <Card style={{padding:"1rem",flexFlow:"row"}}>
         <img src={person.picture.medium} style={{height:"5rem",width:"5rem",borderRadius:"100px"}} />
               
                   
                    <div>
                   
                    <CardTitle style={{fontSize:"2rem", marginLeft:"2rem"}}>{person.name}</CardTitle>
                   <CardText style={{ marginLeft:"2rem",fontSize:"1.5rem",color:"yellow",fontWeight:"bold"}}>{person.price} INR</CardText>
                    </div>
                   <Button onClick={()=>{
                     this.setState({upi:person.name})
                     this.setState({amount:person.price})
                     this.setState({curr:'ETH'})
                     this.setState({visible:true})
                   }} style={{marginLeft:"-2%",width:"10rem"}}>BUY</Button>
                   
             
                </Card>
              )
            })}
    </TabPanel>
    <TabPanel>
    {this.state.loading ? (
              <Card style={{height:"40rem"}}>
              <Countdown
              date={Date.now()+30000}
              intervalDelay={0}
              precision={3}
              renderer={(props) => <CardText style={{color:"#ff8179",alignSelf:"center",fontSize:"2rem",marginTop:"6rem"}}>Fetching Live Prices {props.seconds}...
              <Loading />
              </CardText>}
              />
              </Card>
              
            ):this.state.users_INRD.map((person,i)=>{
              return(
                <Card style={{padding:"1rem",flexFlow:"row"}}>
         <img src={person.picture.medium} style={{height:"5rem",width:"5rem",borderRadius:"100px"}} />
               
                   
                    <div>
                   
                    <CardTitle style={{fontSize:"2rem", marginLeft:"2rem"}}>{person.name}</CardTitle>
                   <CardText style={{ marginLeft:"2rem",fontSize:"1.5rem",color:"yellow",fontWeight:"bold"}}>{person.price} INR</CardText>
                    </div>
                   <Button onClick={()=>{
                     this.setState({upi:person.name})
                     this.setState({amount:person.price})
                     this.setState({curr:'INRD'})
                     this.setState({visible:true})
                   }} style={{marginLeft:"-2%",width:"10rem"}}>BUY</Button>
                   
             
                </Card>
              )
            })}
    </TabPanel>
  </Tabs> */}
      
      </div>
    );
  }
}



export default Add;
