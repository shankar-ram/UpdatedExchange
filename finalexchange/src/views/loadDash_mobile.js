import React from "react";
import {css} from "@emotion/react";
import ScaleLoader  from 'react-spinners/ScaleLoader';
import CircleLoader from "react-spinners/CircleLoader";
import RingLoader from "react-spinners/RingLoader";

const loaderCSS = css`

position:absolute;
margin-top: 13rem;
margin-left:8rem;
  
 
`;
class LoadDashMobile extends React.Component {
    render(){
        return(
        
        <ScaleLoader color="#7B308D" size={70} css={loaderCSS} />    

        );
    }

}
export default LoadDashMobile;