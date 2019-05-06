import React, { Component } from 'react';
import { Link} from 'react-router-dom'


class Header extends Component {
    render() {
        return (
            <header>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
            </header>
        )
    }
}

export default Header;