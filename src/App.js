import React, {useEffect, useState} from "react";
import axios from 'axios'
import "./App.css";
import PicFrame from'./PicFrame'
import ImageText from './ImageText'
import TitleBar from './TitleBar'
import Styled from 'styled-components'

const PageStyles = Styled.div`
width:90%;
margin: 0 auto;
display:flex;
flex-direction:column; 
`
function App() {
  const [apodData, setApodData] =useState({})
useEffect(()=>{
  // setApodData({
  //   "copyright": "Vincenzo Mirabella",
  //   "date": "2021-06-10",
  //   "explanation": "Want to see a ring around the Sun? It's easy to do in daytime skies around the world. Created by randomly oriented ice crystals in thin high cirrus clouds, circular 22 degree halos are visible much more often than rainbows. This one was captured by smart phone photography on May 29 near Rome, Italy. Carefully blocking the Sun, for example with a finger tip, is usually all that it takes to reveal the common bright halo ring. The halo's characteristic angular radius is about equal to the span of your hand, thumb to little finger, at the end of your outstretched arm.  Want to see a ring of fire eclipse? That's harder. The spectacular annular phase of today's (June 10) solar eclipse, known as a ring of fire, is briefly visible only if you're standing along the Moon's narrow shadow track that passes over parts of northern Canada, Greenland, the Arctic, and eastern Russia. The solar eclipse is partial though, when seen from broader regions, including northern Asia, Europe, and parts of the US.",
  //   "hdurl": "https://apod.nasa.gov/apod/image/2106/Vincenzo_Mirabella_20210529_134459.jpg",
  //   "media_type": "image",
  //   "service_version": "v1",
  //   "title": "Circular Sun Halo",
  //   "url": "https://apod.nasa.gov/apod/image/2106/Vincenzo_Mirabella_20210529_134459_1024px.jpg"
// });
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
    <PageStyles className="App">
      <TitleBar title = {apodData.title} />
      <PicFrame pictureUrl = {apodData.url}/>
      <ImageText explanation = {apodData.explanation}  />
    </PageStyles>
  );
}

export default App;
