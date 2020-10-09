import React from 'react'
import Main from '../template/Main'/*import main em home */

export default props =>
    <Main icon="home" title="Início"/*tendo tudo a ver com header inicio*/
        subtitle="Segundo Projeto do capítulo de React.">{/*subtitulo abaixo de inicio */}
        <div className='display-4'>Bem Vindo!</div>{/*aumenta letra bootstrap,,hr quebra paragrafo */}
        <hr />
        <p className="mb-0">Sistema para exemplificar a construção
            de um cadastro desenvolvido em React!</p>{/*mb=margem botthom 0 ,subtitulo */}
    </Main>