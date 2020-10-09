import React, { Component } from 'react'/*herda componentes do react usado quando vai usar componentes a+ do react como render,exports.. */
import axios from 'axios'// axios: biblioteca http uma API interagi XMLHttpRequest e http do node
import Main from '../template/Main'

const headerProps = {/*const com propriedades do cabeçalho... cadastro de usuarios abaixo */
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir!'
}

const baseUrl = 'http://localhost:3001/users'/*const dentro da url */
const initialState = {/*estado inicial.. */
    user: { name: '', email: '' },//campos de nome e email formulario
    list: []/*array vazio inicialmente */
}

export default class UserCrud extends Component {/*componente de classe extende componentes */

    state = { ...initialState }/*iniciar estado.. */

    componentWillMount() {/*função para obter do backend a listra de usuarios */
        axios(baseUrl).then(resp => {/*chama axios p chamar url usuarios.. */
            this.setState({ list: resp.data })//resposta da requisição salva dentro da lista colocando db.json lista front
        })
    }

    clear() {/*função clear reponsavel por limpar o formulario */
        this.setState({ user: initialState.user })/*limpa então o usuario */
    }

    save() {/*serve p incluir novo usuario e alterar usuaario existente */
        const user = this.state.user //user usuario
        const method = user.id ? 'put' : 'post'/*incerir:post,alterar:put *///se user id estiver setado verdadeiro faz put altera usuario se não post incluir novo usuario
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl//se for put url 3001/users altera usuario 1 com baseurl e userid q for se não apenas baseurl
        axios[method](url, user)//chama função axios:http api.. chama usando anotação coxete mesmo anotação ponto(parametro função)
            .then(resp => {//axios baseado promise chama o then
                const list = this.getUpdatedList(resp.data)//atualizar lista de usuarios incluindo ou alterando,resp.data:usuario web server ou dados retornados pelo json server
                this.setState({ user: initialState.user, list })//limpar formulario depois de incluido e atualizar lista de usuarios list
            })
    }

    getUpdatedList(user, add = true) {//se estiver true add usuario na lista se false não..
        const list = this.state.list.filter(u => u.id !== user.id)//lista gera uma nova (id diferentes cada um remove para readicionar)
        if(add) list.unshift(user)//se estiver add usuario,unshift=determinado elemento na primeira posição do array
        return list//retorna lista na linha 37 e 38 do codigo usercrud.jsx para atualizar lista
    }

    updateField(event) {//função atualizar campos nome email..
        const user = { ...this.state.user }//clonar usuario com this.state.user para armazenar usuario
        user[event.target.name] = event.target.value//usa nome do input e value valor campo input
        this.setState({ user })//passa user direto q seta estado const user
    }

    renderForm() {//função.. colocar jsx renderiza formulario abaixo..
        return (//retornar expressão
            <div className="form">{/*padrão bootstrap de formularios.. */}
                <div className="row">{/*div row formular uma linha */}
                    <div className="col-12 col-md-6">{/*se for celular 12 colunas se for meio grande 6 colunas */}
                        <div className="form-group">{/*estruturar formulario.. */}
                            <label>Nome</label>
                            <input type="text" className="form-control"/*associado a label tem input,,<input>, <select> e <textarea> são estilizados com a classe .form-control  */
                                name="name"/*nome formulario.. */
                                value={this.state.user.name}/*value nome do usuario */
                                onChange={e => this.updateField(e)}/*evento onchange passa updetefield linha48 usercrud.jsx */
                                placeholder="Digite o nome..." />
                        </div>
                    </div>

                    <div className="col-12 col-md-6">{/*input de email parecido com de cima name.. */}
                        <div className="form-group">
                            <label>E-mail</label>
                            <input type="text" className="form-control"
                                name="email"
                                value={this.state.user.email}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o e-mail..." />
                        </div>
                    </div>
                </div>

                <hr />{/*abaixo os botoes: */}
                <div className="row">{/*botoes em uma linha separada com row */}
                    <div className="col-12 d-flex justify-content-end">{/*todos dispositivos ocupar 12 colunas,display flex, justificar final alinhado a direita */}
                        <button className="btn btn-primary"//cria botão coloração botão primary bootstrap
                            onClick={e => this.save(e)}>{/*função save linha 31 */}
                            Salvar
                        </button>

                        <button className="btn btn-secondary ml-2"/*botão cancelar */
                            onClick={e => this.clear(e)}>{/*função arrow passando this.clear:limpar função linha 27 userCrud.jsx */}
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    load(user) {//função load receber user do backenddb.json
        this.setState({ user })
    }

    remove(user) {//recebe user tbm,,função remover usuario
        axios.delete(`${baseUrl}/${user.id}`).then(resp => {//deletar um cliente passa base url user.id..,,ao chamar then sig excluiu o usuario
            const list = this.getUpdatedList(user, false)//update na lista user se tiver e false para remover sendo true na linha 42 usercrud.jsx..
            this.setState({ list })//removendo usuario da lista
        })
    }

    renderTable() {/*renderizar uma tabela */
        return (//expressão dentro de return
            <table className="table mt-4">{/*mt margem top do formulario */}
                <thead>
                    <tr>
                        <th>ID</th>{/*id front e 'id back linha 131 usercrud.jsx' */}
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}{/*função renderiza as linhas linha 128 userCrud.jsx */}
                </tbody>
            </table>
        )
    }

    renderRows() {//renderizar as linhas da tabela e botoes
        return this.state.list.map(user => {//mapeia a lista de usuarios dentro objetos p trechos jsx
            return (
                <tr key={user.id}>{/*chave id */}
                    <td>{user.id}</td>{/*mostrar id na tabela */}
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <button className="btn btn-warning"//botão warning amarelo p editar cliente
                            onClick={() => this.load(user)}>{/*load editar cliente , par de chaves sig evento e (evento)*/}
                            <i className="fa fa-pencil"></i>{/*icone caneta pencil */}
                        </button>
                        <button className="btn btn-danger ml-2"//vermelho, remove deletar cliente,,trash lixeira icone
                            onClick={() => this.remove(user)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }
    
    render() {/*função render p realmente chamar e aparecer na tela */
        return (/*return expressão delimitado por parenteses */
            <Main {...headerProps}>{/*defini main, headerprops:icon title subtitle */}
                {this.renderForm()}{/*chamar função p rodar..linha 54 cadastro de usuarios aparece tudo botoes layout.. */}
                {this.renderTable()}{/*chamada da função render tabela mostrando a tabela */}
            </Main>
        )
    }
}