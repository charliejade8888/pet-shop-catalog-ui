import { useNavigate } from "react-router-dom";
import React, { Component } from 'react';

// adds useNavigate from react-router-dom library (named as navigate) 
// as extra prop to whichever Component is passed in (decorator pattern)!!
function withNavigation(Component) {
  return props => <Component {...props} navigate={useNavigate()} />;
}
// some info on props - https://www.w3schools.com/react/react_props.asp

export default withNavigation