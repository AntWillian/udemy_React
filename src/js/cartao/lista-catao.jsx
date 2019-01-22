import React from 'react';
import axios from 'axios';

import Cartao from './cartao';
import Busca from '../busca/busca';


class ListaCartao extends React.Component {

    constructor(props) {
        super(props);
        this.state = { clicks: 0, busca: '', dados: [], servidor: [] };
        this.addClicks = this.addClicks.bind(this);
        this.atualizarBusca = this.atualizarBusca.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    addClicks() {
        // this.setState({clicks: this.state.clicks + 1});
        this.setState((prevState) => ({
            clicks: prevState.clicks + 1
        }));
    }

    atualizarBusca(evento) {
        this.setState({ busca: evento.target.value });

        if (evento.target.value == "") {
            this.setState({ dados: this.state.servidor });
        }
    }

    onSubmit(evento) {
        console.log('ok');
        let busca = this.state.busca;
        let dados = this.state.servidor;

        let novaLista = dados.filter(function (item) {
            if (item.titulo.toUpperCase().indexOf(busca.toUpperCase()) > -1 ||
                item.descricao.toUpperCase().indexOf(busca.toUpperCase()) > -1 ||
                item.detalhe.toUpperCase().indexOf(busca.toUpperCase()) > -1) {
                return item;
            }
        });

        this.setState({ dados: novaLista });


        evento.preventDefault();
    }

    componentWillMount() {
        let self = this;
        axios.get('http://localhost:8000/servidor.php?dados=1').then(function (response) {
            self.setState({
                dados: response.data,
                servidor: response.data
            });
        });
    }


    render() {
        let noticias = this.state.dados;

        let aux = [];
        let novaLista = [];

        for (let i = 0; i < noticias.length; i++) {
            aux.push(noticias[i]);
            if (aux.length == this.props.qtdLinha) {
                novaLista.push(aux);
                aux = [];
            } else if (i == noticias.length - 1) {
                novaLista.push(aux);
            }
        }

        let tamanhoCol = "col m" + this.props.tamanhoCol;



        let listaCartoes = function (grupo, self) {
            return grupo.map(function (item, index) {
                return (
                    <div key={index} className={tamanhoCol}>
                        <Cartao dados={item} addClicks={self.addClicks} />
                    </div>
                );
            });
        };

        let self = this;
        let linha = novaLista.map(function (grupo, index) {
            return (
                <div key={index} className="row">
                    {listaCartoes(grupo, self)}
                </div>
            );
        });


        return (
            <div>
                <div className="row">
                    <Busca atualizarBusca={this.atualizarBusca} onSubmit={this.onSubmit} busca={this.state.busca} />
                </div>
                <p>Quantidade de clicks = {this.state.clicks}</p>
                {linha}
            </div>
        );
    }
}

export default ListaCartao;