import './Logo.css' //import conectar css logo
import logo from '../../assets/imgs/logo.png'//importa da imagem.png dentro pastas
import React from 'react' //import react padrão
import { Link } from 'react-router-dom'/*referencia link substituindo <a href */

export default props =>//definir q todos componentes são funcionais
    <aside className="logo">{/*aside:para conteudo principal e pode estar em uma barra lateral */}
        <Link to="/" className="logo">{/*link como <a href link logo */}
            <img src={logo} alt="logo" />{/*imagem logo colocada */}
        </Link>
    </aside>