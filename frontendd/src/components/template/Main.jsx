import './Main.css'//imports main e react
import React from 'react'
import Header from './Header'//importando header tbm 

export default props =>//componente funcional..
    <React.Fragment>{/*um componente pode retornar múltiplos elementos. Os Fragmentos permitem agrupar uma lista de filhos sem adicionar nós extras ao DOM. */}
        <Header {...props} />{/*header com props==signfc q propriedades estão sendo propagadas a header com icone titulo... */}
        <main className="content container-fluid">{/*conteudo.. content organiza css grid, container-fluid:padrão 12 colunas ... */}
            <div className="p-3 mt-3">{/*mt3:margem top 3,p3:padding dentro desse componente */}
                {props.children}{/*jogar as tags filhos dentro d children */}
            </div>
        </main>
    </React.Fragment>