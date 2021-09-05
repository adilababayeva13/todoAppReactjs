import React from "react"
import BoxTodo from "./boxTodo";
import Todo from "./Todo";
import "./style.css";
class Input extends React.Component{
    constructor(props){
        super(props)
        this.state={
            todos: [],
        }
        this.bla = React.createRef();
      this.generate=this.generate.bind(this);
      this.del=this.del.bind(this);
      this.update=this.update.bind(this);

    }
    
    onSend=()=>{

        var arr=this.state.todos;
        var todo=this.bla.current.value;
        if(todo!==""){
        arr.push(todo);
        this.bla.current.value='';
        this.setState({todos:arr});

       }
      
 
    }
    del(i){
        var arr=this.state.todos;
        arr.pop(i);
        this.setState({todos:arr});
    }
    update(value,index){
       if(value!==""){
        var arr=this.state.todos;
        arr[index]=value;
        this.setState({todos:arr});
       }
        

    }
    generate(){
        var arr=this.state.todos;
        var items=arr.map((todo,index)=> (
            <Todo update={this.update} del={this.del} index={index} key={`${todo}-${index}`} todo={todo} ></Todo>
        
          ));
        return(<BoxTodo items={items}/> ) ;
    }
    render(){
var todos=this.generate();
        return(
<div>
            <div className="mx-5 mt-5">
               
                <div  className="text-center">
                <h3 className="text-light font-weight-bold text-dark"
                 style=
                 {{fontFamily:
                    '"Special Elite", cursive'
                 }}
                 >New Todo</h3>

                <input
                placeholder="New Todo"
                className="p-1 input "
                ref={this.bla}  
                  ></input>

               <button
                className="ml-3 text-light bg-dark p-1"
                style=
                {{cursor:
                   'pointer'
                }}
                onClick={this.onSend}
                >Add ToDo</button>

                </div>
                
               

            </div>

    {todos}

            </div>
        )
    }
}

export default Input