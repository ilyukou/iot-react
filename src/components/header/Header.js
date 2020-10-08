import React, { Component } from 'react';

import {Link} from "react-router-dom";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            links : this.props.value
        }
    }

    render() {
        let links = this.state.links.map(link => <li><Link to={link.url}>{link.label}</Link></li>)

        return (
            <div>
                <h4>Header</h4> 
                <ul>{links}</ul>
            </div>
        );
    }
}
 
export default Header;