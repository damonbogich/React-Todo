import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';
const tasks = [
  {
    task: 'Organize Room',
    id: 1,
    completed: false
  },
  {
    task: 'Make Dinner',
    id: 2,
    completed: false
  },
  {
    task: 'Excersise',
    id: 3,
    completed: false
  },
  {
    task: 'Shower',
    id: 4,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    //initialize state:
    this.state = {
      toDoList: tasks,
    };
  }

  //toggleItem function to update state: 
  toggleItem = id => {
    //find item we clicked on
    //toggle the purchased field
    //update state with new list data
    const newToDoList = this.state.toDoList.map(item => {
      if (item.id === id) {
        return {
          //this return is saying that after I click on an item it should change the state of completed. false => true
          ...item,
          completed: ! item.completed
        };
      } else {
        return item;
        //this else statement is just saying to keep state exactly the same for any items you did not click on 
      }
    })
    //This part will update the grocery list into the new one (re render with the new list)
    this.setState({
      toDoList: newToDoList
    });
  };

  //this function is just code to add a new item to the list
 addItem = itemName => {
   const newItem = {
    task: itemName,
    id: Date.now(),
    completed: false
   };
   //setting state to the old list plus the new item
   this.setState({
     toDoList: [...this.state.toDoList, newItem]
   });
 } ;

 clearCompletedItems = () => {
   console.log('items cleared')
   const filteredToDoList = this.state.toDoList.filter(item => {
     if (item.completed === false) {
      return true; }
      else {
     return false; 
    }
    })
    this.setState({
      toDoList: filteredToDoList
    })
console.log('this is state after clear', this.state);



 }




 
  render() {
    return (
      <div>
        <TodoForm
          addItem = {this.addItem}
          clearCompleted = {this.clearCompletedItems}
         />
         <TodoList
          toDoList = {this.state.toDoList}
          toggleItem = {this.toggleItem}
          />
      </div>
      
    );
  }
}

export default App;
