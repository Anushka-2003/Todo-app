import React, { Component } from 'react';
import './Todo.css';
<script src="https://kit.fontawesome.com/yourcode.js" crossorigin="anonymous"></script>

//  calling this component in App.js
export default class Todo extends Component {
  constructor(){
      super();
      this.state = {
          tasks: [
              {task: 'Go to Office', id: 1},
              {task: 'Read the article', id: 2},
              {task: 'Attend meeting', id: 3}
          ],
          currTask: ' '
      }
  }
  handleChange = (event) => { // it is getting the value by itself
    // console.log(event.target.value);
        this.setState({
                currTask: event.target.value
            })
  }
  handleSubmit = () => {
    if(this.state.currTask !== " "){
        this.setState({
            tasks: [...this.state.tasks, {task: this.state.currTask, id: this.state.tasks.length+1}],
            currTask: ' '
        })
    }
  }
  handleDel = (id) => {
    let newArr = this.state.tasks.filter(taskObj => {
         return taskObj.id !== id
     })
    //  console.log(newArr);
    this.setState({
        tasks: [...newArr]
    })

  }
  render() {
    return (

        <div className='main'>
            
            <input type="text" value={this.state.currTask} onChange={this.handleChange}/>
            <br></br>
            <button className='btn1' onClick={this.handleSubmit}>Submit</button>
        
            <ol>
            {
                this.state.tasks.map(taskObj => (

                    <li key={taskObj.id}>
                        <p>{taskObj.task}</p>
                        <button className='btn2'onClick={() => this.handleDel(taskObj.id)}>Delete</button>
                    </li>
                ))
            }
            </ol>
        </div>
    
    );
  }
}


