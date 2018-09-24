import React from 'react';


export default class TodosList extends React.Component{
    
    render(){
        return (
            <div className="container">
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Task</th>
                            <th scope="col">Deadline</th>
                            <th scope="col">Actions</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row"></th>
                            <td>Mark</td>
                            <td>Otto</td>
                            
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            
                        </tr>
                    </tbody>
                </table>
                
                
                
            </div>
        );
    }
}
