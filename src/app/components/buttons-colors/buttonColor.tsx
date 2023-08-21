'use client';
import { useState } from 'react';
import buttonColorStyle from './buttonColorStyle.module.scss'

interface Props {}

const buttonColor = (props: Props) => {

  let colors: Array<string>  = ['#E44', '#3C81F6', '#000'];

  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleButtonColor = (index: number) => {
    setActiveIndex(index);
  };
  
  return (
    colors.map((item, index) => (
        <button 
          key={item} 
          className={`
            ${buttonColorStyle.roundButton} 
            ${activeIndex === index 
              ? buttonColorStyle.activeButton 
              : ''}
          `}
          onClick={() => handleButtonColor(index)}
          style={{backgroundColor: item}}
        >
        </button>
    ))
  )
}

export default buttonColor