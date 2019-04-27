import React, { Component } from 'react';
import { push as Menu } from 'react-burger-menu';

import './Menu.scss';


class MenuComponent extends Component {

    render() {
        const { pageWrapId, outerContainerId } = this.props;
        return (
            <Menu
                pageWrapId={pageWrapId}
                outerContainerId={outerContainerId}
                className="menu-4"
                right={true}>
                <a id="home" className="menu-item" href="/">Home</a>
                <a id="about" className="menu-item" href="/about">About</a>
                <a id="contact" className="menu-item" href="/contact">Contact</a>
            </Menu>
        )
    }
}

export default MenuComponent;