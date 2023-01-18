import { useState, useEffect } from 'react';
import Buttons from './Buttons';

const TypeEffect = ({ message }) => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const type = () => {
      if (index <= message.length) {
        setText(message.slice(0, index));
        setTimeout(() => {
          setIndex(index + 1);
        }, 100);
      }
    };
    type();
  }, [index, message]);

  return (<>
  <div className='typeText'><p>{text}</p></div>;
  <Buttons></Buttons>
  
  </>)
};


export default TypeEffect;