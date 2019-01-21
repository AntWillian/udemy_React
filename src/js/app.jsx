import ReactDOM from 'react-dom';
import React from 'react';

import Titulo from './titulo/titulo';
import Navbar from './navbar/navbar';

let App = (
    <div>
        <Navbar titulo="Component" cor="orange"/>
        <div>
            <Titulo />
        </div>
    </div>
);

ReactDOM.render(App, document.getElementById('app'));

