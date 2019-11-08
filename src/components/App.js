import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";                        
import AboutPage from "./About/AboutPage";    
import CoursesPage from "./courses/CoursesPage";  
import Header from "./common/Header";           
                                               
function App() {                              
  return (                                   
    <div className="container-fluid">        
      <Header></Header>                      
      <Switch>                           
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/about" component={AboutPage}></Route>
        <Route path="/courses" component={CoursesPage}></Route>
        {/* <Route path="/"></Route> */}
      </Switch>                       
    </div>                            
  )                                  
}                                 
                                  
export default App;           