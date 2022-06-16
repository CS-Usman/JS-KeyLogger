import React,{Component} from "react";
import "../../src/login.css"
import Homepage from "./homepage";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Register from "./register";

class  App extends Component{

    render(){
        return (
            <Router>
                <Routes>
                    <Route path = "/" element = {<Register/>} />
                    <Homepage />
                </Routes>
            </Router>,
            <Homepage/>
        );
    }
   
}

export default App;