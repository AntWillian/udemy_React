import React from 'react';
import Navmenu from './nav-menu';



class Navbar extends React.Component {
    render() {
        let corNav = "nav-wrapper "+this.props.cor;

        let menus =[
            {titulo:"Home",link:"#home"},
            {titulo:"Sobre",link:"#sobre"},
            {titulo:"Contato",link:"#contato"}
        ];

       
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