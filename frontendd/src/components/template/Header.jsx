import './Header.css'//importando css e react
import React from 'react'

export default props =>//exportação padrão no react colocando class e html... 
    <header className="header d-none d-sm-flex flex-column">{/*cabeçalho,d-none=celulares header não aparece,,d-sm-flex=display flex para disposit. pequenos grandes xgrande,,flex columm=usar coluna c icone titulo e subtitulo embaixo.. */}
        <h1 className="mt-3">{/*margem top 3 aumenta distancimento da margem*/}
            <i className={`fa fa-${props.icon}`}></i> {props.title}{/*classes fa fa=font awesome com valor q passou icone emoji uma mini casinha, e inicio titulo */}
        </h1>
        <p className="lead text-muted">{props.subtitle}</p>{/*lead=conduzir?,,text-muted=não possuem estilização para links do bootstrap */}
    </header>