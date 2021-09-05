import React from "react";
import "./style.css";

class Todo extends React.Component {
    constructor(props){
        super(props)
      this.delete=this.delete.bind(this);
      this.upd=this.upd.bind(this);
      this.val=React.createRef();
      this.state={show:false};
      this.show=this.show.bind(this);
    }

    delete () {
     const index = this.props.index;
       this.props.del(index);
    }

    upd(){
     const index = this.props.index;
     const value = this.val.current.value;
     this.setState({show:false});
     this.props.update(value,index);

    }

    show(){
      this.setState({show:true});
    }
  render() {
    return (
      <div className="my-3">
        <div className=" todo bg-dark text-light d-flex justify-content-between">
          <div style={{color:"pink"}} className="pl-2 py-2">{this.props.todo}</div>
          {/* update ucun gerekli hisse */}
          <div>
            {this.state.show?<div><input
                placeholder="Update"
                className="input mt-2"
                ref={this.val}  
                  ></input>

<button className="update" onClick={this.upd}>update</button></div>:<div/>}
          

          </div>

          <div className="">
            <button className="btn text-center" onClick={this.show}>upt</button>
            <button className="btn text-center" onClick={this.delete}>del</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Todo;
