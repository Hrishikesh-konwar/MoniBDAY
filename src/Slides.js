import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./App.css";
import image1 from './Images/1.jpg'
import image2 from './Images/2.jpg'
import image3 from './Images/3.jpg'
import image4 from './Images/4.jpg'
import image5 from './Images/5.jpg'
import image6 from './Images/6.jpg'
import image7 from './Images/7.jpg'
import image8 from './Images/8.jpg'
import image9 from './Images/9.jpg'
import image10 from './Images/10.jpg'
import image11 from './Images/11.jpg'
import image12 from './Images/12.jpg'
import image13 from './Images/13.jpg'
import image14 from './Images/14.jpg'
import image15 from './Images/15.jpg'
import image16 from './Images/16.jpg'
import image17 from './Images/17.jpg'
import image18 from './Images/18.jpg'
import image19 from './Images/19.jpg'
import image20 from './Images/20.jpg'
import image21 from './Images/21.jpg'
import image22 from './Images/22.jpg'
import image23 from './Images/23.jpg'
import image24 from './Images/24.jpg'
import image25 from './Images/25.jpg'
import image26 from './Images/26.jpg'
import image27 from './Images/27.jpg'
import image28 from './Images/28.jpg'

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1 },
  { width: 768, itemsToShow: 1},
  { width: 1200, itemsToShow: 1 },
];

function Slides() {
  return (
    <>
      <h1 style={{ textAlign: "center"}}></h1>
      <div >
        <Carousel breakPoints={breakPoints}>
          <Item> <img className="d-block w-100" src={image1} alt="1st slide"/> </Item> 
          <Item> <img className="d-block w-100" src={image2} alt="2nd slide"/> </Item> 
          <Item> <img className="d-block w-100" src={image3} alt="3rd slide"/> </Item>
          <Item> <img className="d-block w-100" src={image4} alt="4th slide"/> </Item>
          <Item> <img className="d-block w-100" src={image5} alt="5th slide"/> </Item>
          <Item> <img className="d-block w-100" src={image6} alt="6th slide"/> </Item>
          <Item> <img className="d-block w-100" src={image7} alt="7th slide"/> </Item>
          <Item> <img className="d-block w-100" src={image8} alt="8th slide"/> </Item>
          <Item> <img className="d-block w-100" src={image9} alt="9th slide"/> </Item> 
          <Item> <img className="d-block w-100" src={image10} alt="10th slide"/> </Item> 
          <Item> <img className="d-block w-100" src={image11} alt="11th slide"/> </Item>
          <Item> <img className="d-block w-100" src={image12} alt="12th slide"/> </Item>
          <Item> <img className="d-block w-100" src={image13} alt="13th slide"/> </Item>
          <Item> <img className="d-block w-100" src={image14} alt="14th slide"/> </Item>
          <Item> <img className="d-block w-100" src={image15} alt="15th slide"/> </Item>
          <Item> <img className="d-block w-100" src={image16} alt="16th slide"/> </Item>
          <Item> <img className="d-block w-100" src={image17} alt="17th slide"/> </Item> 
          <Item> <img className="d-block w-100" src={image18} alt="18th slide"/> </Item> 
          <Item> <img className="d-block w-100" src={image19} alt="19th slide"/> </Item>
          <Item> <img className="d-block w-100" src={image20} alt="20th slide"/> </Item>
          <Item> <img className="d-block w-100" src={image21} alt="21st slide"/> </Item>
          <Item> <img className="d-block w-100" src={image22} alt="22nd slide"/> </Item>
          <Item> <img className="d-block w-100" src={image23} alt="23th slide"/> </Item>
          <Item> <img className="d-block w-100" src={image24} alt="24th slide"/> </Item>
          <Item> <img className="d-block w-100" src={image25} alt="25th slide"/> </Item>
          <Item> <img className="d-block w-100" src={image26} alt="26th slide"/> </Item>
          <Item> <img className="d-block w-100" src={image27} alt="27th slide"/> </Item>
          <Item> <img className="d-block w-100" src={image28} alt="28th slide"/> </Item>
        </Carousel>
      </div>
    </>
  );
}


export default Slides;
