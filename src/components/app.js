import React from "react";
import "./style.css";
import Header from "./header";
import Input from "./input";


var css={
    width:600,
    marginTop:150,

    
        
}
class App extends React.Component{
 
    render(){

        return(

            <div className="container  mx-auto " >
                <Header></Header>
                <Input></Input>
             

            </div>
        )
    }
}

export default App