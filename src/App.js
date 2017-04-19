import React, { Component } from 'react';
import './App.css';

import Home from './views/home';
import About from './views/about';

import Button from './components/button';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 'home',
        };
    }

    getCurrentPage() {
        switch (this.state.page) {
            case 'home':
                return Home();
            case 'about':
                return About();
            default:
                return Home();
        }
    }

    switchPage(page) {
        this.setState({ page });
    }

    render() {
        return (
            <div className="app">

                <ul className="nav-links">
                    <li>
                        <Button
                            clickHandler={() => this.switchPage('home')}
                            content="home"
                        />
                    </li>
                    <li>
                        <Button
                            clickHandler={() => this.switchPage('about')}
                            content="about"
                        />
                    </li>
                </ul>

                {this.getCurrentPage()}

            </div>
        );
    }
}
