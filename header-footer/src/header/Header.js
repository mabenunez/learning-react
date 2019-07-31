import React, { Component } from 'react';

class Header extends Component {
    constructor () {
        super();
        this.state = {
            titulo : "Big Ass Title"
        }
    }
    render () {
        return (
            <div>
                <h1>{ this.state.titulo }</h1>
            </div>
        );
    }

}
export default Header;