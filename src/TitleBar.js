import React, {useEffect, useState} from "react";
import Styled from 'styled-components'

const TitleStyle = Styled.h1`
@import url('https://fonts.googleapis.com/css2?family=Mate+SC&display=swap');
width: 14% ;
font-family: 'Mate SC', serif;
border: dotted blue 1px;
border-radius: 10px;
padding:1%;
margin: 0 auto;
margin-bottom: 1%; 
`
const TitleBar =props => {
    const {title} = props;
    return( 
    <div>
        <TitleStyle>{title}</TitleStyle>
    </div>
    )
}

export default TitleBar;