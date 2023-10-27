
import React ,{Component} from "react";

class sup extends Component{
    constructor(){
        super()
            this.state={
                message: 'Welcome Visitor!'
            }
    
    }
    Change(){
        this.setState({
            message: 'You have successfully subscribed!!'
        })
    }
    render(){
       return(
        <div>
        <h1> {this.state.message}</h1>
        
        <button onClick={()=> this.Change()}>Subsccribe Now</button>
        </div>
       )

    }

}


export default sup