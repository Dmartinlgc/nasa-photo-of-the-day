import React, {useEffect, useState} from "react";

function PicFrame(props){
    const {pictureUrl} =props;
    return( 
    <div>
     <img src ={pictureUrl}/>  
    </div>
    )
}

export default PicFrame;