import React, {useEffect, useState} from "react";
import axios from 'axios'
import "./App.css";
import PicFrame from'./PicFrame'
import ImageText from './ImageText'
import TitleBar from './TitleBar'
function App() {
  const [apodData, setApodData] =useState({})
useEffect(()=>{
  axios.get('https://api.nasa.gov/planetary/apod?api_key=soRmXgcdn2VwIBKdaXhNdwhfBbBEYPd9aRSVDXoG')
  .then(res =>{
    console.log(res.data)
    setApodData(res.data)
  })
  .catch(err =>{
    console.log(err)
  })
}, [])
  return (
    <div className="App">
      <TitleBar title = {apodData.title} />
      <PicFrame pictureUrl = {apodData.url}/>
      <ImageText explanation = {apodData.explanation}  />
    </div>
  );
}

export default App;
