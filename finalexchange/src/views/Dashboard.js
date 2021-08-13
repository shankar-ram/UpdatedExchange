
import React, { useEffect } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
import ChartView from './ChartView';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
// reactstrap components
import Btc from 'cryptocurrency-icons/svg/icon/btc.svg';
import Eth from 'cryptocurrency-icons/svg/icon/eth.svg';
import Ticker from 'react-ticker'
import Bnb from 'cryptocurrency-icons/svg/icon/bnb.svg';
import Mana from 'cryptocurrency-icons/svg/icon/mana.svg';
import Matic from 'cryptocurrency-icons/svg/icon/matic.svg';
import Ada from 'cryptocurrency-icons/svg/icon/ada.svg';
import Dot from 'cryptocurrency-icons/svg/icon/dot.svg';
import Sol from 'cryptocurrency-icons/svg/icon/sol.svg';
import Dgb from 'cryptocurrency-icons/svg/icon/dgb.svg';
import Grt from 'cryptocurrency-icons/svg/icon/grt.svg';
import Ksm from 'cryptocurrency-icons/svg/icon/ksm.svg';
import Doge from 'cryptocurrency-icons/svg/icon/doge.svg';
import usdt from './usdt.png'
import tfuel from './tfuel.png'
import uni from './uni.png'
import vet from './vet.png'
import ftt from './ftt.png'
import ftm from './ftm.png'
import alice from './alice.png'
import gtc from './gtc.png'
import axs from './axs.png'
import ata from './ata.png'
import rune from './rune.png'
import fil from './fil.png'
import link from './link.png'
import luna from './luna.png'
import theta from './theta.png'

import logo from './FInalCryptologo.png';

import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Collapse,
  FormGroup,
  Label,
  Input,
  Form,
  Table,
  Row,
  Col,
  CardText,
  CardSubtitle,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  InputGroup,
  InputGroupAddon
} from "reactstrap";

import ChartViewer from './ChartViewer';
// core components
import {
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4,
} from "variables/charts.js";
import { Modal } from "react-bootstrap";
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import { FormControl,InputLabel,FormHelperText,Select } from '@material-ui/core';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { set, useForm } from "react-cool-form";  
import axios from "axios";
import './DashBoard.css';
import 'react-tabs/style/react-tabs.css';
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Fab from '@material-ui/core/Fab';
// import MuiAutoComplete from "./MuiAutoComplete";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import NativeSelect from '@material-ui/core/NativeSelect';
import Tooltip from "@material-ui/core/Tooltip";
import swal from "sweetalert";
import LoadDash from "./load_dash";
import LoadDashMobile from "./loadDash_mobile";
import cryptologo from './FInalCryptologo.png';
import ruppee from './ruppee.png'

// import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
// const useStyles = makeStyles((theme) => ({
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120,
//   },
//   selectEmpty: {
//     marginTop: theme.spacing(2),
//   },
// }));

const Field = ({ label, id, error, ...rest }) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <input id={id} {...rest} />
    {error && <p>{error}</p>}
  </div>
);
const useStyles = makeStyles((theme) => ({
  root: {
    width: 300 + theme.spacing(3) * 2,
  },
  margin: {
    height: theme.spacing(3),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  fab1: {
    margin: 0,
    top: 'auto',
    borderRadius:5,
    background:"green",
    color:"white",
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
    height:'50px',
    width:'8.5rem'
  },
  fab2: {
    margin: 0,
    top: 'auto',
    borderRadius:5,
    right: 'auto',
    background:"red",
    color:"white",
    bottom: 20,
    left: 20,
    position: 'fixed',
    height:'50px',
    width:'8.5rem'
  },
}));
const PrettoSlider = withStyles({
  root: {
    color: '#d4a537',
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);



const initialPositionValue = "fixed";

function Dashboard(props) {
  
  const [showModal, setShow] = React.useState(false);
  const [showModal2, setShow2] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  const classes = useStyles();
  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
    
  });
  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };
  const [quant,setQuant]=React.useState([]);
  const [pricee,setPrice]=React.useState([]);
  const [finalQuants,setFinalQuants]=React.useState([]);
  const [finalPrices,setFinalPrices]=React.useState([]);
  const [trade_quantity,settrade_quantity]=React.useState(0);
  const [trade_price,settrade_price]=React.useState(0);
  const [age, setAge] = React.useState('');
  const [trade_symbol,settrade_symbol]=React.useState(0);
  const [trade_type,settrade_type]=React.useState(0);
  const [sell_quantity,setsell_quantity]=React.useState(0);
  const [continueselling,setcontinueselling] = React.useState(false)
  const [switchtrade,setswitchtrade] = React.useState(true)
  const [sell_price,setsell_price]=React.useState(0);
  const [width,setwidth] = React.useState(window.innerWidth)
  const [isOpen, setIsOpen] = React.useState(false);
  const [pair,setpair] = React.useState('BTC/USDT')
  const [tradingvalue,settradingvalue] = React.useState('BTCUSDT');
  const [buy_limit_amount,setbuy_limit_amount] = React.useState(0);
  const [coin_limit_amount,setcoin_limit_amount]=React.useState(0);
  const [buy_limit_price,setbuy_limit_price] = React.useState(0);
  const [buy_market_amount,setbuy_market_amount] = React.useState(0);
  const [buy_market_price,setbuy_market_price] = React.useState(0);
  const [sell_limit_price,setsell_limit_price] = React.useState(0);
  const [full_trade_sell,set_full_trade_sell] = React.useState(0)
  const [sell_limit_amount,setsell_limit_amount] = React.useState(0);
  const [sell_market_price,setsell_market_price] = React.useState(0);
  const [sell_market_amount,setsell_market_amount] = React.useState(0);
  const [valid,setvalid] = React.useState(true)
  const [valid_s,setvalid_s] = React.useState(true)
  const [btc_u_vol,setbtc_u_vol] = React.useState(0)
  const [btc_vol,setbtc_vol] = React.useState(0)
  const [eth_u_vol,seteth_u_vol] = React.useState(0)
  const [eth_vol,set_eth_vol] = React.useState(0)
  const [bnb_u_vol,setbnb_u_vol] = React.useState(0)
  const [bnb_vol,setbnb_vol] = React.useState(0)
  const [ant_u_vol,setant_u_vol] = React.useState(0)
  const [loadin_cont,setloadin_cont] = React.useState(false)
  const [ant_vol,setant_vol] = React.useState(0)
  const [live_vol,setlivevol] = React.useState(0)
  const [liveprice_BTC,setlive_BTC] = React.useState(0)
  const [liveprice_BTC_u,setlive_BTC_u] = React.useState(0)
  
  const [liveprice_KSM,setlive_KSM] = React.useState(0)
  const [liveprice_KSM_u,setlive_KSM_u] = React.useState(0)

  
  const [liveprice_ATA,setlive_ATA] = React.useState(0)
  const [liveprice_ATA_u,setlive_ATA_u] = React.useState(0)

  const [liveprice_MANA,setlive_MANA] = React.useState(0)
  const [liveprice_MANA_u,setlive_MANA_u] = React.useState(0)

  const [liveprice_DGB,setlive_DGB] = React.useState(0)
  const [liveprice_DGB_u,setlive_DGB_u] = React.useState(0)

  const [liveprice_FTM,setlive_FTM] = React.useState(0)
  const [liveprice_FTM_u,setlive_FTM_u] = React.useState(0)

  const [liveprice_ALICE,setlive_ALICE] = React.useState(0)
  const [liveprice_ALICE_u,setlive_ALICE_u] = React.useState(0)

  const [liveprice_GTC,setlive_GTC] = React.useState(0)
  const [liveprice_GTC_u,setlive_GTC_u] = React.useState(0)

  const [liveprice_MATIC,setlive_MATIC] = React.useState(0)
  const [liveprice_MATIC_u,setlive_MATIC_u] = React.useState(0)
  
  const [liveprice_AXS,setlive_AXS] = React.useState(0)
  const [liveprice_AXS_u,setlive_AXS_u] = React.useState(0)
  
  const [liveprice_FTT,setlive_FTT] = React.useState(0)
  const [liveprice_FTT_u,setlive_FTT_u] = React.useState(0)
  
  const [liveprice_SOL,setlive_SOL] = React.useState(0)
  const [liveprice_SOL_u,setlive_SOL_u] = React.useState(0)
  
  const [liveprice_RUNE,setlive_RUNE] = React.useState(0)
  const [liveprice_RUNE_u,setlive_RUNE_u] = React.useState(0)
  
  const [liveprice_UNI,setlive_UNI] = React.useState(0)
  const [liveprice_UNI_u,setlive_UNI_u] = React.useState(0)

  const [liveprice_DOT,setlive_DOT] = React.useState(0)
  const [liveprice_DOT_u,setlive_DOT_u] = React.useState(0)
  
  const [liveprice_VET,setlive_VET] = React.useState(0)
  const [liveprice_VET_u,setlive_VET_u] = React.useState(0)
  
  const [liveprice_TFUEL,setlive_TFUEL] = React.useState(0)
  const [liveprice_TFUEL_u,setlive_TFUEL_u] = React.useState(0)

  const [liveprice_GRT,setlive_GRT] = React.useState(0)
  const [liveprice_GRT_u,setlive_GRT_u] = React.useState(0)

  const [liveprice_ADA,setlive_ADA] = React.useState(0)
  const [liveprice_ADA_u,setlive_ADA_u] = React.useState(0)

  const [liveprice_FIL,setlive_FIL] = React.useState(0)
  const [liveprice_FIL_u,setlive_FIL_u] = React.useState(0)

  const [liveprice_LINK,setlive_LINK] = React.useState(0)
  const [liveprice_LINK_u,setlive_LINK_u] = React.useState(0)
  
  const [liveprice_LUNA,setlive_LUNA] = React.useState(0)
  const [liveprice_LUNA_u,setlive_LUNA_u] = React.useState(0)

  const [liveprice_THETA,setlive_THETA] = React.useState(0)
  const [liveprice_THETA_u,setlive_THETA_u] = React.useState(0)
  
  
  const [liveprice_BNB_u,setlive_BNB_u] = React.useState(0)
  const [liveprice_BNB,setlive_BNB] = React.useState(0)
  const [liveprice_ETH,setlive_ETH] = React.useState(0)
  const [liveprice_ETH_u,setlive_ETH_u] = React.useState(0)
  const [liveprice_ANTEAG,setlive_ANTEAG] = React.useState(0)
  const [liveprice_ANTEAG_u,setlive_ANTEAG_u] = React.useState(0)
  const [liveprice,setlive] = React.useState(0)
  const [conversion,setconversion] = React.useState(0);
  const [curr_quant,setcurr] = React.useState(0)
  const [bought_price,set_bought_price] = React.useState()
  const [myorders,setmyorder] = React.useState([]);
  const [fillorders,setfillorders] = React.useState([])
  const [book,setbook] = React.useState([]);
  const [book_s,setbook_s] = React.useState([]);
  const [port,setport] = React.useState(false)
  const [c_order,setc_order] = React.useState([]);
  const toggle = () => setIsOpen(!isOpen);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const toggle1 = () => setDropdownOpen(prevState => !prevState);
  const { form, use } = useForm({
    // (Strongly advise) Provide the default values just like we use React state
    defaultValues: { username: "", email: "", password: "" },
    // The event only triggered when the form is valid
    onSubmit: (values) => alert(JSON.stringify(values, undefined, 2))
  });
  // We can enable the "errorWithTouched" option to filter the error of an un-blurred field
  // Which helps the user focus on typing without being annoyed by the error message
  const errors = use("errors", { errorWithTouched: true });
  const [bigChartData, setbigChartData] = React.useState("data1");
  const setBgChartData = (name) => {
    setbigChartData(name);
  };

  const handleWindowSizeChange = () => {
    setwidth(window.innerWidth)
  };
  useEffect(()=>{
    
    window.addEventListener('resize', handleWindowSizeChange());
    setloadin_cont(true)
    setInterval(()=>{

      axios({
        method:"get",
        url: "https://api.exchangerate.host/convert?from=USD&to=INR"
      }).then(res=>{
        localStorage.setItem("conversion",res.data.info.rate)
        setconversion(res.data.info.rate)
      })
      // axios({
      //   method : 'get',
      //   url :`https://api.anteagle.tech/volume?pair=BTC/USDT`
      // }).then(res=>{
      //   if(res.data.volume){
      //     setbtc_u_vol(res.data.volume)
      //   }
      // })
      // axios({
      //   method : 'get',
      //   url :`https://api.anteagle.tech/volume?pair=BTC/INRD`
      // }).then(res=>{
      //   if(res.data.volume){
      //     setbtc_vol(res.data.volume)
      //   }
      // })
      // axios({
      //   method : 'get',
      //   url :`https://api.anteagle.tech/volume?pair=BNB/USDT`
      // }).then(res=>{
      //   if(res.data.volume){
      //     setbnb_u_vol(res.data.volume)
      //   }
      // })
      // axios({
      //   method : 'get',
      //   url :`https://api.anteagle.tech/volume?pair=BNB/INRD`
      // }).then(res=>{
      //   if(res.data.volume){
      //     setbnb_vol(res.data.volume)
      //   }
      // })
      // axios({
      //   method : 'get',
      //   url :`https://api.anteagle.tech/volume?pair=ANTEAG/USDT`
      // }).then(res=>{
      //   if(res.data.volume){
      //     setant_u_vol(res.data.volume)
      //   }
      // })
      // axios({
      //   method : 'get',
      //   url :`https://api.anteagle.tech/volume?pair=ANTEAG/INRD`
      // }).then(res=>{
      //   if(res.data.volume){
      //     setant_vol(res.data.volume)
      //   }
      // })
      axios({
        method:'get',
        url :  `https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT` //`https://api.anteagle.tech/liveprice?pair=BTC/USDT`
      }).then(res=>{
        if(res.data){
          if(localStorage.getItem("pair")=='BTC/USDT'){
            setlive(parseFloat(res.data.price).toFixed(3))
          }
          else if(localStorage.getItem("pair")=='BTC/INRD'){
            setlive((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
            console.log(localStorage.getItem("conversion"))
            // setlive_BTC((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
          }
          setlive_BTC_u(parseFloat(res.data.price).toFixed(3))
        }
        
      })
            axios({
        method:'get',
        url :  `https://api.binance.com/api/v3/ticker/price?symbol=KSMUSDT` 
      }).then(res=>{
        if(res.data){
          if(localStorage.getItem("pair")=='KSM/USDT'){
            setlive(parseFloat(res.data.price).toFixed(3))
          }
          else if(localStorage.getItem("pair")=='KSM/INRD'){
            setlive((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
            console.log(localStorage.getItem("conversion"))
            // setlive_KSM((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
          }
          setlive_KSM_u(parseFloat(res.data.price).toFixed(3))
        }
        
      })

      axios({
        method:'get',
        url :  `https://api.binance.com/api/v3/ticker/price?symbol=ATAUSDT`
      }).then(res=>{
        if(res.data){
          if(localStorage.getItem("pair")=='ATA/USDT'){
            setlive(parseFloat(res.data.price).toFixed(3))
          }
          else if(localStorage.getItem("pair")=='ATA/INRD'){
            setlive((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
            console.log(localStorage.getItem("conversion"))
            // setlive_ATA((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
          }
          (parseFloat(res.data.price).toFixed(3))
        }
        
      })


      axios({
        method:'get',
        url :  `https://api.binance.com/api/v3/ticker/price?symbol=MANAUSDT` 
      }).then(res=>{
        if(res.data){
          if(localStorage.getItem("pair")=='MANA/USDT'){
            setlive(parseFloat(res.data.price).toFixed(3))
          }
          else if(localStorage.getItem("pair")=='MANA/INRD'){
            setlive((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
            console.log(localStorage.getItem("conversion"))
            // setlive_MANA((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
          }
          setlive_MANA_u(parseFloat(res.data.price).toFixed(3))
        }
        
      })


      axios({
        method:'get',
        url :  `https://api.binance.com/api/v3/ticker/price?symbol=DGBUSDT`
      }).then(res=>{
        if(res.data){
          if(localStorage.getItem("pair")=='DGB/USDT'){
            setlive(parseFloat(res.data.price).toFixed(3))
          }
          else if(localStorage.getItem("pair")=='DGB/INRD'){
            setlive((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
            console.log(localStorage.getItem("conversion"))
            // setlive_DGB((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
          }
          setlive_DGB_u(parseFloat(res.data.price).toFixed(3))
        }
        
      })

      axios({
        method:'get',
        url :  `https://api.binance.com/api/v3/ticker/price?symbol=FTMUSDT` 
      }).then(res=>{
        if(res.data){
          if(localStorage.getItem("pair")=='FTM/USDT'){
            setlive(parseFloat(res.data.price).toFixed(3))
          }
          else if(localStorage.getItem("pair")=='FTM/INRD'){
            setlive((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
            console.log(localStorage.getItem("conversion"))
            // setlive_FTM((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
          }
          setlive_FTM_u(parseFloat(res.data.price).toFixed(3))
        }
        
      })


      axios({
        method:'get',
        url :  `https://api.binance.com/api/v3/ticker/price?symbol=ALICEUSDT` 
      }).then(res=>{
        if(res.data){
          if(localStorage.getItem("pair")=='ALICE/USDT'){
            setlive(parseFloat(res.data.price).toFixed(3))
          }
          else if(localStorage.getItem("pair")=='ALICE/INRD'){
            setlive((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
            console.log(localStorage.getItem("conversion"))
            // setlive_ALICE((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
          }
          setlive_ALICE_u(parseFloat(res.data.price).toFixed(3))
        }
        
      })

      axios({
        method:'get',
        url :  `https://api.binance.com/api/v3/ticker/price?symbol=GTCUSDT` 
      }).then(res=>{
        if(res.data){
          if(localStorage.getItem("pair")=='GTC/USDT'){
            setlive(parseFloat(res.data.price).toFixed(3))
          }
          else if(localStorage.getItem("pair")=='GTC/INRD'){
            setlive((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
            console.log(localStorage.getItem("conversion"))
            // setlive_GTC((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
          }
          setlive_GTC_u(parseFloat(res.data.price).toFixed(3))
        }
        
      })

      axios({
        method:'get',
        url :  `https://api.binance.com/api/v3/ticker/price?symbol=MATICUSDT`
      }).then(res=>{
        if(res.data){
          if(localStorage.getItem("pair")=='MATIC/USDT'){
            setlive(parseFloat(res.data.price).toFixed(3))
          }
          else if(localStorage.getItem("pair")=='MATIC/INRD'){
            setlive((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
            console.log(localStorage.getItem("conversion"))
            // setlive_MATIC((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
          }
          setlive_MATIC_u(parseFloat(res.data.price).toFixed(3))
        }
        
      })

      axios({
        method:'get',
        url :  `https://api.binance.com/api/v3/ticker/price?symbol=AXSUSDT` 
      }).then(res=>{
        if(res.data){
          if(localStorage.getItem("pair")=='AXS/USDT'){
            setlive(parseFloat(res.data.price).toFixed(3))
          }
          else if(localStorage.getItem("pair")=='AXS/INRD'){
            setlive((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
            console.log(localStorage.getItem("conversion"))
            // setlive_AXS((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
          }
          setlive_AXS_u(parseFloat(res.data.price).toFixed(3))
        }
        
      })
      
      axios({
        method:'get',
        url :  `https://api.binance.com/api/v3/ticker/price?symbol=FTTUSDT` 
      }).then(res=>{
        if(res.data){
          if(localStorage.getItem("pair")=='FTT/USDT'){
            setlive(parseFloat(res.data.price).toFixed(3))
          }
          else if(localStorage.getItem("pair")=='FTT/INRD'){
            setlive((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
            console.log(localStorage.getItem("conversion"))
            // setlive_FTT((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
          }
          setlive_FTT_u(parseFloat(res.data.price).toFixed(3))
        }
        
      })

      axios({
        method:'get',
        url :  `https://api.binance.com/api/v3/ticker/price?symbol=SOLUSDT`
      }).then(res=>{
        if(res.data){
          if(localStorage.getItem("pair")=='SOL/USDT'){
            setlive(parseFloat(res.data.price).toFixed(3))
          }
          else if(localStorage.getItem("pair")=='SOL/INRD'){
            setlive((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
            console.log(localStorage.getItem("conversion"))
            // setlive_SOL((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
          }
          setlive_SOL_u(parseFloat(res.data.price).toFixed(3))
        }
        
      })
      
      axios({
        method:'get',
        url :  `https://api.binance.com/api/v3/ticker/price?symbol=RUNEUSDT` 
      }).then(res=>{
        if(res.data){
          if(localStorage.getItem("pair")=='RUNE/USDT'){
            setlive(parseFloat(res.data.price).toFixed(3))
          }
          else if(localStorage.getItem("pair")=='RUNE/INRD'){
            setlive((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
            console.log(localStorage.getItem("conversion"))
            // setlive_RUNE((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
          }
          setlive_RUNE_u(parseFloat(res.data.price).toFixed(3))
        }
        
      })

      axios({
        method:'get',
        url :  `https://api.binance.com/api/v3/ticker/price?symbol=UNIUSDT` 
      }).then(res=>{
        if(res.data){
          if(localStorage.getItem("pair")=='UNI/USDT'){
            setlive(parseFloat(res.data.price).toFixed(3))
          }
          else if(localStorage.getItem("pair")=='UNI/INRD'){
            setlive((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
            console.log(localStorage.getItem("conversion"))
            // setlive_UNI((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
          }
          setlive_UNI_u(parseFloat(res.data.price).toFixed(3))
        }
        
      })

      axios({
        method:'get',
        url :  `https://api.binance.com/api/v3/ticker/price?symbol=DOTUSDT` 
      }).then(res=>{
        if(res.data){
          if(localStorage.getItem("pair")=='DOT/USDT'){
            setlive(parseFloat(res.data.price).toFixed(3))
          }
          else if(localStorage.getItem("pair")=='DOT/INRD'){
            setlive((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
            console.log(localStorage.getItem("conversion"))
            // setlive_DOT((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
          }
          setlive_DOT_u(parseFloat(res.data.price).toFixed(3))
        }
        
      })

      axios({
        method:'get',
        url :  `https://api.binance.com/api/v3/ticker/price?symbol=VETUSDT` 
      }).then(res=>{
        if(res.data){
          if(localStorage.getItem("pair")=='VET/USDT'){
            setlive(parseFloat(res.data.price).toFixed(3))
          }
          else if(localStorage.getItem("pair")=='VET/INRD'){
            setlive((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
            console.log(localStorage.getItem("conversion"))
            // setlive_VET((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
          }
          setlive_VET_u(parseFloat(res.data.price).toFixed(3))
        }
        
      })

      axios({
        method:'get',
        url :  `https://api.binance.com/api/v3/ticker/price?symbol=TFUELUSDT` 
      }).then(res=>{
        if(res.data){
          if(localStorage.getItem("pair")=='TFUEL/USDT'){
            setlive(parseFloat(res.data.price).toFixed(3))
          }
          else if(localStorage.getItem("pair")=='TFUEL/INRD'){
            setlive((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
            console.log(localStorage.getItem("conversion"))
            // setlive_TFUEL((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
          }
          setlive_TFUEL_u(parseFloat(res.data.price).toFixed(3))
        }
        
      })

      axios({
        method:'get',
        url :  `https://api.binance.com/api/v3/ticker/price?symbol=GRTUSDT` 
      }).then(res=>{
        if(res.data){
          if(localStorage.getItem("pair")=='GRT/USDT'){
            setlive(parseFloat(res.data.price).toFixed(3))
          }
          else if(localStorage.getItem("pair")=='GRT/INRD'){
            setlive((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
            console.log(localStorage.getItem("conversion"))
            // setlive_GRT((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
          }
          setlive_GRT_u(parseFloat(res.data.price).toFixed(3))
        }
        
      })

      axios({
        method:'get',
        url :  `https://api.binance.com/api/v3/ticker/price?symbol=ADAUSDT` 
      }).then(res=>{
        if(res.data){
          if(localStorage.getItem("pair")=='ADA/USDT'){
            setlive(parseFloat(res.data.price).toFixed(3))
          }
          else if(localStorage.getItem("pair")=='ADA/INRD'){
            setlive((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
            console.log(localStorage.getItem("conversion"))
            // setlive_ADA((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
          }
          setlive_ADA_u(parseFloat(res.data.price).toFixed(3))
        }
        
      })

      axios({
        method:'get',
        url :  `https://api.binance.com/api/v3/ticker/price?symbol=FILUSDT` 
      }).then(res=>{
        if(res.data){
          if(localStorage.getItem("pair")=='FIL/USDT'){
            setlive(parseFloat(res.data.price).toFixed(3))
          }
          else if(localStorage.getItem("pair")=='FIL/INRD'){
            setlive((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
            console.log(localStorage.getItem("conversion"))
            // setlive_FIL((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
          }
          setlive_FIL_u(parseFloat(res.data.price).toFixed(3))
        }
        
      })

      axios({
        method:'get',
        url :  `https://api.binance.com/api/v3/ticker/price?symbol=LINKUSDT` 
      }).then(res=>{
        if(res.data){
          if(localStorage.getItem("pair")=='LINK/USDT'){
            setlive(parseFloat(res.data.price).toFixed(3))
          }
          else if(localStorage.getItem("pair")=='LINK/INRD'){
            setlive((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
            console.log(localStorage.getItem("conversion"))
            // setlive_LINK((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
          }
          setlive_LINK_u(parseFloat(res.data.price).toFixed(3))
        }
        
      })

      axios({
        method:'get',
        url :  `https://api.binance.com/api/v3/ticker/price?symbol=LUNAUSDT` 
      }).then(res=>{
        if(res.data){
          if(localStorage.getItem("pair")=='LUNA/USDT'){
            setlive(parseFloat(res.data.price).toFixed(3))
          }
          else if(localStorage.getItem("pair")=='LUNA/INRD'){
            setlive((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
            console.log(localStorage.getItem("conversion"))
            // setlive_LUNA((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
          }
          setlive_LUNA_u(parseFloat(res.data.price).toFixed(3))
        }
        
      })

      axios({
        method:'get',
        url :  `https://api.binance.com/api/v3/ticker/price?symbol=THETAUSDT` 
      }).then(res=>{
        if(res.data){
          if(localStorage.getItem("pair")=='THETA/USDT'){
            setlive(parseFloat(res.data.price).toFixed(3))
          }
          else if(localStorage.getItem("pair")=='THETA/INRD'){
            setlive((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
            console.log(localStorage.getItem("conversion"))
            // setlive_THETA((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
          }
          setlive_THETA_u(parseFloat(res.data.price).toFixed(3))
        }
        
      })

   
      
      
      
      // axios({
      //   method:'get',
      //   url :  `https://api.binance.com/api/v3/ticker/price?symbol=BTCINR` //`https://api.anteagle.tech/liveprice?pair=BTC/USDT`
      // }).then(res=>{
      //   if(res.data){
      //     if(localStorage.getItem("pair")=='BTC/INRD'){
      //       setlive(parseFloat(res.data.price).toFixed(3))
      //     }
      //     setlive_BTC(parseFloat(res.data.price).toFixed(3))
      //   }
        
      // })
      
      axios({
        method:'get',
        url : `https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT`//`https://api.anteagle.tech/liveprice?pair=ETH/USDT`
      }).then(res=>{
        if(res.data){
          if(localStorage.getItem("pair")=='ETH/USDT'){
            setlive(parseFloat(res.data.price).toFixed(3))
          }
          else if(localStorage.getItem("pair")=='ETH/INRD'){
            setlive((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
            setlive_ETH((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
          }
          setlive_ETH_u(parseFloat(res.data.price).toFixed(3))
        }
        
      })
     
      axios({
        method:'get',
        url : `https://api.binance.com/api/v3/ticker/price?symbol=BNBUSDT`    //`https://api.anteagle.tech/liveprice?pair=BNB/USDT`
      }).then(res=>{
       
        if(res.data){
          if(localStorage.getItem("pair")=="BNB/USDT"){

            setlive(parseFloat(res.data.price).toFixed(3))
          }
          else if(localStorage.getItem("pair")=='BNB/INRD'){
            setlive((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
            setlive_BNB((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
          }
          setlive_BNB_u(parseFloat(res.data.price).toFixed(3))
        }
        
      })
      axios({
        method : 'get',
        url : `https://api.anteagle.tech/orderbook?pair=${localStorage.getItem("pair")}`
      }).then(res2=>{
        var ans2 = []
        var ans3 = []
        for(let i =0;i<res2.data.length;i++){
          var temp = []
          var temp2 = []
          if(res2.data[i].side == 'BUY'){
            temp.push(res2.data[i].price)
            temp.push(res2.data[i].Amount)
            temp.push(res2.data[i].price*res2.data[i].Amount)
            temp.push(res2.data[i].pair)
            ans2.push(temp)
          }
          else{
            temp2.push(res2.data[i].price)
            temp2.push(res2.data[i].Amount)
            temp2.push(res2.data[i].price*res2.data[i].Amount)
            temp2.push(res2.data[i].pair)
            ans3.push(temp2)
          }
          
        }
        setbook(ans2)
        setbook_s(ans3)
      })
    axios({
        method:"post",
        url : `https://api.anteagle.tech/getorder?userid=${localStorage.getItem("userid")}&pair=${localStorage.getItem("pair")}`,
        headers:{
          'Accept' : 'application/json',
          Authtoken : "jkdhfjkdf"
        }
      }).then(({data})=>{

        var ans = []
        var ans1 = []
        for(let i=0;i<data.data.length;i++){
          if(data.data[i].status == "FILLED"){
            var temp1 = []
          temp1.push(data.data[i].date)
          temp1.push(data.data[i].pair)
          temp1.push(data.data[i].type)
          temp1.push(data.data[i].side)
          temp1.push(data.data[i].price)
          temp1.push(data.data[i].Amount)
          temp1.push(data.data[i].filled)
          temp1.push(data.data[i].total)
          temp1.push(data.data[i].status)
          ans1.push(temp1)
          }
          else{
            var temp = []
          temp.push(data.data[i].date)
          temp.push(data.data[i].pair)
          temp.push(data.data[i].type)
          temp.push(data.data[i].side)
          temp.push(data.data[i].price)
          temp.push(data.data[i].Amount)
          temp.push(data.data[i].filled)
          temp.push(data.data[i].total)
          temp.push(data.data[i].status)
          ans.push(temp)
          }
          
        } 
        setmyorder(ans)
        setfillorders(ans1)
      })
      // setc_order(data.data)
     
      axios({
        method : "get",
        url : `https://api.anteagle.tech/allwallet?userid=${localStorage.getItem("userid")}`,
        headers : {
          'Accept' : "application/json"
        }
      }).then(res1=>{
        console.log(res1.data.data)
        localStorage.setItem("BTC_Coins",res1.data.data.BTC_Coins)
      localStorage.setItem("BNB_Coins",res1.data.data.BNB_Coins)
      localStorage.setItem("ETH_Coins",res1.data.data.ETH_Coins)
      localStorage.setItem("ANTEAG_Coins",res1.data.data.ANT_Coins)
      localStorage.setItem("USDT_Coins",res1.data.data.USDT_Coins)
      localStorage.setItem("INRD_Coins",res1.data.data.INRD_Coins)
      localStorage.setItem("KSM_Coins",res1.data.data.KSM_Coins)
      localStorage.setItem("ATA_Coins",res1.data.data.ATA_Coins)
      localStorage.setItem("MANA_Coins",res1.data.data.MANA_Coins)
      localStorage.setItem("DGB_Coins",res1.data.data.DGB_Coins)
      localStorage.setItem("FTM_Coins",res1.data.data.FTM_Coins)
      localStorage.setItem("ALICE_Coins",res1.data.data.ALICE_Coins)
      localStorage.setItem("GTC_Coins",res1.data.data.GTC_Coins)
      localStorage.setItem("MATIC_Coins",res1.data.data.MATIC_Coins)
      localStorage.setItem("AXS_Coins",res1.data.data.AXS_Coins)
      localStorage.setItem("FTT_Coins",res1.data.data.FTT_Coins)
      localStorage.setItem("SOL_Coins",res1.data.data.SOL_Coins)
      localStorage.setItem("RUNE_Coins",res1.data.data.RUNE_Coins)
      localStorage.setItem("UNI_Coins",res1.data.data.UNI_Coins)
      localStorage.setItem("DOT_Coins",res1.data.data.DOT_Coins)
      localStorage.setItem("VET_Coins",res1.data.data.VET_Coins)
      localStorage.setItem("TFUEL_Coins",res1.data.data.TFUEL_Coins)
      localStorage.setItem("GRT_Coins",res1.data.data.GRT_Coins)
      localStorage.setItem("ADA_Coins",res1.data.data.ADA_Coins)
      localStorage.setItem("FIL_Coins",res1.data.data.FIL_Coins)
      localStorage.setItem("LINK_Coins",res1.data.data.LINK_Coins)
      localStorage.setItem("LUNA_Coins",res1.data.data.LUNA_Coins)
      localStorage.setItem("THETA_Coins",res1.data.data.THETA_Coins)
      

      })
      setloadin_cont(false)
       
    },2000)
    
   
  
  },[])
  
  const isMobile = width <= 900;
  if (isMobile) {
    return ( 
      

      <div className="content" style={{marginLeft:"0.8rem"}}>
        {loadin_cont ? <LoadDashMobile /> : <>
        <Row style={{marginBottom:"0.6rem",height:"7rem"}}>
        <div>
      <Navbar color="dark" light expand="md" style={{width:"100%"}}>
       
        <NavbarToggler style={{margin:"auto"}} onClick={toggle}>
        <span style={{fontSize:"2rem",color:"white",borderColor:"white"}}> {pair.substr(0,pair.indexOf("/"))} : {localStorage.getItem(`${pair.substr(0,pair.indexOf("/"))}_Coins`)} </span>
        <span style={{fontSize:"2rem",color:"white",borderColor:"white"}}> {pair.substr(pair.indexOf("/")+1,pair.length)} : {localStorage.getItem(`${pair.substr(pair.indexOf("/")+1,pair.length)}_Coins`)}  </span>

        
          
        </NavbarToggler>

       

          <Nav className="mr-auto" navbar>
            <NavItem style={{marginLeft:"1rem"}}> 
            
            <UncontrolledDropdown setActiveFromChild>
            
          <DropdownToggle tag="a" style={{fontSize:"1rem",borderRadius:"10px",borderWidth:'1px',borderColor:"white"}}  caret>
            {pair}   
          </DropdownToggle>
         
          <DropdownMenu>
            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('BTC/USDT');localStorage.setItem("pair",'BTC/USDT');settradingvalue('BTCUSDT');setlive(liveprice_BTC_u);setlivevol(btc_u_vol)}}>BTC/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('BTC/INRD');localStorage.setItem("pair",'BTC/INRD');settradingvalue('BTCINR');setlive(liveprice_BTC);setlivevol(btc_vol)}}>BTC/INRD</DropdownItem>
            
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('ETH/USDT');localStorage.setItem("pair",'ETH/USDT');settradingvalue('ETHUSDT');setlive(liveprice_ETH_u);setlivevol(eth_u_vol)}}>ETH/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('ETH/INRD');localStorage.setItem("pair",'ETH/INRD');settradingvalue('ETHINR');setlive(liveprice_ETH);setlivevol(eth_vol)}}>ETH/INRD</DropdownItem>
            
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('BNB/USDT');localStorage.setItem("pair",'BNB/USDT');settradingvalue('BNBUSDT');setlive(liveprice_BNB_u);setlivevol(bnb_u_vol)}}>BNB/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('BNB/INRD');localStorage.setItem("pair",'BNB/INRD');settradingvalue('BNBINR');setlive(liveprice_BNB);setlivevol(bnb_vol)}}>BNB/INR</DropdownItem>
            
            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('KSM/USDT');localStorage.setItem("pair",'KSM/USDT');settradingvalue('KSMUSDT');setlive(liveprice_KSM_u);setlivevol(btc_u_vol)}}>KSM/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('KSM/INRD');localStorage.setItem("pair",'KSM/INRD');settradingvalue('KSMINR');setlive(liveprice_KSM);setlivevol(bnb_vol)}}>KSM/INRD</DropdownItem>
            
            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('ATA/USDT');localStorage.setItem("pair",'ATA/USDT');settradingvalue('ATAUSDT');setlive(liveprice_ATA_u);setlivevol(btc_u_vol)}}>ATA/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('ATA/INRD');localStorage.setItem("pair",'ATA/INRD');settradingvalue('ATAINR');setlive(liveprice_ATA);setlivevol(bnb_vol)}}>ATA/INRD</DropdownItem>

            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('MANA/USDT');localStorage.setItem("pair",'MANA/USDT');settradingvalue('MANAUSDT');setlive(liveprice_MANA_u);setlivevol(btc_u_vol)}}>MANA/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('MANA/INRD');localStorage.setItem("pair",'MANA/INRD');settradingvalue('MANAINR');setlive(liveprice_MANA);setlivevol(bnb_vol)}}>MANA/INRD</DropdownItem>

            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('DGB/USDT');localStorage.setItem("pair",'DGB/USDT');settradingvalue('DGBUSDT');setlive(liveprice_DGB_u);setlivevol(btc_u_vol)}}>DGB/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('DGB/INRD');localStorage.setItem("pair",'DGB/INRD');settradingvalue('DGBINR');setlive(liveprice_DGB);setlivevol(bnb_vol)}}>DGB/INRD</DropdownItem>

            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('FTM/USDT');localStorage.setItem("pair",'FTM/USDT');settradingvalue('FTMUSDT');setlive(liveprice_FTM_u);setlivevol(btc_u_vol)}}>FTM/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('FTM/INRD');localStorage.setItem("pair",'FTM/INRD');settradingvalue('FTMINR');setlive(liveprice_FTM);setlivevol(bnb_vol)}}>FTM/INRD</DropdownItem>

            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('ALICE/USDT');localStorage.setItem("pair",'ALICE/USDT');settradingvalue('ALICEUSDT');setlive(liveprice_ALICE_u);setlivevol(btc_u_vol)}}>ALICE/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('ALICE/INRD');localStorage.setItem("pair",'ALICE/INRD');settradingvalue('ALICEINR');setlive(liveprice_ALICE);setlivevol(bnb_vol)}}>ALICE/INRD</DropdownItem>

            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('GTC/USDT');localStorage.setItem("pair",'GTC/USDT');settradingvalue('GTCUSDT');setlive(liveprice_GTC_u);setlivevol(btc_u_vol)}}>GTC/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('GTC/INRD');localStorage.setItem("pair",'GTC/INRD');settradingvalue('GTCINR');setlive(liveprice_GTC);setlivevol(bnb_vol)}}>GTC/INRD</DropdownItem>

            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('MATIC/USDT');localStorage.setItem("pair",'MATIC/USDT');settradingvalue('MATICUSDT');setlive(liveprice_MATIC_u);setlivevol(btc_u_vol)}}>MATIC/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('MATIC/INRD');localStorage.setItem("pair",'MATIC/INRD');settradingvalue('MATICINR');setlive(liveprice_MATIC);setlivevol(bnb_vol)}}>MATIC/INRD</DropdownItem>
          
            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('AXS/USDT');localStorage.setItem("pair",'AXS/USDT');settradingvalue('AXSUSDT');setlive(liveprice_AXS_u);setlivevol(btc_u_vol)}}>AXS/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('AXS/INRD');localStorage.setItem("pair",'AXS/INRD');settradingvalue('AXSINR');setlive(liveprice_AXS);setlivevol(bnb_vol)}}>AXS/INRD</DropdownItem>

            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('FTT/USDT');localStorage.setItem("pair",'FTT/USDT');settradingvalue('FTTUSDT');setlive(liveprice_FTT_u);setlivevol(btc_u_vol)}}>FTT/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('FTT/INRD');localStorage.setItem("pair",'FTT/INRD');settradingvalue('FTTINR');setlive(liveprice_FTT);setlivevol(bnb_vol)}}>FTT/INRD</DropdownItem>

            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('SOL/USDT');localStorage.setItem("pair",'SOL/USDT');settradingvalue('SOLUSDT');setlive(liveprice_SOL_u);setlivevol(btc_u_vol)}}>SOL/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('SOL/INRD');localStorage.setItem("pair",'SOL/INRD');settradingvalue('SOLINR');setlive(liveprice_SOL);setlivevol(bnb_vol)}}>SOL/INRD</DropdownItem>

            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('RUNE/USDT');localStorage.setItem("pair",'RUNE/USDT');settradingvalue('RUNEUSDT');setlive(liveprice_RUNE_u);setlivevol(btc_u_vol)}}>RUNE/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('RUNE/INRD');localStorage.setItem("pair",'RUNE/INRD');settradingvalue('RUNEINR');setlive(liveprice_RUNE);setlivevol(bnb_vol)}}>RUNE/INRD</DropdownItem>

            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('UNI/USDT');localStorage.setItem("pair",'UNI/USDT');settradingvalue('UNIUSDT');setlive(liveprice_UNI_u);setlivevol(btc_u_vol)}}>UNI/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('UNI/INRD');localStorage.setItem("pair",'UNI/INRD');settradingvalue('UNIINR');setlive(liveprice_UNI);setlivevol(bnb_vol)}}>UNI/INRD</DropdownItem>
            
            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('DOT/USDT');localStorage.setItem("pair",'DOT/USDT');settradingvalue('DOTUSDT');setlive(liveprice_DOT_u);setlivevol(btc_u_vol)}}>DOT/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('DOT/INRD');localStorage.setItem("pair",'DOT/INRD');settradingvalue('DOTINR');setlive(liveprice_DOT);setlivevol(bnb_vol)}}>DOT/INRD</DropdownItem>

            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('VET/USDT');localStorage.setItem("pair",'VET/USDT');settradingvalue('VETUSDT');setlive(liveprice_VET_u);setlivevol(btc_u_vol)}}>VET/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('VET/INRD');localStorage.setItem("pair",'VET/INRD');settradingvalue('VETINR');setlive(liveprice_VET);setlivevol(bnb_vol)}}>VET/INRD</DropdownItem>

            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('TFUEL/USDT');localStorage.setItem("pair",'TFUEL/USDT');settradingvalue('TFUELUSDT');setlive(liveprice_TFUEL_u);setlivevol(btc_u_vol)}}>TFUEL/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('TFUEL/INRD');localStorage.setItem("pair",'TFUEL/INRD');settradingvalue('TFUELINR');setlive(liveprice_TFUEL);setlivevol(bnb_vol)}}>TFUEL/INRD</DropdownItem>

            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('GRT/USDT');localStorage.setItem("pair",'GRT/USDT');settradingvalue('GRTUSDT');setlive(liveprice_GRT_u);setlivevol(btc_u_vol)}}>GRT/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('GRT/INRD');localStorage.setItem("pair",'GRT/INRD');settradingvalue('GRTINR');setlive(liveprice_GRT);setlivevol(bnb_vol)}}>GRT/INRD</DropdownItem>

            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('ADA/USDT');localStorage.setItem("pair",'ADA/USDT');settradingvalue('ADAUSDT');setlive(liveprice_ADA_u);setlivevol(btc_u_vol)}}>ADA/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('ADA/INRD');localStorage.setItem("pair",'ADA/INRD');settradingvalue('ADAINR');setlive(liveprice_ADA);setlivevol(bnb_vol)}}>ADA/INRD</DropdownItem>

            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('FIL/USDT');localStorage.setItem("pair",'FIL/USDT');settradingvalue('FILUSDT');setlive(liveprice_FIL_u);setlivevol(btc_u_vol)}}>FIL/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('FIL/INRD');localStorage.setItem("pair",'FIL/INRD');settradingvalue('FILINR');setlive(liveprice_FIL);setlivevol(bnb_vol)}}>FIL/INRD</DropdownItem>

            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('LINK/USDT');localStorage.setItem("pair",'LINK/USDT');settradingvalue('LINKUSDT');setlive(liveprice_LINK_u);setlivevol(btc_u_vol)}}>LINK/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('LINK/INRD');localStorage.setItem("pair",'LINK/INRD');settradingvalue('LINKINR');setlive(liveprice_LINK);setlivevol(bnb_vol)}}>LINK/INRD</DropdownItem>

            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('LUNA/USDT');localStorage.setItem("pair",'LUNA/USDT');settradingvalue('LUNAUSDT');setlive(liveprice_LUNA_u);setlivevol(btc_u_vol)}}>LUNA/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('LUNA/INRD');localStorage.setItem("pair",'LUNA/INRD');settradingvalue('LUNAINR');setlive(liveprice_LUNA);setlivevol(bnb_vol)}}>LUNA/INRD</DropdownItem>

            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('THETA/USDT');localStorage.setItem("pair",'THETA/USDT');settradingvalue('THETAUSDT');setlive(liveprice_FIL_u);setlivevol(btc_u_vol)}}>THETA/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('THETA/INRD');localStorage.setItem("pair",'THETA/INRD');settradingvalue('THETAINR');setlive(liveprice_FIL);setlivevol(bnb_vol)}}>THETA/INRD</DropdownItem>
            
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('ANTEAG/USDT');localStorage.setItem("pair",'ANTEAG/USDT');settradingvalue('ANTEAGUSDT');setlive(liveprice_ANTEAG_u);setlivevol(ant_u_vol)}}>ANTEAG/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('ANTEAG/INRD');localStorage.setItem("pair",'ANTEAG/INRD');settradingvalue('ANTEAGINR');setlive(liveprice_ANTEAG);setlivevol(ant_vol)}}>ANTEAG/INRD</DropdownItem>
          
          </DropdownMenu>
        </UncontrolledDropdown>
            </NavItem>
            <Collapse isOpen={isOpen} navbar>      
            <NavItem style={{marginLeft:"1rem"}}>
              <CardText>Current {pair.substr(0,pair.indexOf('/'))} Price</CardText><CardText style={{color:"green",fontWeight:"bold"}}>{liveprice} {pair.substr(pair.indexOf('/')+1,pair.length)}</CardText>
            </NavItem>
            {/* <NavItem style={{marginLeft:"1rem"}}>
              <CardText>24 hour {pair.substr(0,pair.indexOf('/'))} Volume</CardText><CardText style={{color:"green",fontWeight:"bold"}}>{live_vol} {pair.substr(pair.indexOf('/')+1,pair.length)}</CardText>
            </NavItem> */}
            <NavItem style={{marginLeft:"1rem"}}>
            <CardText>BTC Wallet</CardText><CardText style={{color:"yellow"}} >{localStorage.getItem("BTC_Coins")}</CardText>
            </NavItem>
            
            <NavItem style={{marginLeft:"1rem"}}>
            <CardText>KSM Wallet</CardText><CardText style={{color:"yellow"}} >{localStorage.getItem("KSM_Coins")}</CardText>
            </NavItem>
            
            <NavItem style={{marginLeft:"1rem"}}>
            <CardText>ATA Wallet</CardText><CardText style={{color:"yellow"}} >{localStorage.getItem("ATA_Coins")}</CardText>
            </NavItem>
            
            <NavItem style={{marginLeft:"1rem"}}>
            <CardText>MANA Wallet</CardText><CardText style={{color:"yellow"}} >{localStorage.getItem("MANA_Coins")}</CardText>
            </NavItem>
            
            <NavItem style={{marginLeft:"1rem"}}>
            <CardText>DGB Wallet</CardText><CardText style={{color:"yellow"}} >{localStorage.getItem("DGB_Coins")}</CardText>
            </NavItem>

            <NavItem style={{marginLeft:"1rem"}}>
            <CardText>FTM Wallet</CardText><CardText style={{color:"yellow"}} >{localStorage.getItem("FTM_Coins")}</CardText>
            </NavItem>

            <NavItem style={{marginLeft:"1rem"}}>
            <CardText>ALICE Wallet</CardText><CardText style={{color:"yellow"}} >{localStorage.getItem("ALICE_Coins")}</CardText>
            </NavItem>

            <NavItem style={{marginLeft:"1rem"}}>
            <CardText>GTC Wallet</CardText><CardText style={{color:"yellow"}} >{localStorage.getItem("GTC_Coins")}</CardText>
            </NavItem>

            <NavItem style={{marginLeft:"1rem"}}>
            <CardText>MATIC Wallet</CardText><CardText style={{color:"yellow"}} >{localStorage.getItem("MATIC_Coins")}</CardText>
            </NavItem>

            <NavItem style={{marginLeft:"1rem"}}>
            <CardText>AXS Wallet</CardText><CardText style={{color:"yellow"}} >{localStorage.getItem("AXS_Coins")}</CardText>
            </NavItem>

            <NavItem style={{marginLeft:"1rem"}}>
            <CardText>FTT Wallet</CardText><CardText style={{color:"yellow"}} >{localStorage.getItem("FTT_Coins")}</CardText>
            </NavItem>


            <NavItem style={{marginLeft:"1rem"}}>
            <CardText>SOL Wallet</CardText><CardText style={{color:"yellow"}} >{localStorage.getItem("SOL_Coins")}</CardText>
            </NavItem>

            <NavItem style={{marginLeft:"1rem"}}>
            <CardText>RUNE Wallet</CardText><CardText style={{color:"yellow"}} >{localStorage.getItem("RUNE_Coins")}</CardText>
            </NavItem>

            <NavItem style={{marginLeft:"1rem"}}>
            <CardText>UNI Wallet</CardText><CardText style={{color:"yellow"}} >{localStorage.getItem("UNI_Coins")}</CardText>
            </NavItem>

            <NavItem style={{marginLeft:"1rem"}}>
            <CardText>DOT Wallet</CardText><CardText style={{color:"yellow"}} >{localStorage.getItem("DOT_Coins")}</CardText>
            </NavItem>

            <NavItem style={{marginLeft:"1rem"}}>
            <CardText>VET Wallet</CardText><CardText style={{color:"yellow"}} >{localStorage.getItem("VET_Coins")}</CardText>
            </NavItem>
            
            <NavItem style={{marginLeft:"1rem"}}>
            <CardText>TFUEL Wallet</CardText><CardText style={{color:"yellow"}} >{localStorage.getItem("TFUEL_Coins")}</CardText>
            </NavItem>

            <NavItem style={{marginLeft:"1rem"}}>
            <CardText>GRT Wallet</CardText><CardText style={{color:"yellow"}} >{localStorage.getItem("GRT_Coins")}</CardText>
            </NavItem>
            
            <NavItem style={{marginLeft:"1rem"}}>
            <CardText>ADA Wallet</CardText><CardText style={{color:"yellow"}} >{localStorage.getItem("ADA_Coins")}</CardText>
            </NavItem>

            <NavItem style={{marginLeft:"1rem"}}>
            <CardText>FIL Wallet</CardText><CardText style={{color:"yellow"}} >{localStorage.getItem("FIL_Coins")}</CardText>
            </NavItem>

            <NavItem style={{marginLeft:"1rem"}}>
            <CardText>LINK Wallet</CardText><CardText style={{color:"yellow"}} >{localStorage.getItem("LINK_Coins")}</CardText>
            </NavItem>

            <NavItem style={{marginLeft:"1rem"}}>
            <CardText>LUNA Wallet</CardText><CardText style={{color:"yellow"}} >{localStorage.getItem("LUNA_Coins")}</CardText>
            </NavItem>

            <NavItem style={{marginLeft:"1rem"}}>
            <CardText>THETA Wallet</CardText><CardText style={{color:"yellow"}} >{localStorage.getItem("THETA_Coins")}</CardText>
            </NavItem>

           
            
            <NavItem style={{marginLeft:"1rem"}}>
            <CardText>ETH Wallet</CardText><CardText style={{color:"yellow"}} >{localStorage.getItem("ETH_Coins")}</CardText>
            </NavItem>
            <NavItem style={{marginLeft:"1rem"}}>
            <CardText>USDT Wallet</CardText><CardText style={{color:"yellow"}} >{localStorage.getItem("USDT_Coins")}</CardText>
            </NavItem>
            <NavItem style={{marginLeft:"1rem"}}>
            <CardText>ANTEAG Wallet</CardText><CardText style={{color:"yellow"}} >{localStorage.getItem("ANTEAG_Coins")}</CardText>
            </NavItem>
            <NavItem style={{marginLeft:"1rem"}}>
            <CardText>INRD Wallet</CardText><CardText style={{color:"yellow"}} >{localStorage.getItem("INRD_Coins")}</CardText>
            </NavItem>


</Collapse>          
       
</Nav>
         
        
      </Navbar>
    </div>
        </Row>
       
{pair == 'ANTEAG/USDT' || pair == 'ANTEAG/INRD' ? <ChartViewer  className="apexcharts-tooltip"/>: 
<TradingViewWidget
    symbol={tradingvalue}
    theme={Themes.DARK}
    locale="en"
    width="100%"
    height="800vh"
  />}


      
        <Row>
         
          <Col className="mr-auto ml-auto" lg="6">

          </Col>
          <Col lg="6">
           
          </Col>
        </Row>
        <Row>
          <Col lg="6" md="12">
            <Card className="card-tasks">
              <CardHeader>
             <h3> Order Book (BUY)</h3>
              </CardHeader>
              <CardBody>
   
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Price</th>
                      <th>Amount</th>
                      <th>Total</th>
                      <th>pair</th>
                    </tr>
                  </thead>
                  <tbody>
                    {book.map((ans1,i)=>{
                      return(
                        <tr>
                          {ans1.map((res1,i)=>{
                            return(
                              <td>{res1}</td>
                            )
                          })}
                        </tr>
                      )
                    })}
                  </tbody>
                </Table>
               
              </CardBody>
            </Card>
          </Col>
          <Col lg="6" md="12">
            <Card className="card-tasks">
              <CardHeader>
             <h3> Order Book (SELL)</h3>
              </CardHeader>
              <CardBody>
   
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Price</th>
                      <th>Amount</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                  {book_s.map((ans1,i)=>{
                      return(
                        <tr>
                          {ans1.map((res1,i)=>{
                            return(
                              <td>{res1}</td>
                            )
                          })}
                        </tr>
                      )
                    })}
                  </tbody>
                </Table>
               
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Col xs="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Order Table</CardTitle>
              </CardHeader>
              <CardBody>
               <Tabs>
                <TabList>
                  <Tab>Open Orders({myorders.length})</Tab>
                  <Tab>Order History</Tab>
                  <Tab>Trade History</Tab>
                </TabList>
                <TabPanel>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Date</th>
                      <th>Pair</th>
                      <th>type</th>
                      <th>Side</th>
                      <th>Price</th>
                      <th> Amount</th>
                      <th>Filled</th>
                      <th>Total</th>
                      <th>status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                
                 {fillorders.map((ans,i)=>{
                   return(
                    <tr>
                      {  ans.map((res,i)=>{
                    return(
                      <td>{res}</td>
                    )
                   })}
                  <td><Button title="Cancel" onClick={()=>{
                    axios({
                      method:'post',
                      url : `https://api.anteagle.tech/cancel?userid=${localStorage.getItem("userid")}`,
                      headers:{
                        "Accept": "application/json, text/plain, */*",
                        'Content-type' : "application/json"
                      },
                      data : JSON.stringify({
                        date : ans[0],
                        pair : ans[1],
                        type : ans[2],
                        side : ans[3],
                        price : ans[4],
                        Amount : ans[5],
                        filled : ans[6],
                        total : ans[7],
                        status : ans[8],
                        
                      })
                    }).then(res=>{
                      console.log(res.data)
                      swal("Canceled","Your order Canceled Successfully","success")
                    })
                  }}>Cancel</Button></td>
                       </tr>
                   )
                 
                      
                 })}
               
                    
                  </tbody>
                </Table>
                </TabPanel>
                <TabPanel>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Date</th>
                      <th>Pair</th>
                      <th>type</th>
                      <th>Side</th>
                      <th>Price</th>
                      <th> Amount</th>
                      <th>Filled</th>
                      <th>Total</th>
                      <th>status</th>
                    </tr>
                  </thead>
                  <tbody>
                
                 {fillorders.map((ans,i)=>{
                   return(
                    <tr>
                      {  ans.map((res,i)=>{
                    return(
                      <td>{res}</td>
                    )
                   })}
                 
                       </tr>
                   )
                 
                      
                 })}
               
                    
                  </tbody>
                </Table>
                </TabPanel>
                <TabPanel>

                </TabPanel>
               </Tabs>
              </CardBody>
            </Card>
          </Col>
          <Modal show={showModal} onHide={handleClose}>
        
        
        <Card className="card-chart">
              <CardHeader>
                
                <CardTitle tag="h3">
                  <i className="tim-icons icon-delivery-fast text-primary" />{" "}
                  BUY
                </CardTitle>
              </CardHeader>
              <CardBody>
              <Tabs>
    <TabList>
      <Tab>Limit</Tab>
      <Tab>Market</Tab>
    </TabList>

    <TabPanel>
    <Form >
    <Label>Price</Label>
    <Input  onChange={(event)=>{
      setbuy_limit_price(parseFloat(event.target.value) )

    }} placeholder={`ENTER PRICE in ${pair.substr(pair.indexOf('/')+1,pair.length)}`}></Input>
    <Label>Amount</Label>
   
    
    <Input invalid={!valid} placeholder={`ENTER AMOUNT in ${pair.substr(0,pair.indexOf('/'))}`} value={buy_limit_amount} onChange={(event)=>{
      const curr = `${pair.substr(pair.indexOf('/')+1,pair.length)}_Coins`
     if(parseFloat(event.target.value*buy_limit_price)>parseFloat(localStorage.getItem(curr))){
      setvalid(false)
     }
     else{
      setvalid(true)
      setbuy_limit_amount(parseFloat(event.target.value))
     }
      
    }}></Input>

      <Label>Total</Label>
   <Input invalid={!valid} placeholder={`TOTAL AMOUNT in ${pair.substr(pair.indexOf('/')+1,pair.length)}`} onChange={(event)=>{
      const curr = `${pair.substr(pair.indexOf('/')+1,pair.length)}_Coins`
      console.log()
     if(parseFloat(event.target.value)>parseFloat(localStorage.getItem(curr))){
      setvalid(false)
     }
     else{
      setvalid(true)
      console.log()
      setbuy_limit_amount(parseFloat(parseFloat(event.target.value) /parseFloat(buy_limit_price)) )
     }
      
    }}></Input>

    <Button disabled={!valid} onClick={()=>{
      axios({
        method:"POST",
        url:"https://api.anteagle.tech/neworder",
        headers:{
          "Accept": "application/json, text/plain, */*", // It can be used to overcome cors errors
          "Content-Type": "application/json",
        },
        data: JSON.stringify({
          userid : localStorage.getItem("userid"),
          date: "2021-06-21",
          pair: pair,
          type : "Market",
          side : "BUY",
          price : buy_limit_price,
          Amount : buy_limit_amount,
          filled : "0.0",
          total : buy_limit_price * buy_limit_amount
        }),
      }).then(res=>{console.log(res.data)})
    
      if(pair[pair.length-1] == 'T'){
        axios({
          method:"POST",
          url:"https://api.anteagle.tech/neworder",
          headers:{
            "Accept": "application/json, text/plain, */*", // It can be used to overcome cors errors
            "Content-Type": "application/json",
          },
          data: JSON.stringify({
            userid : localStorage.getItem("userid"),
            date: "2021-06-21",
            pair: pair.replace("USDT","INRD"),
            type : "Market",
            side : "BUY",
            price : buy_limit_price*conversion,
            Amount : buy_limit_amount,
            filled : "0.0",
            total : buy_limit_price*conversion*buy_limit_amount
          }),
        }).then(res=>{console.log(res.data);swal("Success","Order Submitted Successfully","success");window.location.href = "/"})
      }
      else{
        axios({
          method:"POST",
          url:"https://api.anteagle.tech/neworder",
          headers:{
            "Accept": "application/json, text/plain, */*", // It can be used to overcome cors errors
            "Content-Type": "application/json",
            Authtoken:"sfsfsff"
          },
          data: JSON.stringify({
            userid : localStorage.getItem("userid"),
            date: "2021-06-21",
            pair: pair.replace("INRD","USDT"),
            type : "Market",
            side : "BUY",
            price : buy_limit_price/conversion,
            Amount : buy_limit_amount,
            filled : "0.0",
            total : (buy_limit_price/conversion)*buy_limit_amount
          }),
        }).then(res=>{console.log(res.data);swal("Success","Order Submitted Successfully","success");window.location.href = "/"})
      }

      
      const curr = `${pair.substr(pair.indexOf('/')+1,pair.length)}`
      console.log(localStorage.getItem(`${curr}_Coins`) - buy_limit_price*buy_limit_amount)
      const end = parseFloat(localStorage.getItem(`${curr}_Coins`)) - buy_limit_price*buy_limit_amount;
      const range=-9999;                                     //add range
      if( end < 0 && end > range){
        alert("Are you sure that you want to proceed further?");
        var te = parseFloat(localStorage.getItem(`${curr}_Debt`));
        if(te === null){
          te = 0;
        }

        localStorage.setItem(`${curr}_Debt `,end+te);        //set debt
      }
       
      if(end<range) alert("Cannot go beyond this range"); 
      localStorage.setItem(`${curr}_Coins`,end)
      axios({
        method:"post",
        url : `https://api.anteagle.tech/get${curr.toLowerCase()}?coins=${end}&userid=${localStorage.getItem("userid")}`,
        headers:{
          "Accept": "application/json",
        }
      }).then(res=>{
        console.log(res.data)
      })
    }}>Submit</Button>
    </Form>
    </TabPanel>
    <TabPanel>
    <Form >
    <Label>Price</Label>
    <Input placeholder={`ENTER PRICE in ${pair.substr(pair.indexOf('/')+1,pair.length)}`} value={liveprice} onChange={(event)=>{
      setbuy_market_price(event.target.value)
    }}></Input>
    <Label>Amount</Label>
    <Input placeholder={`ENTER AMOUNT in ${pair.substr(0,pair.indexOf('/'))}`} value={buy_market_amount} onChange={(event)=>{
      setbuy_market_amount(event.target.value)
    }}  placeholder={`ENTER AMOUNT in ${pair.substr(0,pair.indexOf('/'))}`}></Input>

      <Label>Total</Label>
   <Input invalid={!valid} placeholder={`TOTAL AMOUNT in ${pair.substr(pair.indexOf('/')+1,pair.length)}`} onChange={(event)=>{
      const curr = `${pair.substr(pair.indexOf('/')+1,pair.length)}_Coins`
   
     if(parseFloat(event.target.value*buy_limit_price)>localStorage.getItem(curr)){
      
      setvalid(false)
     }
     else{
      setvalid(true)
      setbuy_limit_amount(event.target.value)
     }
      
    }}></Input>
    <Button onClick={()=>{
      axios({
        method:"POST",
        url:"https://api.anteagle.tech/neworder",
        headers:{
          "Accept": "application/json, text/plain, */*", // It can be used to overcome cors errors
          "Content-Type": "application/json",
          Authtoken:"sfsfsff"
        },
        data: JSON.stringify({
          userid : localStorage.getItem("userid"),
          date: "2021-06-21",
          pair: pair,
          type : "Market",
          side : "BUY",
          price : buy_market_price,
          Amount : buy_market_amount,
          filled : "0.0",
          total : buy_market_price*buy_market_amount
        }),
      }).then(res=>{console.log(res.data)})
      const curr = `${pair.substr(pair.indexOf('/')+1,pair.length)}`
      console.log(localStorage.getItem(`${curr}_Coins`) - buy_limit_price*buy_limit_amount)
      const end = localStorage.getItem(`${curr}_Coins`) - buy_limit_price*buy_limit_amount;
      
      localStorage.setItem(`${curr}_Coins`)
      axios({
        method:"post",
        url : `https://api.anteagle.tech/get${curr.toLowerCase()}?coins=${end}&userid=${localStorage.getItem("userid")}`,
        headers:{
          "Accept": "application/json",
        }
      }).then(res=>{
        console.log(res.data);swal("Success","Order Submitted Successfully","success");window.location.href = "/"
      })
    }}>Submit</Button>
    </Form>
    </TabPanel>
  </Tabs>
              </CardBody>
            </Card>
      </Modal>

      <Modal show={showModal2} onHide={handleClose2}>
        <Card className="card-chart">
              <CardHeader>
                
                <CardTitle tag="h3">
                  <i className="tim-icons icon-send text-success" /> SELL
                </CardTitle>
              </CardHeader>
              <CardBody>
              <Tabs>
    <TabList>
      <Tab>Limit</Tab>
      <Tab>Market</Tab>
    </TabList>

    <TabPanel>
    <Form >
    <Label>Price</Label>
    <Input placeholder={`ENTER PRICE in ${pair.substr(pair.indexOf('/')+1,pair.length)}`} onChange={(event)=>{
      setsell_limit_price(parseFloat(event.target.value))
    }}></Input>
    <Label>Amount</Label>
    <Input invalid={!valid_s} placeholder={`ENTER AMOUNT in ${pair.substr(0,pair.indexOf('/'))}`} value={sell_limit_amount} onChange={(event)=>{
      if(parseFloat(event.target.value) > parseFloat(localStorage.getItem("BTC_Coins"))){
        setvalid_s(false)
      }
      else{
        setvalid_s(true)
        setsell_limit_amount(parseFloat(event.target.value))
      }
      
    }} ></Input>

     
      <Label>Total</Label>
   <Input invalid={!valid_s} placeholder={`TOTAL AMOUNT in ${pair.substr(pair.indexOf('/')+1,pair.length)}`} onChange={(event)=>{
      const curr = `${pair.substr(0,pair.indexOf('/'))}_Coins`
     if(parseFloat(event.target.value)/parseFloat(sell_limit_price)>parseFloat(localStorage.getItem(curr))){
      setvalid_s(false)
     }
     else{
      setvalid_s(true)
      setsell_limit_amount(parseFloat(event.target.value)/parseFloat(sell_limit_price))
     }
      
    }}></Input>
    <Button disabled={!valid_s} onClick={()=>{
      axios({
        method:"POST",
        url:"https://api.anteagle.tech/neworder",
        headers:{
          "Accept": "application/json, text/plain, */*", // It can be used to overcome cors errors
          "Content-Type": "application/json",
          Authtoken:"sfsfsff"
        },
        data: JSON.stringify({
          userid : localStorage.getItem("userid"),
          date: "2021-06-21",
          pair: pair,
          type : "Market",
          side : "SELL",
          price : parseFloat(sell_limit_price),
          Amount : sell_limit_amount,
          filled : "0.0",
          total : sell_limit_price*sell_limit_amount
        }),
      }).then(res=>{console.log(res.data)})
      const curr = `${pair.substr(0,pair.indexOf('/'))}`
      console.log(localStorage.getItem(`${curr}_Coins`) - sell_limit_amount)
      const end = localStorage.getItem(`${curr}_Coins`) - sell_limit_amount;
      localStorage.setItem(`${curr}_Coins`,end)
      axios({
        method:"post",
        url : `https://api.anteagle.tech/get${curr.toLowerCase()}?coins=${end}&userid=${localStorage.getItem("userid")}`,
        headers:{
          "Accept": "application/json",
        }
      }).then(res=>{
        console.log(res.data);swal("Success","Order Submitted Successfully","success");window.location.href = "/"
      })
    }}>Submit</Button>
    </Form>
    </TabPanel>
    <TabPanel>
    <Form > 
    <Label>Price</Label>
    <Input placeholder={`ENTER PRICE in ${pair.substr(pair.indexOf('/')+1,pair.length)}`} onChange={(event)=>{
      setsell_market_amount(parseFloat(event.target.value))
    }} ></Input>
    <Label>Amount</Label>
    <Input placeholder={`ENTER AMOUNT in ${pair.substr(0,pair.indexOf('/'))}`} value={sell_market_amount} onChange={(event)=>{
      setsell_market_amount(parseFloat(event.target.value))
    }} ></Input>

     
      <Label>Total</Label>
   <Input invalid={!valid_s} placeholder={`TOTAL AMOUNT in ${pair.substr(pair.indexOf('/')+1,pair.length)}`} onChange={(event)=>{
      const curr = `${pair.substr(pair.indexOf('/')+1,pair.length)}_Coins`
     if((parseFloat(event.target.value)/parseFloat(sell_market_price))>localStorage.getItem(curr)){
      setvalid_s(false)
     }
     else{
      setvalid_s(true)
      setsell_market_amount(parseFloat(event.target.value)/parseFloat(sell_market_price))
     }
      
    }}></Input>
    <Button onClick={()=>{
      axios({
        method:"POST",
        url:"https://api.anteagle.tech/neworder",
        headers:{
          "Accept": "application/json, text/plain, */*",
          "Content-Type": "application/json",
          Authtoken:"sfsfsff"
        },
        data: JSON.stringify({
          userid : localStorage.getItem("userid"),
          date: "2021-06-21",
          pair: pair,
          type : "Market",
          side : "SELL",
          price : parseFloat(sell_market_price),
          Amount : parseFloat(sell_market_amount),
          filled : "0.0",
          total : parseFloat(sell_market_price*sell_market_amount),
        }),
      }).then(res=>{console.log(res.data)})
      axios({
        method:"post",
        url : `http://103.155.73.35/get${pair.substr(0,pair.indexOf('/')).toLowerCase()}?coins=${parseFloat(localStorage.getItem(`${pair.substr(0,pair.indexOf('/'))}_Coins`))-parseFloat(sell_market_amount)}`,
        headers:{
          "Accept": "application/json"
        }
      }).then(res=>{
        console.log(res.data);swal("Success","Order Submitted Successfully","success");window.location.href = "/"
      })
    }}>Submit</Button>
    </Form>
    </TabPanel>
  </Tabs>
              </CardBody>
            </Card>
      </Modal>

      <Fab 
variant="extended"
className={classes.fab1}
onClick={handleShow}
>
        Buy
      </Fab>  
      <Fab 
      variant="extended"
         
          className={classes.fab2}
onClick={handleShow2}
      >
        Sell
      </Fab>
       </> 
        }
      </div>
    );
  
  } else {
   
  return (
    
    <>
      <Dialog open={port} onClose={()=>{
        setport(false)
      }} aria-labelledby="form-dialog-title">
        <DialogContent>
        <Card>
      <CardBody>
        
        <CardTitle style={{textAlign:"center"}} tag="h3"><img src={Btc}/> BITCOIN<br/><div style={{marginBottom:"-2rem", color:"yellow"}}>{localStorage.getItem("BTC_Coins")} BTC</div></CardTitle>
      </CardBody>
    </Card>
    <Card>
      <CardBody>
       
        <CardTitle style={{textAlign:"center"}}  tag="h3"><img src={Bnb}/>    BNB <div style={{marginBottom:"-2rem", color:"yellow"}}>{localStorage.getItem("BNB_Coins")} BNB</div></CardTitle>
      </CardBody>
    </Card>
    <Card>
      <CardBody>
        
        <CardTitle style={{textAlign:"center"}}  tag="h3"><img src={Eth}/>    ETHEREUM <div style={{marginBottom:"-2rem", color:"yellow"}}>{localStorage.getItem("ETH_Coins")} ETH</div></CardTitle>
      </CardBody>
    </Card>
    <Card>
      <CardBody>
        
        <CardTitle style={{textAlign:"center"}}  tag="h3"><img height="30rem" src={usdt}/>    USDT <div style={{marginBottom:"-2rem", color:"yellow"}}>{localStorage.getItem("USDT_Coins")} USDT</div></CardTitle>
      </CardBody>
    </Card>
    <Card>
      <CardBody>
       
        <CardTitle style={{textAlign:"center"}}  tag="h3"> <img height="30rem" src={ruppee}/>    INRD <div style={{marginBottom:"-2rem", color:"yellow"}}>{localStorage.getItem("INRD_Coins")} INRD</div></CardTitle>
      </CardBody>
    </Card>

     <Card>
      <CardBody>
       
        <CardTitle style={{textAlign:"center"}}  tag="h3"> <img height="30rem" src={Ksm}/>    KUSAMA <div style={{marginBottom:"-2rem", color:"yellow"}}>{localStorage.getItem("KSM_Coins")} KSM</div></CardTitle>
      </CardBody>
    </Card>  
    <Card>
      <CardBody>
       
        <CardTitle style={{textAlign:"center"}}  tag="h3"> <img height="30rem" src={ata}/>    AUTOMATA NETWORK <div style={{marginBottom:"-2rem", color:"yellow"}}>{localStorage.getItem("ATA_Coins")} ATA</div></CardTitle>
      </CardBody>
    </Card>

     <Card>
      <CardBody>
       
        <CardTitle style={{textAlign:"center"}}  tag="h3"> <img height="30rem" src={Mana}/>   DECENTRALAND  <div style={{marginBottom:"-2rem", color:"yellow"}}>{localStorage.getItem("MANA_Coins")} MANA</div></CardTitle>
      </CardBody>
    </Card>

     <Card>
      <CardBody>
       
        <CardTitle style={{textAlign:"center"}}  tag="h3"> <img height="30rem" src={Dgb}/>    DIGIBYTE <div style={{marginBottom:"-2rem", color:"yellow"}}>{localStorage.getItem("DGB_Coins")} DGB</div></CardTitle>
      </CardBody>
    </Card>

     <Card>
      <CardBody>
       
        <CardTitle style={{textAlign:"center"}}  tag="h3"> <img height="30rem" src={ftm}/>    FANTOM <div style={{marginBottom:"-2rem", color:"yellow"}}>{localStorage.getItem("FTM_Coins")} FTM</div></CardTitle>
      </CardBody>
    </Card>

     <Card>
      <CardBody>
       
        <CardTitle style={{textAlign:"center"}}  tag="h3"> <img height="30rem" src={alice}/>    MY NEIGHBOR ALICE <div style={{marginBottom:"-2rem", color:"yellow"}}>{localStorage.getItem("ALICE_Coins")} ALICE</div></CardTitle>
      </CardBody>
    </Card>

     <Card>
      <CardBody>
       
        <CardTitle style={{textAlign:"center"}}  tag="h3"> <img height="30rem" src={gtc}/>    GITCOIN <div style={{marginBottom:"-2rem", color:"yellow"}}>{localStorage.getItem("GTC_Coins")} GTC</div></CardTitle>
      </CardBody>
    </Card>

     <Card>
      <CardBody>
       
        <CardTitle style={{textAlign:"center"}}  tag="h3"> <img height="30rem" src={Matic}/>    MATIC NETWORK <div style={{marginBottom:"-2rem", color:"yellow"}}>{localStorage.getItem("MATIC_Coins")} MATIC</div></CardTitle>
      </CardBody>
    </Card>

     <Card>
      <CardBody>
       
        <CardTitle style={{textAlign:"center"}}  tag="h3"> <img height="30rem" src={axs}/>    AXIE INFINITY <div style={{marginBottom:"-2rem", color:"yellow"}}>{localStorage.getItem("AXS_Coins")} AXS</div></CardTitle>
      </CardBody>
    </Card>

     <Card>
      <CardBody>
       
        <CardTitle style={{textAlign:"center"}}  tag="h3"> <img height="30rem" src={ftt}/>    FTX TOKEN <div style={{marginBottom:"-2rem", color:"yellow"}}>{localStorage.getItem("FTT_Coins")} FTT</div></CardTitle>
      </CardBody>
    </Card>

     <Card>
      <CardBody>
       
        <CardTitle style={{textAlign:"center"}}  tag="h3"> <img height="30rem" src={Sol}/>    SOLANA <div style={{marginBottom:"-2rem", color:"yellow"}}>{localStorage.getItem("SOL_Coins")} SOL</div></CardTitle>
      </CardBody>
    </Card>

     <Card>
      <CardBody>
       
        <CardTitle style={{textAlign:"center"}}  tag="h3"> <img height="30rem" src={rune}/>   THORCHAIN <div style={{marginBottom:"-2rem", color:"yellow"}}>{localStorage.getItem("RUNE_Coins")} RUNE</div></CardTitle>
      </CardBody>
    </Card>

     <Card>
      <CardBody>
       
        <CardTitle style={{textAlign:"center"}}  tag="h3"> <img height="30rem" src={uni}/>    UNISWAP <div style={{marginBottom:"-2rem", color:"yellow"}}>{localStorage.getItem("UNI_Coins")} UNI</div></CardTitle>
      </CardBody>
    </Card>  

    <Card>
      <CardBody>
       
        <CardTitle style={{textAlign:"center"}}  tag="h3"> <img height="30rem" src={Dot}/>    POLKADOT <div style={{marginBottom:"-2rem", color:"yellow"}}>{localStorage.getItem("DOT_Coins")} DOT</div></CardTitle>
      </CardBody>
    </Card>

     <Card>
      <CardBody>
       
        <CardTitle style={{textAlign:"center"}}  tag="h3"> <img height="30rem" src={vet}/>    VECHAIN <div style={{marginBottom:"-2rem", color:"yellow"}}>{localStorage.getItem("VET_Coins")} VET</div></CardTitle>
      </CardBody>
    </Card>

     <Card>
      <CardBody>
       
        <CardTitle style={{textAlign:"center"}}  tag="h3"> <img height="30rem" src={tfuel}/>    THETA FUEL <div style={{marginBottom:"-2rem", color:"yellow"}}>{localStorage.getItem("TFUEL_Coins")} TFUEL</div></CardTitle>
      </CardBody>
    </Card>  

    <Card>
      <CardBody>
       
        <CardTitle style={{textAlign:"center"}}  tag="h3"> <img height="30rem" src={Grt}/>    THE GRAPH <div style={{marginBottom:"-2rem", color:"yellow"}}>{localStorage.getItem("GRT_Coins")} GRT</div></CardTitle>
      </CardBody>
    </Card>

     <Card>
      <CardBody>
       
        <CardTitle style={{textAlign:"center"}}  tag="h3"> <img height="30rem" src={Ada}/>    CARDANO <div style={{marginBottom:"-2rem", color:"yellow"}}>{localStorage.getItem("ADA_Coins")} ADA</div></CardTitle>
      </CardBody>
    </Card>  

    <Card>
      <CardBody>
       
        <CardTitle style={{textAlign:"center"}}  tag="h3"> <img height="30rem" src={fil}/>    FILECOIN <div style={{marginBottom:"-2rem", color:"yellow"}}>{localStorage.getItem("FIL_Coins")} FIL</div></CardTitle>
      </CardBody>
    </Card>

    <Card>
      <CardBody>
       
        <CardTitle style={{textAlign:"center"}}  tag="h3"> <img height="30rem" src={link}/>    CHAINLINK <div style={{marginBottom:"-2rem", color:"yellow"}}>{localStorage.getItem("LINK_Coins")} LINK</div></CardTitle>
      </CardBody>
    </Card>

    <Card>
      <CardBody>
       
        <CardTitle style={{textAlign:"center"}}  tag="h3"> <img height="30rem" src={luna}/>    TERRA <div style={{marginBottom:"-2rem", color:"yellow"}}>{localStorage.getItem("LUNA_Coins")} LUNA</div></CardTitle>
      </CardBody>
    </Card>

    <Card>
      <CardBody>
       
        <CardTitle style={{textAlign:"center"}}  tag="h3"> <img height="30rem" src={theta}/>    THETA NETWORK <div style={{marginBottom:"-2rem", color:"yellow"}}>{localStorage.getItem("THETA_Coins")} THETA</div></CardTitle>
      </CardBody>
    </Card>  
      


    <Card>
      <CardBody>
       
        <CardTitle style={{textAlign:"center"}}  tag="h3"> <img height="30rem" src={cryptologo} style={{backgroundColor:"white",borderRadius:"20px"}}/>    ANTEAG <div style={{marginBottom:"-2rem", color:"yellow"}}>{localStorage.getItem("ANTEAG_Coins")} ANTEAG</div></CardTitle>
      </CardBody>
    </Card>
       

       </DialogContent>
     </Dialog>
      <div className="content" style={{marginLeft:"0.8rem"}}>
      {loadin_cont ? <LoadDash /> : <>
<Ticker offset="run-in" speed={10}>
                {()=>{<p>ANTEAG is under ICO</p>}}
              </Ticker>
        <Row style={{marginBottom:"0.6rem",height:"7rem"}}>
        <div>
      <Navbar color="dark" light expand="md" style={{width:"100%",marginLeft:"0.5rem",borderRadius:"10px",paddingLeft:"2rem"}}>
       
        <NavbarToggler style={{margin:"auto"}} onClick={toggle}>
        <span style={{fontSize:"2rem",color:"white",borderColor:"white"}}> {pair.substr(0,pair.indexOf("/"))} : {localStorage.getItem(`${pair.substr(0,pair.indexOf("/"))}_Coins`)} </span>
        <span style={{fontSize:"2rem",color:"white",borderColor:"white"}}> {pair.substr(pair.indexOf("/")+1,pair.length)} : {localStorage.getItem(`${pair.substr(pair.indexOf("/")+1,pair.length)}_Coins`)}  </span>

        
          
        </NavbarToggler>

       

          <Nav className="mr-auto" navbar style={{textAlign:"center"}}>
            <NavItem style={{marginLeft:"1rem"}}> 
            
            <UncontrolledDropdown setActiveFromChild>
            
          <DropdownToggle tag="a" style={{fontSize:"1.5rem",borderRadius:"10px",borderWidth:'4px',borderColor:"white"}} >
            {pair}<br/>▼  
          </DropdownToggle>
         
          <DropdownMenu>
            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('BTC/USDT');localStorage.setItem("pair",'BTC/USDT');settradingvalue('BTCUSDT');setlive(liveprice_BTC_u);setlivevol(btc_u_vol)}}>BTC/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('BTC/INRD');localStorage.setItem("pair",'BTC/INRD');settradingvalue('BTCINR');setlive(liveprice_BTC);setlivevol(btc_vol)}}>BTC/INRD</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('ETH/USDT');localStorage.setItem("pair",'ETH/USDT');settradingvalue('ETHUSDT');setlive(liveprice_ETH_u);setlivevol(eth_u_vol)}}>ETH/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('ETH/INRD');localStorage.setItem("pair",'ETH/INRD');settradingvalue('ETHINR');setlive(liveprice_ETH);setlivevol(eth_vol)}}>ETH/INRD</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('BNB/USDT');localStorage.setItem("pair",'BNB/USDT');settradingvalue('BNBUSDT');setlive(liveprice_BNB_u);setlivevol(bnb_u_vol)}}>BNB/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('BNB/INRD');localStorage.setItem("pair",'BNB/INRD');settradingvalue('BNBINR');setlive(liveprice_BNB);setlivevol(bnb_vol)}}>BNB/INR</DropdownItem>
            
            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('KSM/USDT');localStorage.setItem("pair",'KSM/USDT');settradingvalue('KSMUSDT');setlive(liveprice_KSM_u);setlivevol(btc_u_vol)}}>KSM/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('KSM/INRD');localStorage.setItem("pair",'KSM/INRD');settradingvalue('KSMINR');setlive(liveprice_KSM);setlivevol(bnb_vol)}}>KSM/INRD</DropdownItem>
            
            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('ATA/USDT');localStorage.setItem("pair",'ATA/USDT');settradingvalue('ATAUSDT');setlive(liveprice_ATA_u);setlivevol(btc_u_vol)}}>ATA/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('ATA/INRD');localStorage.setItem("pair",'ATA/INRD');settradingvalue('ATAINR');setlive(liveprice_ATA);setlivevol(bnb_vol)}}>ATA/INRD</DropdownItem>

            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('MANA/USDT');localStorage.setItem("pair",'MANA/USDT');settradingvalue('MANAUSDT');setlive(liveprice_MANA_u);setlivevol(btc_u_vol)}}>MANA/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('MANA/INRD');localStorage.setItem("pair",'MANA/INRD');settradingvalue('MANAINR');setlive(liveprice_MANA);setlivevol(bnb_vol)}}>MANA/INRD</DropdownItem>

            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('DGB/USDT');localStorage.setItem("pair",'DGB/USDT');settradingvalue('DGBUSDT');setlive(liveprice_DGB_u);setlivevol(btc_u_vol)}}>DGB/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('DGB/INRD');localStorage.setItem("pair",'DGB/INRD');settradingvalue('DGBINR');setlive(liveprice_DGB);setlivevol(bnb_vol)}}>DGB/INRD</DropdownItem>

            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('FTM/USDT');localStorage.setItem("pair",'FTM/USDT');settradingvalue('FTMUSDT');setlive(liveprice_FTM_u);setlivevol(btc_u_vol)}}>FTM/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('FTM/INRD');localStorage.setItem("pair",'FTM/INRD');settradingvalue('FTMINR');setlive(liveprice_FTM);setlivevol(bnb_vol)}}>FTM/INRD</DropdownItem>

            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('ALICE/USDT');localStorage.setItem("pair",'ALICE/USDT');settradingvalue('ALICEUSDT');setlive(liveprice_ALICE_u);setlivevol(btc_u_vol)}}>ALICE/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('ALICE/INRD');localStorage.setItem("pair",'ALICE/INRD');settradingvalue('ALICEINR');setlive(liveprice_ALICE);setlivevol(bnb_vol)}}>ALICE/INRD</DropdownItem>

            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('GTC/USDT');localStorage.setItem("pair",'GTC/USDT');settradingvalue('GTCUSDT');setlive(liveprice_GTC_u);setlivevol(btc_u_vol)}}>GTC/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('GTC/INRD');localStorage.setItem("pair",'GTC/INRD');settradingvalue('GTCINR');setlive(liveprice_GTC);setlivevol(bnb_vol)}}>GTC/INRD</DropdownItem>

            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('MATIC/USDT');localStorage.setItem("pair",'MATIC/USDT');settradingvalue('MATICUSDT');setlive(liveprice_MATIC_u);setlivevol(btc_u_vol)}}>MATIC/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('MATIC/INRD');localStorage.setItem("pair",'MATIC/INRD');settradingvalue('MATICINR');setlive(liveprice_MATIC);setlivevol(bnb_vol)}}>MATIC/INRD</DropdownItem>
          
            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('AXS/USDT');localStorage.setItem("pair",'AXS/USDT');settradingvalue('AXSUSDT');setlive(liveprice_AXS_u);setlivevol(btc_u_vol)}}>AXS/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('AXS/INRD');localStorage.setItem("pair",'AXS/INRD');settradingvalue('AXSINR');setlive(liveprice_AXS);setlivevol(bnb_vol)}}>AXS/INRD</DropdownItem>

            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('FTT/USDT');localStorage.setItem("pair",'FTT/USDT');settradingvalue('FTTUSDT');setlive(liveprice_FTT_u);setlivevol(btc_u_vol)}}>FTT/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('FTT/INRD');localStorage.setItem("pair",'FTT/INRD');settradingvalue('FTTINR');setlive(liveprice_FTT);setlivevol(bnb_vol)}}>FTT/INRD</DropdownItem>

            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('SOL/USDT');localStorage.setItem("pair",'SOL/USDT');settradingvalue('SOLUSDT');setlive(liveprice_SOL_u);setlivevol(btc_u_vol)}}>SOL/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('SOL/INRD');localStorage.setItem("pair",'SOL/INRD');settradingvalue('SOLINR');setlive(liveprice_SOL);setlivevol(bnb_vol)}}>SOL/INRD</DropdownItem>

            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('RUNE/USDT');localStorage.setItem("pair",'RUNE/USDT');settradingvalue('RUNEUSDT');setlive(liveprice_RUNE_u);setlivevol(btc_u_vol)}}>RUNE/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('RUNE/INRD');localStorage.setItem("pair",'RUNE/INRD');settradingvalue('RUNEINR');setlive(liveprice_RUNE);setlivevol(bnb_vol)}}>RUNE/INRD</DropdownItem>

            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('UNI/USDT');localStorage.setItem("pair",'UNI/USDT');settradingvalue('UNIUSDT');setlive(liveprice_UNI_u);setlivevol(btc_u_vol)}}>UNI/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('UNI/INRD');localStorage.setItem("pair",'UNI/INRD');settradingvalue('UNIINR');setlive(liveprice_UNI);setlivevol(bnb_vol)}}>UNI/INRD</DropdownItem>
            
            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('DOT/USDT');localStorage.setItem("pair",'DOT/USDT');settradingvalue('DOTUSDT');setlive(liveprice_DOT_u);setlivevol(btc_u_vol)}}>DOT/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('DOT/INRD');localStorage.setItem("pair",'DOT/INRD');settradingvalue('DOTINR');setlive(liveprice_DOT);setlivevol(bnb_vol)}}>DOT/INRD</DropdownItem>

            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('VET/USDT');localStorage.setItem("pair",'VET/USDT');settradingvalue('VETUSDT');setlive(liveprice_VET_u);setlivevol(btc_u_vol)}}>VET/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('VET/INRD');localStorage.setItem("pair",'VET/INRD');settradingvalue('VETINR');setlive(liveprice_VET);setlivevol(bnb_vol)}}>VET/INRD</DropdownItem>

            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('TFUEL/USDT');localStorage.setItem("pair",'TFUEL/USDT');settradingvalue('TFUELUSDT');setlive(liveprice_TFUEL_u);setlivevol(btc_u_vol)}}>TFUEL/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('TFUEL/INRD');localStorage.setItem("pair",'TFUEL/INRD');settradingvalue('TFUELINR');setlive(liveprice_TFUEL);setlivevol(bnb_vol)}}>TFUEL/INRD</DropdownItem>

            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('GRT/USDT');localStorage.setItem("pair",'GRT/USDT');settradingvalue('GRTUSDT');setlive(liveprice_GRT_u);setlivevol(btc_u_vol)}}>GRT/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('GRT/INRD');localStorage.setItem("pair",'GRT/INRD');settradingvalue('GRTINR');setlive(liveprice_GRT);setlivevol(bnb_vol)}}>GRT/INRD</DropdownItem>

            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('ADA/USDT');localStorage.setItem("pair",'ADA/USDT');settradingvalue('ADAUSDT');setlive(liveprice_ADA_u);setlivevol(btc_u_vol)}}>ADA/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('ADA/INRD');localStorage.setItem("pair",'ADA/INRD');settradingvalue('ADAINR');setlive(liveprice_ADA);setlivevol(bnb_vol)}}>ADA/INRD</DropdownItem>

            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('FIL/USDT');localStorage.setItem("pair",'FIL/USDT');settradingvalue('FILUSDT');setlive(liveprice_FIL_u);setlivevol(btc_u_vol)}}>FIL/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('FIL/INRD');localStorage.setItem("pair",'FIL/INRD');settradingvalue('FILINR');setlive(liveprice_FIL);setlivevol(bnb_vol)}}>FIL/INRD</DropdownItem>

            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('LINK/USDT');localStorage.setItem("pair",'LINK/USDT');settradingvalue('LINKUSDT');setlive(liveprice_LINK_u);setlivevol(btc_u_vol)}}>LINK/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('LINK/INRD');localStorage.setItem("pair",'LINK/INRD');settradingvalue('LINKINR');setlive(liveprice_LINK);setlivevol(bnb_vol)}}>LINK/INRD</DropdownItem>

            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('LUNA/USDT');localStorage.setItem("pair",'LUNA/USDT');settradingvalue('LUNAUSDT');setlive(liveprice_LUNA_u);setlivevol(btc_u_vol)}}>LUNA/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('LUNA/INRD');localStorage.setItem("pair",'LUNA/INRD');settradingvalue('LUNAINR');setlive(liveprice_LUNA);setlivevol(bnb_vol)}}>LUNA/INRD</DropdownItem>

            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('THETA/USDT');localStorage.setItem("pair",'THETA/USDT');settradingvalue('THETAUSDT');setlive(liveprice_FIL_u);setlivevol(btc_u_vol)}}>THETA/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('THETA/INRD');localStorage.setItem("pair",'THETA/INRD');settradingvalue('THETAINR');setlive(liveprice_FIL);setlivevol(bnb_vol)}}>THETA/INRD</DropdownItem>


            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('ANTEAG/USDT');localStorage.setItem("pair",'ANTEAG/USDT');settradingvalue('ANTEAGUSDT');setlive(liveprice_ANTEAG_u);setlivevol(ant_u_vol)}}>ANTEAG/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('ANTEAG/INRD');localStorage.setItem("pair",'ANTEAG/INRD');settradingvalue('ANTEAGINR');setlive(liveprice_ANTEAG);setlivevol(ant_vol)}}>ANTEAG/INRD</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
            </NavItem>
            <Collapse isOpen={isOpen} navbar>      
            <NavItem style={{marginLeft:"2rem",fontSize:'1.5rem',textAlign:"center"}}>
              <CardText>Current {pair.substr(0,pair.indexOf('/'))} Price</CardText><CardText style={{color:"green",fontWeight:"bold"}}>{liveprice} {pair.substr(pair.indexOf('/')+1,pair.length)}</CardText>
            </NavItem>
            {/* <NavItem style={{marginLeft:"2rem",fontSize:'1.5rem'}}>
              <CardText>24 hour {pair.substr(0,pair.indexOf('/'))} Volume</CardText><CardText style={{color:"green",fontWeight:"bold"}}>{live_vol} {pair.substr(pair.indexOf('/')+1,pair.length)}</CardText>
            </NavItem> */}
    <NavItem className="test" onClick={()=>{
      setport(true)
    }} style={{marginLeft:"7rem",fontSize:'1.5rem',cursor:"pointer"}}>
        <CardText>Total Portfolio : ₹ { ((parseFloat(localStorage.getItem("BTC_Coins"))*parseFloat(liveprice_BTC_u)*conversion)+(parseFloat(localStorage.getItem("BNB_Coins"))*parseFloat(liveprice_BNB_u)*conversion)+(parseFloat(localStorage.getItem("ETH_Coins"))*parseFloat(liveprice_ETH_u)*conversion)+parseFloat(localStorage.getItem("INRD_Coins"))+(parseFloat(localStorage.getItem("USDT_Coins"))*conversion)).toFixed(2)}</CardText>
    </NavItem>


</Collapse>          
       
</Nav>
         
        
      </Navbar>
    </div>
        </Row>
       
       <br></br>
          
{pair == 'ANTEAG/USDT' || pair == 'ANTEAG/INRD' ? <ChartViewer  className="apexcharts-tooltip"/>: 
<TradingViewWidget
    symbol={tradingvalue}
    theme={Themes.DARK}
    locale="en"
    width="100%"
    height="800vh"
  />}

<Row>
 <Tabs style={{marginTop:"5rem"}}> 
    <TabList>
      <Tab>Single Trade</Tab>
      <Tab>Full Trade</Tab>
    </TabList>
    <TabPanel>
<Row>
         
         <Col className="mr-auto ml-auto" lg="6">
           <Card className="card-chart">
             <CardHeader>
               
               <CardTitle tag="h3">
                 <i className="tim-icons icon-delivery-fast text-primary" />{" "}
                 BUY
               </CardTitle>
             </CardHeader>
             <CardBody>
            
              <Tabs>
    <TabList>
      <Tab>Limit</Tab>
      <Tab>Market</Tab>
    </TabList>

    <TabPanel>
    <Form >
    <Label>Price</Label>
    <Input  onChange={(event)=>{
      setbuy_limit_price(parseFloat(event.target.value) )

    }} placeholder={`ENTER PRICE in ${pair.substr(pair.indexOf('/')+1,pair.length)}`}></Input>
    <Label>Amount</Label>
   
    
    <Input invalid={!valid} placeholder={`ENTER AMOUNT in ${pair.substr(0,pair.indexOf('/'))}`} value={buy_limit_amount} onChange={(event)=>{
      const curr = `${pair.substr(pair.indexOf('/')+1,pair.length)}_Coins`
     if(parseFloat(event.target.value*buy_limit_price)>parseFloat(localStorage.getItem(curr))){
      setvalid(false)
     }
     else{
      setvalid(true)
      setbuy_limit_amount(parseFloat(event.target.value))
     }
      
    }}></Input>

      <Label>Total</Label>
   <Input invalid={!valid} placeholder={`TOTAL AMOUNT in ${pair.substr(pair.indexOf('/')+1,pair.length)}`} onChange={(event)=>{
      const curr = `${pair.substr(pair.indexOf('/')+1,pair.length)}_Coins`
      console.log()
     if(parseFloat(event.target.value)>parseFloat(localStorage.getItem(curr))){
        setvalid(false)
     }
     else{
      setvalid(true)
      console.log()
      setbuy_limit_amount(parseFloat(parseFloat(event.target.value) /parseFloat(buy_limit_price)) )
     }
      
    }}></Input>

    <Button disabled={!valid} onClick={()=>{
      axios({
        method:"POST",
        url:"https://api.anteagle.tech/neworder",    
        headers:{
          "Accept": "application/json, text/plain, */*", // It can be used to overcome cors errors
          "Content-Type": "application/json",
          Authtoken:"sfsfsff"
        },
        data: JSON.stringify({
          userid : localStorage.getItem("userid"),
          date: "2021-06-21",
          pair: pair,
          type : "Market",
          side : "BUY",
          price : buy_limit_price,
          Amount : buy_limit_amount,
          filled : "0.0",
          total : buy_limit_price * buy_limit_amount
        }),
      }).then(res=>{console.log(res.data)})
    
      if(pair[pair.length-1] == 'T'){
        axios({
          method:"POST",
          url:"https://api.anteagle.tech/neworder",
          headers:{
            "Accept": "application/json, text/plain, */*", // It can be used to overcome cors errors
            "Content-Type": "application/json",
            Authtoken:"sfsfsff"
          },
          data: JSON.stringify({
            userid : localStorage.getItem("userid"),
            date: "2021-06-21",
            pair: pair.replace("USDT","INRD"),
            type : "Market",
            side : "BUY",
            price : buy_limit_price*conversion,
            Amount : buy_limit_amount,
            filled : "0.0",
            total : buy_limit_price*conversion*buy_limit_amount
          }),
        }).then(res=>{console.log(res.data);swal("Success","Order Submitted Successfully","success");window.location.href = "/"})
      }
      else{
        axios({
          method:"POST",
          url:"https://api.anteagle.tech/neworder",
          headers:{
            "Accept": "application/json, text/plain, */*", // It can be used to overcome cors errors
            "Content-Type": "application/json",
            Authtoken:"sfsfsff"
          },
          data: JSON.stringify({
            userid : localStorage.getItem("userid"),
            date: "2021-06-21",
            pair: pair.replace("INRD","USDT"),
            type : "Market",
            side : "BUY",
            price : buy_limit_price/conversion,
            Amount : buy_limit_amount,
            filled : "0.0",
            total : (buy_limit_price/conversion)*buy_limit_amount
          }),
        }).then(res=>{console.log(res.data);swal("Success","Order Submitted Successfully","success");window.location.href = "/"})
      }

      
      const curr = `${pair.substr(pair.indexOf('/')+1,pair.length)}`
      console.log(parseFloat(localStorage.getItem(`${curr}_Coins`)) - buy_limit_price*buy_limit_amount)
      const end = parseFloat(localStorage.getItem(`${curr}_Coins`)) - buy_limit_price*buy_limit_amount;
      const range=-9999;                                     //add range
      if( end < 0 && end > range){
        alert("Are you sure that you want to proceed further?");
        var te = parseFloat(localStorage.getItem(`${curr}_Debt`));
        if(te === null){
          te = 0;
        }
        localStorage.setItem(`${curr}_Coins`,end);
        localStorage.setItem(`${curr}_Debt `,end+te);        //set debt
        console.log("The debt is "+end+te);
      }
       
      else if(end<range) alert("Cannot go beyond this range"); 
      else{
        localStorage.setItem(`${curr}_Coins`,end)
        
      }

      axios({
        method:"post",
        url : `https://api.anteagle.tech/get${curr.toLowerCase()}?coins=${end}&userid=${localStorage.getItem("userid")}`,
        headers:{
          "Accept": "application/json",
        }
      }).then(res=>{
        console.log(res.data)
      })
    }}>Submit</Button>
    </Form>
    </TabPanel>
    <TabPanel>
    <Form >
    <Label>Price</Label>
    <Input placeholder={`ENTER PRICE in ${pair.substr(pair.indexOf('/')+1,pair.length)}`} style={{color:"white"}} value={liveprice} disabled onChange={(event)=>{
      setbuy_market_price(event.target.value)
    }}></Input>
    <Label>Amount</Label>
    <Input placeholder={`ENTER AMOUNT in ${pair.substr(0,pair.indexOf('/'))}`} value={buy_market_amount} onChange={(event)=>{
      setbuy_market_amount(event.target.value)
    }} placeholder={`ENTER AMOUNT in ${pair.substr(0,pair.indexOf('/'))}`}></Input>

      <Label>Total</Label>
   <Input invalid={!valid} placeholder={`TOTAL AMOUNT in ${pair.substr(pair.indexOf('/')+1,pair.length)}`} onChange={(event)=>{
      const curr = `${pair.substr(pair.indexOf('/')+1,pair.length)}_Coins`
    setbuy_market_price(parseFloat(liveprice))
     if(parseFloat(event.target.value)>localStorage.getItem(curr)){
      setvalid(false)
     }
     else{
      setvalid(true)
      setbuy_market_amount(parseFloat(event.target.value)/parseFloat(buy_market_price))
     }
      
    }}></Input>
    <Button onClick={()=>{
      axios({
        method:"POST",
        url:"https://api.anteagle.tech/neworder",
        headers:{
          "Accept": "application/json, text/plain, */*", // It can be used to overcome cors errors
          "Content-Type": "application/json",
          Authtoken:"sfsfsff"
        },
        data: JSON.stringify({
          userid : localStorage.getItem("userid"),
          date: "2021-06-21",
          pair: pair,
          type : "Market",
          side : "BUY",
          price : buy_market_price,
          Amount : buy_market_amount,
          filled : "0.0",
          total : buy_market_price*buy_market_amount
        }),
      }).then(res=>{console.log(res.data)})
      const curr = `${pair.substr(pair.indexOf('/')+1,pair.length)}`
      const tem = parseFloat(localStorage.getItem(`${curr}_Coins`)) - (parseFloat(buy_market_price)*parseFloat(buy_market_amount))
      alert(parseFloat(localStorage.getItem(`${curr}_Coins`)))
      alert(tem)
      axios({
        method:"post",
        url : `https://api.anteagle.tech/get${curr.toLowerCase()}?coins=${tem}&userid=${localStorage.getItem("userid")}`,
        headers:{
          "Accept": "application/json",
        }
      }).then(res=>{
        console.log(res.data);swal("Success","Order Submitted Successfully","success");window.location.href = "/"
      })
    }}>Submit</Button>
    </Form>
    </TabPanel>
  </Tabs>
              </CardBody>
            </Card>
          </Col>
          <Col lg="6">
            <Card className="card-chart">
              <CardHeader>
                
                <CardTitle tag="h3">
                  <i className="tim-icons icon-send text-success" /> SELL
                </CardTitle>
              </CardHeader>
              <CardBody>
              <Tabs>
    <TabList>
      <Tab>Limit</Tab>
      <Tab>Market</Tab>
    </TabList>

    <TabPanel>
    <Form >
    <Label>Price</Label>
    <Input placeholder={`ENTER PRICE in ${pair.substr(pair.indexOf('/')+1,pair.length)}`} onChange={(event)=>{
      setsell_limit_price(parseFloat(event.target.value))
    }}></Input>
    <Label>Amount</Label>
    <Input invalid={!valid_s} placeholder={`ENTER AMOUNT in ${pair.substr(0,pair.indexOf('/'))}`} value={sell_limit_amount} onChange={(event)=>{
      const curr = `${pair.substr(pair.indexOf('/')+1,pair.length)}_Coins`
      if(parseFloat(event.target.value) > parseFloat(localStorage.getItem(curr))){
        setvalid_s(false)
      }
      else{
        setvalid_s(true)
        setsell_limit_amount(parseFloat(event.target.value))
      }
      
    }} ></Input>

     
      <Label>Total</Label>
   <Input invalid={!valid_s} placeholder={`TOTAL AMOUNT in ${pair.substr(pair.indexOf("/")+1,pair.length)}`} onChange={(event)=>{
      const curr = `${pair.substr(0,pair.indexOf('/'))}_Coins`
      const curdebt = `${pair.substr(0,pair.indexOf('/'))}_Debt`
      

     if(parseFloat(parseFloat(event.target.value)/parseFloat(sell_limit_price))>parseFloat(localStorage.getItem(curr))){
        // alert("do you want to transact");
       const debt=parseFloat(localStorage.getItem(curr) )- parseFloat(event.target.value*buy_limit_price);
       if(localStorage.getItem(curdebt) +debt > -9999  )
        localStorage.setItem( curdebt,localStorage.getItem(curdebt) +debt );
        console.log(localStorage.getItem(curdebt) +debt);
        
      // setvalid_s(false)
     }
     else{
      setvalid_s(true)
      setsell_limit_amount(parseFloat(event.target.value)/parseFloat(sell_limit_price))
     }
      
    }}></Input>
    <Button disabled={!valid_s} onClick={()=>{
      axios({
        method:"POST",
        url:"https://api.anteagle.tech/neworder",
        headers:{
          "Accept": "application/json, text/plain, */*", // It can be used to overcome cors errors
          "Content-Type": "application/json",
          Authtoken:"sfsfsff"
        },
        data: JSON.stringify({
          userid : localStorage.getItem("userid"),
          date: "2021-06-21",
          pair: pair,
          type : "Market",
          side : "SELL",
          price : parseFloat(sell_limit_price),
          Amount : sell_limit_amount,
          filled : "0.0",
          total : sell_limit_price*sell_limit_amount
        }),
      }).then(res=>{console.log(res.data)})
      const curr = `${pair.substr(0,pair.indexOf('/'))}`
      console.log(localStorage.getItem(`${curr}_Coins`) - sell_limit_amount)
      const end = localStorage.getItem(`${curr}_Coins`) - sell_limit_amount;
      localStorage.setItem(`${curr}_Coins`,end)
      axios({
        method:"post",
        url : `https://api.anteagle.tech/get${curr.toLowerCase()}?coins=${end}&userid=${localStorage.getItem("userid")}`,
        headers:{
          "Accept": "application/json",
        }
      }).then(res=>{
        console.log(res.data);swal("Success","Order Submitted Successfully","success");window.location.href = "/"
      })
    }}>Submit</Button>
    </Form>
    </TabPanel>
    <TabPanel>
    <Form > 
    <Label>Price</Label>
    <Input placeholder={`ENTER PRICE in ${pair.substr(pair.indexOf('/')+1,pair.length)}`} value={liveprice} disabled style={{color:"white"}} onChange={(event)=>{
      setsell_market_amount(parseFloat(event.target.value))
    }} ></Input>
    <Label>Amount</Label>
    <Input placeholder={`ENTER AMOUNT in ${pair.substr(0,pair.indexOf('/'))}`} value={sell_market_amount} onChange={(event)=>{
      setsell_market_amount(parseFloat(event.target.value))
    }} ></Input>

     
      <Label>Total</Label>
   <Input invalid={!valid_s} placeholder={`TOTAL AMOUNT in ${pair.substr(pair.indexOf("/")+1,pair.length)}`} onChange={(event)=>{
      const curr = `${pair.substr(pair.indexOf('/')+1,pair.length)}_Coins`
      const curdebt = `${pair.substr(0,pair.indexOf('/'))}_Debt`
     if((parseFloat(event.target.value)/parseFloat(sell_market_price))>localStorage.getItem(curr)){
      setvalid_s(false)
     }
     else{
      setvalid_s(true)
      setsell_market_amount(parseFloat(event.target.value)/parseFloat(sell_market_price))
     }
      
    }}></Input>
    <Button onClick={()=>{
      axios({
        method:"POST",
        url:"https://api.anteagle.tech/neworder",
        headers:{
          "Accept": "application/json, text/plain, */*",
          "Content-Type": "application/json",
          Authtoken:"sfsfsff"
        },
        data: JSON.stringify({
          userid : localStorage.getItem("userid"),
          date: "2021-06-21",
          pair: pair,
          type : "Market",
          side : "SELL",
          price : parseFloat(sell_market_price),
          Amount : parseFloat(sell_market_amount),
          filled : "0.0",
          total : parseFloat(sell_market_price*sell_market_amount),
        }),
      }).then(res=>{console.log(res.data)})
      axios({
        method:"post",
        url : `https://api.anteagle.tech/get${pair.substr(0,pair.indexOf('/')).toLowerCase()}?coins=${parseFloat(localStorage.getItem(`${pair.substr(0,pair.indexOf('/'))}_Coins`))-parseFloat(sell_market_amount)}`,
        headers:{
          "Accept": "application/json"
        }
      }).then(res=>{
        console.log(res.data);swal("Success","Order Submitted Successfully","success");window.location.href = "/"
      })
    }}>Submit</Button>
    </Form>
    </TabPanel>
    
  </Tabs>
  
              </CardBody>
            </Card>
          </Col>
        </Row>
    </TabPanel>
    <TabPanel>
    
    <Row > {/* fulltrade */}
   
    { switchtrade ?
    <Col className="mr-auto ml-auto" lg="6">
        <Tabs>
    <TabList>
      <Tab>Limit</Tab>
      <Tab>Market</Tab>
    </TabList>

    <TabPanel>
           <Card className="card-chart">
             <CardHeader>
               
               <CardTitle tag="h3">
                 <i className="tim-icons icon-delivery-fast text-primary" />{" "}
                 BUY
               </CardTitle>
             </CardHeader>
             <CardBody>
            
    
              
              <Form >
   <Label>Price</Label>
    <Input  onChange={(event)=>{
      setbuy_limit_price(parseFloat(event.target.value) )
      var tempPrice=pricee;
      tempPrice.push(event.target.value);
      setPrice(tempPrice);

    }} placeholder={`ENTER PRICE in ${pair.substr(pair.indexOf('/')+1,pair.length)}`}></Input>
    <Label>Amount</Label>
   
    
    <Input invalid={!valid} placeholder={`ENTER AMOUNT in ${pair.substr(0,pair.indexOf('/'))}`} value={buy_limit_amount} onChange={(event)=>{
      const curr = `${pair.substr(pair.indexOf('/')+1,pair.length)}_Coins`
     if(parseFloat(event.target.value*buy_limit_price)>parseFloat(localStorage.getItem(curr))){
      setvalid(false)
     }
     else{
      setvalid(true)
      setbuy_limit_amount(parseFloat(event.target.value))
      var tempQuant=quant;
      tempQuant.push(event.target.value);
      setQuant(tempQuant);
     }
      
    }}></Input>

      <Label>Total</Label>
   <Input invalid={!valid} placeholder={`TOTAL AMOUNT in ${pair.substr(pair.indexOf('/')+1,pair.length)}`} onChange={(event)=>{
      const curr = `${pair.substr(pair.indexOf('/')+1,pair.length)}_Coins`
      alert(curr)
     if(parseFloat(event.target.value)>parseFloat(localStorage.getItem(curr))){
        setvalid_s(false)
     }
     else{
      setvalid_s(true)
      console.log()
      setbuy_limit_amount(parseFloat(parseFloat(event.target.value) /parseFloat(buy_limit_price)) )
     }
      
    }}></Input>

  
  
   <Button type="reset" disabled={!valid_s} onClick={()=>{
    
     console.log(quant,pricee)
    
    const tempQ=finalQuants;
    tempQ.push(quant[quant.length-1])
    const tempP=finalPrices;
    tempP.push(pricee[pricee.length-1])
    localStorage.setItem("purchased_quantity",parseFloat(quant[quant.length-1]))
    setFinalQuants(tempQ)
    setFinalPrices(tempP)
    setQuant([])
    setPrice([])
     console.log("final quant is",finalQuants,"final price is",finalPrices);
    setcurr(quant)
    set_bought_price(pricee)
     setswitchtrade(false)
     
   }}>Submit</Button>
   </Form>
   

   
              </CardBody>
            </Card>
            </TabPanel>
            <TabPanel>
            <Card className="card-chart">
             <CardHeader>
               
               <CardTitle tag="h3">
                 <i className="tim-icons icon-delivery-fast text-primary" />{" "}
                 BUY
               </CardTitle>
             </CardHeader>
             <CardBody>
            
    
              
              <Form >
              <Label>Price</Label>
   <Input disabled style={{color:"white"}}  type="number" step="any" value={liveprice} onChange={(event)=>{
      var tempPrice=pricee;
      tempPrice.push(event.target.value);
      setPrice(tempPrice);
      // settrade_price(parseFloat(event.target.value) )

    }} ></Input>
   <Label>Quantity</Label>
   <Input value={buy_limit_amount}  required type="number" step="any" name="quantity"  onChange={(event)=>{
      var tempQuant=quant;
      tempQuant.push(event.target.value);
      setQuant(tempQuant);
      // settrade_quantity(parseFloat(event.target.value) )

    }}> </Input>

  
  <Label>Total</Label>
   <Input invalid={!valid} placeholder={`TOTAL AMOUNT in ${pair.substr(pair.indexOf('/')+1,pair.length)}`} onChange={(event)=>{
      const curr = `${pair.substr(pair.indexOf('/')+1,pair.length)}_Coins`
      console.log()
     if(parseFloat(event.target.value)>parseFloat(localStorage.getItem(curr))){
        setvalid(false)
     }
     else{
      setvalid(true)
      console.log()
      setbuy_limit_amount(parseFloat(parseFloat(event.target.value) /parseFloat(liveprice)).toFixed(4) )
      var tempQuant=quant;
      tempQuant.push(parseFloat(parseFloat(event.target.value) /parseFloat(liveprice)).toFixed(4) );
      setQuant(tempQuant);
     }
      
    }}></Input>
   <Button type="reset" disabled={!valid} onClick={()=>{
    
     console.log(quant,pricee)
     var tempPrice=pricee;
     tempPrice.push(liveprice);
     setPrice(tempPrice);
    const tempQ=finalQuants;
    tempQ.push(quant[quant.length-1])
    const tempP=finalPrices;
    tempP.push(pricee[pricee.length-1])
    localStorage.setItem("purchased_quantity",parseFloat(quant[quant.length-1]))
    setFinalQuants(tempQ)
    setFinalPrices(tempP)
    setQuant([])
    setPrice([])
     console.log("final quant is",finalQuants,"final price is",finalPrices);
    setcurr(quant)
    set_bought_price(pricee)
     setswitchtrade(false)
     
   }}>Submit</Button>
   </Form>
   

   
              </CardBody>
            </Card>
            </TabPanel>
            </Tabs>
          </Col>
      :
          <Col className="mr-auto ml-auto" lg="6">
           <Card className="card-chart">
             <CardHeader>
               
               <CardTitle tag="h3">
                 <i className="tim-icons icon-delivery-fast text-primary" />{" "}
                 Sell
               </CardTitle>
               {/* <section>
            <label>MUI autocomplete</label>
            <MuiAutoComplete control={control} />
          </section> */}
           <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">TYPE</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={age}
          onChange={(e)=>{
            setAge(e.target.value)
          }}
          label="Age"
        >
          <MenuItem value={'STOP LOSS'}>STOP LOSS</MenuItem>
          <MenuItem value={'TAKE PROFIT'}>TAKE PROFIT</MenuItem>
    
        </Select>
      </FormControl>
             </CardHeader>
             <CardBody>
            
              <Tabs>
              
              <Form >
   <Label>Selling Quantity</Label>
   <Input  required type="number" value={full_trade_sell} name="quantity_sell" onChange={(event)=>{
      if(parseFloat(finalQuants[0])-parseFloat(event.target.value) < 0 )
        alert("Cannot sell more than you buy");
      else if(parseFloat(localStorage.getItem("purchased_quantity"))-parseFloat(event.target.value)<0){
        alert(`Only ${parseFloat(localStorage.getItem("purchased_quantity"))-parseFloat(event.target.value)} Left to sell`)
      }
      else{
        if(finalQuants.length == 1){
          localStorage.setItem("purchased_quantity",parseFloat(finalQuants[0])-parseFloat(event.target.value))
        }
        else{
        localStorage.setItem("purchased_quantity",parseFloat(localStorage.getItem("purchased_quantity"))-parseFloat(event.target.value))
        }
        const tempQuant=quant;
        tempQuant.push(event.target.value)
        setQuant(tempQuant)
      }
        // setsell_quantity(parseFloat(event.target.value) )

    }}> </Input>
   <Label>Selling Price</Label>
   <Input  type="number" step="any" name="price_sell" onChange={(event)=>{
      const tempPrice=pricee;
      tempPrice.push(event.target.value)
      setPrice(tempPrice)
      // setsell_price(parseFloat(event.target.value) )

    }}></Input>
  
   
    
     
   <Button type="reset" disabled={continueselling}  onClick={()=>{
   
    const tempQ=finalQuants;
    tempQ.push(quant[quant.length-1])
    const tempP=finalPrices;
    tempP.push(pricee[pricee.length-1])
    setFinalQuants(tempQ)
    setFinalPrices(tempP)
     console.log("final quant is",finalQuants,"final price is",finalPrices);
    alert(quant)
     const ans = localStorage.getItem("purchased_quantity")-quant[quant.length-1]
     localStorage.setItem("purchased_quantity",ans)
   }}>Continue Selling</Button>
      <Slider
        defaultValue={30}
        getAriaValueText={(value)=>{set_full_trade_sell(localStorage.getItem("purchased_quantity")*value/100)
        quant.push(localStorage.getItem("purchased_quantity")*value/100)
        if(value == 100){
          setcontinueselling(true)
        }
        else{
          setcontinueselling(false)
        }
      }
    
      }
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={10}
        marks
        min={0}
        max={100}
      />

<Button type="reset" disabled={!valid_s} onClick={()=>{
    // const tempQ=finalQuants;
    // tempQ.push(quant[quant.length-1])
    // const tempP=finalPrices;
    // tempP.push(pricee[pricee.length-1])
    // setFinalQuants(tempQ)
    // setFinalPrices(tempP)
    // setQuant([])
    // setPrice([])
     console.log("final quant is",finalQuants,"final price is",finalPrices);
     setswitchtrade(true)
  axios({
    method : "POST",
    url : "https://api.anteagle.tech/full_trade",
    headers : {
      "Accept" : "application, text/plain, */*",
      "Content-Type" : "application/json"
    },
    data : JSON.stringify({
      prices : finalPrices,
      quantities : finalQuants,
      pair : pair.replace("/",""),
      type : "LIMIT",
    })
  }).then(res=>{
    if(res.data.success){
      swal("Success","Order Submitted Successfully it will execute as you have decided","success")
      setFinalPrices([])
      setFinalQuants([])
    }
  })
  //  axios({
  //      method:"POST",
  //      url:"https://api.anteagle.tech/order",
  //      headers:{
  //        "Accept": "application/json, text/plain, */*", // It can be used to overcome cors errors
  //        "Content-Type": "application/json",
  //      },
  //      data: JSON.stringify({
        
  //       quantity:finalQuants[0],   //quant[quant.length-1],  //trade_quantity,
  //       price: finalPrices[0],      //pricee[pricee.length-1],     //trade_price,
  //       pair:pair,
  //       type:'LIMIT',
  //       mode:"buy"

  //      }),
      
  //    }).then(res=>{console.log(res.data);
  //    localStorage.setItem("assigned_no",res.data.assigned_no)
  //    localStorage.setItem("order_id",res.data.order_id)
  //    localStorage.setItem("purchased_quantity",res.data.purchased_quantity)
  //    })
  //    for(var i=1;i<finalQuants.length-1;i++){
  //     axios({
  //      method:"POST",
  //      url:"https://anteagle.tech/fulltrade",
  //      headers:{
  //        "Accept": "application/json, text/plain, */*", // It can be used to overcome cors errors
  //        "Content-Type": "application/json",
 
  //      },
  //      data: JSON.stringify({
  //         quantity: finalQuants[i],  //quant[quant.length-1], //sell_quantity,
  //         price:  finalPrices[i],  //</Form>pricee[pricee.length-1],//sell_price,
  //         pair:pair,
  //         type:'LIMIT',
  //         mode:"sell",
  //         assigned_no : localStorage.getItem("assigned_no"),
  //         order_id:localStorage.getItem("order_id"),
  //         purchased_quantity:localStorage.getItem("purchased_quantity")

  //      }),
  //    }).then(res=>{console.log(res.data)})
  //    }
  //    axios({
  //      method:"POST",
  //      url:"https://api.anteagle.tech/submitorder",
  //      headers:{
  //        "Accept": "application/json, text/plain, */*", // It can be used to overcome cors errors
  //        "Content-Type": "application/json",

  //      },
  //      data: JSON.stringify({
  //         quantity:finalQuants[finalQuants.length-1],  //quant[quant.length-1], //sell_quantity,
  //         price:  finalPrices[finalPrices.length-1], //Form>pricee[pricee.length-1],//sell_price,
  //         pair:pair.replace("/",""),
  //         type:'LIMIT',
  //         mode:"sell",
  //         assigned_no : localStorage.getItem("assigned_no"),
  //         purchased_quantity:localStorage.getItem("purchased_quantity")
        
  //      }),
  //    }).then(res=>{console.log(res.data)
  //     setFinalPrices([])
  //     setFinalQuants([])
  //    setswitchtrade(true)
  //    })

  
   }}>Submit</Button>
   </Form>
   

</Tabs>
    

           </CardBody>
         </Card>
       </Col>
    }
    <Col lg="6" md="12">
            <Card className="card-tasks" style={{overflow:"auto"}}>
              <CardHeader>
             <h3> Trade Overview</h3>
              </CardHeader>
              <CardBody>
   
              <VerticalTimeline layout={'1-column-left'} >
                { finalPrices.map((ans,i)=>{
                  return(
                    <VerticalTimelineElement  
                    contentStyle={{ background: i > 0 ? '#ff0000' : '#1d8cf8', color: '#fff', width:'40%',height:"20%" }} 
                    contentArrowStyle={{ borderRight: `15px solid  ${i > 0 ? '#ff0000' : '#1d8cf8'}` }}>
                        <h1 >{i > 0 ? 'Sell' : 'Buy'}</h1>
                        <p>Price:{ans}</p>
                        <p>Quantity:{finalQuants[i]}</p>
                    </VerticalTimelineElement>
                  )
                  })
                }
              </VerticalTimeline>
               
              </CardBody>
            </Card>
          </Col>
   </Row>  {/*fulltrade */} 
   
   </TabPanel>

</Tabs>  

</Row> 
  
        <Row>
          <Col lg="6" md="12">
            <Card className="card-tasks">
              <CardHeader>
             <h3> Order Book (BUY)</h3>
              </CardHeader>
              <CardBody>
   
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Price</th>
                      <th>Amount</th>
                      <th>Total</th>
                      <th>pair</th>
                    </tr>
                  </thead>
                  <tbody>
                    {book.map((ans1,i)=>{
                      return(
                        <tr>
                          {ans1.map((res1,i)=>{
                            return(
                              <td>{res1}</td>
                            )
                          })}
                        </tr>
                      )
                    })}
                  </tbody>
                </Table>
               
              </CardBody>
            </Card>
          </Col>
          <Col lg="6" md="12">
            <Card className="card-tasks">
              <CardHeader>
             <h3> Order Book (SELL)</h3>
              </CardHeader>
              <CardBody>
   
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Price</th>
                      <th>Amount</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                  {book_s.map((ans1,i)=>{
                      return(
                        <tr>
                          {ans1.map((res1,i)=>{
                            return(
                              <td>{res1}</td>
                            )
                          })}
                        </tr>
                      )
                    })}
                  </tbody>
                </Table>
               
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Col xs="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Order Table</CardTitle>
              </CardHeader>
              <CardBody>
               <Tabs>
                <TabList>
                  <Tab>Open Orders({myorders.length})</Tab>
                  <Tab>Trade History</Tab>
                </TabList>
                <TabPanel>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Date</th>
                      <th>Pair</th>
                      <th>type</th>
                      <th>Side</th>
                      <th>Price</th>
                      <th> Amount</th>
                      <th>Filled</th>
                      <th>Total</th>
                      <th>status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                
                 {myorders.map((ans,i)=>{
                   return(
                    <tr>
                      {  ans.map((res,i)=>{
                    return(
                      <td>{res}</td>
                    )
                   })}
                  <td><Button title="Cancel" onClick={()=>{
                    axios({
                      method:'post',
                      url : `https://api.anteagle.tech/cancel?userid=${localStorage.getItem("userid")}`,
                      headers:{
                        "Accept": "application/json, text/plain, */*",
                        'Content-type' : "application/json"
                      },
                      data : JSON.stringify({
                        date : ans[0],
                        pair : ans[1],
                        type : ans[2],
                        side : ans[3],
                        price : ans[4],
                        Amount : ans[5],
                        filled : ans[6],
                        total : ans[7],
                        status : ans[8],
                        
                      })
                    }).then(res=>{
                      console.log(res.data)
                      swal("Canceled","Your order Canceled Successfully","success")
                    })
                  }}>Cancel</Button></td>
                       </tr>
                   )
                 
                      
                 })}
               
                    
                  </tbody>
                </Table>
                </TabPanel>
                
                <TabPanel>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Date</th>
                      <th>Pair</th>
                      <th>type</th>
                      <th>Side</th>
                      <th>Price</th>
                      <th> Amount</th>
                      <th>Filled</th>
                      <th>Total</th>
                      <th>status</th>
                    </tr>
                  </thead>
                  <tbody>
                
                 {fillorders.map((ans,i)=>{
                   return(
                    <tr>
                      {  ans.map((res,i)=>{
                    return(
                      <td>{res}</td>
                    )
                   })}
                 
                       </tr>
                   )
                 
                      
                 })}
               
                    
                  </tbody>
                </Table>
                </TabPanel>
               </Tabs>
              </CardBody>
            </Card>
          </Col>
          </>        
          }
      </div>
          
    </>
  );
}
}
export default Dashboard;
