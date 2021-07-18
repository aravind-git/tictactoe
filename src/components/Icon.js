import React from "react";
import { FaTimes, FaPen, FaRegCircle } from "react-icons/fa";

const Icon =({name}) => {
  switch (name) {
    case 'circle':
      return <FaRegCircle className="Icon"></FaRegCircle>;    
    case 'cross':
      return <FaTimes className="Icon"></FaTimes>;   
    default:
      return <FaPen className="Icon"></FaPen>;
      
  }
};
export default Icon;
