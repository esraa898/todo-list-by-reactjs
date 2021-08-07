import React, {Component} from 'react';

import'./Todo.css'

class Todo extends Component{
state={
    
            name:"",
            task:"",
            onAdd:false,
           
        };
        handleData=(e)=>{
              this.setState({
                  [e.target.id]: e.target.value
                

              })
        }
        handlesubmit=(e)=>{
            e.preventDefault();
            
            this.setState({
                onAdd:true
            });
            
           this.props.add(this.state) 
           this.setState({
               name:"",
               task:""
           })


        }
    render(){

        
        return(
           <div  className="start-input">
                <form onSubmit={this.handlesubmit}>
                    <input  type="text" id="name" placeholder="Enteryour Name" onChange={this.handleData} value={this.state.name} />
                    <input  type="text" id="task" placeholder="Enteryour Task " onChange={this.handleData} value={this.state.task}/>
                    <input className="sub"  type="submit" value="Add"/>   
                </form> 
            </div>
        )
    }
}

export default Todo;