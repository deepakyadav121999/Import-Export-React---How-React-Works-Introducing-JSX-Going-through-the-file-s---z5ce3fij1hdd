import React, { Component, useState } from "react";
import '../styles/App.css';
import Heading from './Heading.js;';
import Heading from './InputQuery.js;';
import Heading from './SubHeading.js;';
import Heading from './SubmitButton.js;';


const App = () => {
  return (
    <div id="main">
      <Heading />
      <InputQuery/>
      <SubHeading/>
      <SubmitButton/>
    </div>
  )
}
export default App;


