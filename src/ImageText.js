import React, {useEffect, useState} from "react";

function ImageText(props){
const {explanation} =props
    return( 
    <div>
        <p>{explanation}</p> 
    </div>
    )
}

export default ImageText;