import React,{Component} from "react";
import "../../src/login.css"
import Register from "./register";

class  App extends Component{
    constructor(){
        super()
        this.state = {
            username : "",
            password : ""
        }
    }
    handleUserName = (event)=>{
        this.setState({
            username:event.target.value
        })
    }
    handlePassword = (event)=>{
        this.setState({
            password:event.target.value
        })
    }

    render(){
        return (
            <div >
                <div>
                    <h1>JS. <br/> KeyLogger</h1>
                </div>
                <form>
                    <div>
                        <input
                        type="email"
                        placeholder="Username"
                        value = {this.state.username}
                        onChange ={this.handleUserName}
                        />
                    </div>
                    <div>
                        <input
                        type = "password"
                        placeholder="Password"
                        value = {this.state.password}
                        onChange = {this.handlePassword}
                        />
                    </div>
                    <div>
                        <p>Forgot password</p>
                    </div>
                    <div>
                        <button type = "submit">Login</button>
                        <button type = "button">Register</button>
                    </div>
                    <div>
                        <p>or you can login with</p>
                    </div>
                    <div>
                        <h3>f</h3>
                        <h3>G</h3>
                    </div>
                </form>
                <Register/>
            </div>
        );
    }
   
}

export default App;