import React, { Component } from 'react';
import './App.css';
//import Li from './Li/Li';

class Ul extends Component {
    constructor (props) {
        super(props)
    }
    render () {

        let listItems = this.props.tasks.map(t => {
            return (
                <li key = { t.id } className={ t.taskClass }>
                    <input type="checkbox" name="" value=""/>
                    { t.toDo }
                </li>
            );
        })

        return (
            <ul>
                { listItems }
            </ul>
        )
    }

}
export default Ul;