import React, {Component} from 'react';
import Todo from "./Components/Todo/";
import {FaRegTrashAlt} from "react-icons/fa";


import "./Myapp.css"
// import Todoitems from './Components/Items';

class Myapp extends Component{
    
    state={ 
        name:"TodoApp",
        item:[{id:1,name:"tarek",task:"addtodo"}]

    }
    add=(item)=>{
        item.id =Math.floor(Math.random());
         let items =this.state.item;
         items.push(item);
         this.setState({
             item:items
         })
    }
    delete=(id)=>{
     let items =this.state.item;
     let i= items.findIndex(item=> item.id=== id);
     items.splice(i,1)
     this.setState({
         item:items
     })

    }
    
    render(){
        return  (
            <section className="todo-main">
            <div className="container">
               <h1>   Todo App By React Js</h1>
               {/* <Todoitems items={this.state.items}/> */}
               <Todo add={this.add} />
            <div className="table">
              <table  >  <thead>
                            <th> Name</th>
                            <th> Task</th>
                            <th className="action">Action</th>
                            </thead> 
                           
                           
                      {this.state.item.map((item)=>{
                    return(
                           
                            <tbody key={item.id}>
                                <tr>
                                   <td>
                                       {item.name}
                                       </td> 
                                       <td>
                                           {item.task}
                                       </td>
                                       <td className="action"> <button className="delete" onClick={()=> this.delete(item.id)} > <FaRegTrashAlt/></button></td>
                                </tr>
                               
                            </tbody>
                       
                    )
                })}
            
             </table> 
                </div>
               
            </div>
            </section>
        )
    }
}

export default Myapp;
