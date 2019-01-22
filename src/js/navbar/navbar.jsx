import React from 'react';
import axios from 'axios';

import Navmenu from './nav-menu';



class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { menu: [] };

    }

    componentWillMount() {
        let self = this;
        axios.get('http://localhost:8000/servidor.php?menu=1').then(function (response) {
            self.setState({
                menu: response.data
            });
        });
    }


    render() {
        let corNav = "nav-wrapper " + this.props.cor;

        let menus =this.state.menu;


        return (

            <nav>
                <div className={corNav}>
                    <div className="container">
                        <a href="#" className="brand-logo">{this.props.titulo}</a>
                        <Navmenu menus={menus} />
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;