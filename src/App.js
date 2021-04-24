import React from 'react';
import './App.css';
import Clock from './Clock';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, FormControl, Button} from 'react-bootstrap';


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            deadline: 'December 25, 2021',
            newDeadline: ''
        }
    }

    changeDeadline() {
        this.setState({ deadline: this.state.newDeadline})
    }

    render() {
        return (
        <div className="App">
            <div className="App-title">Countdown to {this.state.deadline}</div>
            <Clock deadline={this.state.deadline}/>
            <div>
                <input 
                type="text" 
                placeholder="Example: January 1, 2022" 
                onChange={event => this.setState({newDeadline: event.target.value})} 
                />
                <button onClick={this.changeDeadline.bind(this)}>Submit</button>
            </div>
        </div>
        )
    }
}

export default App;