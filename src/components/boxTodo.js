import React from "react"
import "./style.css";


class BoxTodo extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){

        return(

            <div className="mx-5 mt-1 py-3">
              
{this.props.items}

            </div>
        )
    }
}

export default BoxTodo