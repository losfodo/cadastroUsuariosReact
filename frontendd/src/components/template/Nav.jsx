import './Nav.css'//imports
import React from 'react'
import { Link } from 'react-router-dom'//coloca link q é do react no lugar de <a href

export default props =>//iniciando react..
    <aside className="menu-area">{/*area do menu com os links navegação*/}
        <nav className="menu">{/*sempre classname e não apenas class */}
            {/* Refatorar em casa! */}
            <Link to="/">{/*no lugar de <a href =link */}
                <i className="fa fa-home"></i> Início{/*coloca classname..fa fa-home:fon-aewsome casinha bem pequena, inicio */}
            </Link>
            <Link to="/users">
                <i className="fa fa-users"></i> Usuários{/*emoji pessoas lado usuarios */}
            </Link>
        </nav>
    </aside>