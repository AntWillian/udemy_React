import React from 'react';

class Navmenu extends React.Component {
    render() {
        let lista = this.props.menus.map(function(value){
            return(
                <li key={value.titulo}><a href={value.link}>{value.titulo}</a></li>
            );
        });

        return (
            <ul id="nav-mobile" className="right">
                {lista}
            </ul>
        );
    }
}

export default Navmenu;