import React from 'react'
import { Switch, Route, Redirect } from 'react-router'/*implantar algumas dependencias switch:implantar rout,proprio route,redirect:redirecionar algum componente principal necessario importando react-router */

import Home from '../components/home/Home'
import UserCrud from '../components/user/UserCrud'//tbm componente funcional..

export default props => //mapeamento entre url e componentes
    <Switch>{/*switch: mapear as rotas escolha */}
        <Route exact path='/' component={Home} />{/*route:rotas barra de endereços localhost3000/,exact:só navega pro home se for / exato, path=significa'/',,sempre q navegar pro barra/renderiza home */}
        <Route path='/users' component={UserCrud} />{/*navegou p localhost3000/users vai userCrud */}
        <Redirect from='*' to='/' />{/*redirect caso nenhum acima seja acionado vai automaticamente para / ou seja home */}
    </Switch>