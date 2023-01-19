import { useState, useEffect, useRef } from 'react';
import Buttons from './Buttons';
import ReactPlayer from 'react-player'
import video from '../assets/videos/dining.mp4'

const TypeEffect = ({ message }) => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const videoRef = useRef(null);



  useEffect(() => {
    const type = () => {
      if (index <= message.length) {
        setText(message.slice(0, index));
        setTimeout(() => {
          setIndex(index + 1);
        }, 100);
      }
    };
    const video = videoRef.current;
    video.play().then(() => {
      console.log('video is playing');
    }).catch(() => {
      console.log('autoplay was prevented');
    });

    type();
  }, [index, message]);

  return (<>
  <div className='typeText'><p>{text}</p></div>;
  <video ref={videoRef} class="video" autoplay muted playsinline loop>
    <source src={video} type="video/mp4" />
  </video>
 
  <Buttons></Buttons>
  
  </>)
};


export default TypeEffect;