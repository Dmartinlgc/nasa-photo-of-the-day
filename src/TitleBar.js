import React, {useEffect, useState} from "react";

const TitleBar =props => {
    const {title} = props;
    return( 
    <div>
        <h1>{title?title:"Gosh hims cute "}</h1>
    </div>
    )
}

export default TitleBar;