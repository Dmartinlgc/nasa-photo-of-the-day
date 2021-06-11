import React, {useEffect, useState} from "react";
import Styled from "styled-components";

const StyledDiv = Styled.div`
margin:0 auto;
  width: 40%;
  height: auto;
  margin-bottom: 1%; 
  `
const ImageStyled = Styled.img`
border-radius: 10px;
width: 100%;
height: auto;
padding: 10px;
border: solid lightgray 3px;
`
function PicFrame(props){
    const {pictureUrl} =props;
    return( 
    <StyledDiv>
     <ImageStyled src ={pictureUrl}/>  
    </StyledDiv>
    )
}

export default PicFrame;