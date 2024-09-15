import React, {useEffect, useState} from "react";
import Styled from 'styled-components'
const StyledText = Styled.div` 
@import url('https://fonts.googleapis.com/css2?family=Mate+SC&display=swap');
width: 60% ;
font-family: 'Mate SC', serif;
border: dotted blue 1px;
border-radius: 10px;
padding:1%;
margin: 0 auto; 
`
function ImageText(props){
const {explanation} =props
    return( 
    <StyledText>
        <p>{explanation}</p> 
    </StyledText>
    )
}

export default ImageText;