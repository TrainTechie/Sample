import React from "react";

function Employee({emp, pay, arr}){
return(
<div>
<p>Hi, {emp.name} you got selected for the role {emp.role}, in {emp.company} and your monthly salary is {pay} INR.</p>
<p>Thanks and Regards<br/>Mr. Balaji,  {arr[0]}</p>
</div>
)
}

export default function App() {
return (
<div>
<Employee emp={{name: 'Ram', role: 'Software Developer', company: 'xyz technologies'}} 
pay={42000} 
arr={['Project Manager', 'Team Leader', 'Managing Director']}/>
</div>
);
}

var usrInput = prompt('Enter any Number', '0')// This line

export class ClassComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0
        };
    }
    render() {
        if(this.state.count < usrInput){
            return(
                <div>
                <p>Initial Click Count = {this.state.count}</p>
                <button onClick={() => this.setState({count: this.state.count + 1})}>Click Me</button>
                <button onClick={() => window.location.reload()}>Reset Click</button>
                <p>Click Left = {usrInput - this.state.count}</p>
                </div>
            );
        }
        else{
            return(
                <div>
                <p>You've reached maximum limit</p>
                <button onClick={() => window.location.reload()}>Reset Click</button>
                </div>);
        }
    }
}

export function NumberList(arr) {
    const numbers = arr;
    const listItems = numbers.map(
        (element) => <li>{element}</li>
        );
    return (
        <ul>{listItems}</ul>
        );
    }
    
    // const numbers = [1, 2, 3, 4, 5]; const root = ReactDOM.createRoot(document.getElementById('root')); root.render(<NumberList numbers={numbers} />);
