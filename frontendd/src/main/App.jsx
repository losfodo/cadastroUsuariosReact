import 'bootstrap/dist/css/bootstrap.min.css'//import font-awessome e bootstrap colocados na pasta front de package.json
import 'font-awesome/css/font-awesome.min.css'
import './App.css'//import padrão app css e react
import React from 'react'
import { BrowserRouter } from 'react-router-dom'//import do react router,navegaçoes react native e dom web,usa browserrouter pra involver aplicação
//importando main ja vem importado main e header pq referencia header ta dentro do main
import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'//importar componentes de template..
import Routes from './Routes'/*home? ,,importe router*/
import Footer from '../components/template/Footer'

export default props =>//função arrow q recebe props como parametro
    <BrowserRouter>{/*browserrouter mudar de local router localhost3000 para localhost3000/users */}
        <div className="app">{/*div com referencias da pasta template */}
            <Logo />
            <Nav />
            <Routes />{/*main conectado em home.jsx e substitui home por routes q local onde coloque o componente rotas navegando assim entre 2  componentes inicio e usuarios clicando*/}
            <Footer />
        </div>
    </BrowserRouter>