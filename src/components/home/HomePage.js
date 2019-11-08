import React from "react";
import { Link } from "react-router-dom";       
               
function HomePage () {
  return (            
    <div className = "jumbotrom">
      <h1>The Great Courses Today</h1>
                              
      <p>Learn new knowledge everyday is good for life</p> 
      <Link to="about" className="btn brn-primary btn-lg">
        Learn More                                         
      </Link>                                           
    </div>                                                 
  )      
}                                                     
                               
export default HomePage;       
                             