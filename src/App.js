import "./App.css";
import React from 'react';
import { Button } from 'reactstrap';
import Slides from './Slides'
import Pdf from './Images/ilovepdf_merged.pdf'



function App() {
  return (
    <div className="App">
      <>
      <h1> HAPPY BIRTHDAY MONI</h1>
      <h1><Slides /> </h1>
      <Button className="Button" onClick={() => onClickDownload()}>Click Here To Check Your Gift</Button>
      </>
    </div>
  );
}


const onClickDownload =() =>{
    console.log("Hii")

    window.open(Pdf);
}


export default App;
