import React from 'react';

import './App.css';
import './styles.css';


class App extends React.Component {
	saveToDoListItem = (toDoItem) => {
		this.setState(
		{toDoList:[
			...this.state.toDoList,
			{ name:toDoItem, done:false }
		],
		currentToDoItem:null
		}
		)
	};
	setCurrentToDoItem = (toDoItem) => {
		this.setState(
			{currentToDoItem:toDoItem}
			);
	}
	
	clickOnToDoItem = ( toDoListItem, index )  => {
	
		var tempToDoList =  this.state.toDoList
		tempToDoList[index].done = tempToDoList[index].done? false:true;
		this.setState( {toDoList: tempToDoList} )
	}
	
	clearAll = () => {
		this.setState({
			currentToDoItem:null,
			toDoList:[]
		});
		
	}
	
	constructor(props){
		super(props);
		this.state={
			currentToDoItem:null,
			toDoList:[]
		};
		
		
		
	}
	render (){
	  return (
		<div> 
			<h1>To Do List</h1>
			<p><label>To Do Item  </label>
			<input
			value = {this.state.currentToDoItem? this.state.currentToDoItem: ""}
			onChange={(event) => this.setCurrentToDoItem(event.target.value)}
			></input></p>
			<button
				onClick={()=>this.saveToDoListItem(this.state.currentToDoItem)}
			>
				<p>add item</p>
			</button>
			<p>Current to do item: {this.state.currentToDoItem}</p>
			<div>
				<p>Items</p>
				{
				this.state.toDoList.map( (item, index) => 
					<p className={item.done?"done":"notdone"} 
						key={index} 
						onClick= { (event) => this.clickOnToDoItem(event.target, index) }>
					{item.name}
					</p>   
						
				)}
			</div>
			<button
				onClick={()=>this.clearAll()}
			>
				<p>Clear All</p>
			</button>			
		</div>
	  );
	}
}

export default App;

/*
input
show to do items


*/