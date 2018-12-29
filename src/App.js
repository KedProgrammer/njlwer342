import React, { Component } from 'react'; 
/// Modifica el componente para que se puedan agregar tareas 
 
class App extends Component { 
  constructor() { 
    super() 
    this.state = { 
      tasks: ['Sacar la ropa', 'Hacer la cama', 'Leer un rato'], 
      newTask: '' 
     } 
   } 
 
   render() { 
     return ( 
       <div className="wrapper"> 
         <div className="list"> 
           <h3>Por hacer:</h3> 
           <ul className="todo"> 
               {this.state.tasks.map((LaTarea, index) => 
                 <li key={index}>{LaTarea}</li> 
               )} 
           </ul> 
              <form onKeyPress={this.handleKeyPress}> 
                <input 
                  type="text" 
                  id="new-task" 
                  value={this.state.newTask} 
                  onChange={this.addNewTask.bind(this)} 
                  placeholder="Ingresa una tarea y oprime Enter" /> 
              </form> 
         </div> 
       </div> 
     ) 
   }

   addNewTask (event) { 
     this.setState({ 
       newTask: event.target.value, 
       newTask: '' 
     }) 
   } 

   handleKeyPress = (event) => { 
      if(event.key == 'Enter'){
          event.preventDefault() 
          let oldTasks = this.state.tasks 
          let newTask = this.state.newTask 
          this.setState({ 
             tasks: [...oldTasks, newTask], 
             newTask: '' 
          }) 
      } 
   }
 } 
export default App; 