import React from 'react';

class Navbar extends React.Component {
    render() {
        let corNav = "nav-wrapper "+this.props.cor;
        return (
            
            <nav>
                <div className={corNav}>
                    <div className="container">
                        <a href="#" className="brand-logo">{this.props.titulo}</a>
                        <ul id="nav-mobile" className="right">
                            <li><a href="sass.html">Sass</a></li>
                            <li><a href="badges.html">Components</a></li>
                            <li><a href="collapsible.html">JavaScript</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;