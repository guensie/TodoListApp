import React from 'react';

//include images into your bundle
// import rigoImage from '../../img/rigo-baby.jpg';
import TodosList from './todoslist.jsx';

//create your first component
let todos = [
    {
        task: 'wash the car',
        isCompleted: false
    },
    {
        task: 'walk the dog',
        isCompleted: true
    }
    ];

export class Home extends React.Component{
    
    render(){
        return (
            <div className="text-center mt-5">
                <h1>To Do List App</h1>
                <TodosList />
                
                
            </div>
        );
    }
}
