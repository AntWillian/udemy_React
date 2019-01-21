import React from 'react';
import Cartao from './cartao';
import Busca from '../busca/busca';

class ListaCartao extends React.Component {

    constructor(props) {
        super(props);
        this.state = { clicks: 0, busca: '', dados: [],servidor:[]};
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
            this.setState({dados: this.state.servidor});
        }
    }

    onSubmit(evento) {
        console.log('ok');
        let busca = this.state.busca;
        let dados = this.state.servidor;

        let novaLista = dados.filter(function(item){
            if (item.titulo.toUpperCase().indexOf(busca.toUpperCase()) > -1 ||
                item.descricao.toUpperCase().indexOf(busca.toUpperCase()) > -1 ||
                item.detalhe.toUpperCase().indexOf(busca.toUpperCase()) > -1){
                return item;
            }
        });

        this.setState({ dados: novaLista });


        evento.preventDefault();
    }

    componentWillMount() {
        this.setState({
            dados: [
                { titulo: 'Tetse 2', descricao: 'descricao teste 2', detalhe: 'detalhe teste 2', imagem: 'https://materializecss.com/images/office.jpg', link: '#teste' },
                { titulo: 'Tetse 3', descricao: 'descricao teste 3', detalhe: 'detalhe teste 3', imagem: 'https://materializecss.com/images/office.jpg', link: '#teste' },
                { titulo: 'Tetse 4', descricao: 'descricao teste 4', detalhe: 'detalhe teste 4', imagem: 'https://materializecss.com/images/office.jpg', link: '#teste' },
                { titulo: 'Tetse 5', descricao: 'descricao teste 5', detalhe: 'detalhe teste 5', imagem: 'https://materializecss.com/images/office.jpg', link: '#teste' },
                { titulo: 'Tetse 6', descricao: 'descricao teste 6', detalhe: 'detalhe teste 6', imagem: 'https://materializecss.com/images/office.jpg', link: '#teste' },
                { titulo: 'Tetse 7', descricao: 'descricao teste 7', detalhe: 'detalhe teste 7', imagem: 'https://materializecss.com/images/office.jpg', link: '#teste' },
                { titulo: 'Tetse 8', descricao: 'descricao teste 8', detalhe: 'detalhe teste 8', imagem: 'https://materializecss.com/images/office.jpg', link: '#teste' },
                { titulo: 'Tetse 9', descricao: 'descricao teste 9', detalhe: 'detalhe teste 9', imagem: 'https://materializecss.com/images/office.jpg', link: '#teste' },
                { titulo: 'Tetse 10', descricao: 'descricao teste 10', detalhe: 'detalhe teste 10', imagem: 'https://materializecss.com/images/office.jpg', link: '#teste' },
                { titulo: 'Tetse 11', descricao: 'descricao teste 11', detalhe: 'detalhe teste 11', imagem: 'https://materializecss.com/images/office.jpg', link: '#teste' },
                { titulo: 'Tetse 12', descricao: 'descricao teste 12', detalhe: 'detalhe teste 12', imagem: 'https://materializecss.com/images/office.jpg', link: '#teste' }
            ],
            servidor: [
                { titulo: 'Tetse 2', descricao: 'descricao teste 2', detalhe: 'detalhe teste 2', imagem: 'https://materializecss.com/images/office.jpg', link: '#teste' },
                { titulo: 'Tetse 3', descricao: 'descricao teste 3', detalhe: 'detalhe teste 3', imagem: 'https://materializecss.com/images/office.jpg', link: '#teste' },
                { titulo: 'Tetse 4', descricao: 'descricao teste 4', detalhe: 'detalhe teste 4', imagem: 'https://materializecss.com/images/office.jpg', link: '#teste' },
                { titulo: 'Tetse 5', descricao: 'descricao teste 5', detalhe: 'detalhe teste 5', imagem: 'https://materializecss.com/images/office.jpg', link: '#teste' },
                { titulo: 'Tetse 6', descricao: 'descricao teste 6', detalhe: 'detalhe teste 6', imagem: 'https://materializecss.com/images/office.jpg', link: '#teste' },
                { titulo: 'Tetse 7', descricao: 'descricao teste 7', detalhe: 'detalhe teste 7', imagem: 'https://materializecss.com/images/office.jpg', link: '#teste' },
                { titulo: 'Tetse 8', descricao: 'descricao teste 8', detalhe: 'detalhe teste 8', imagem: 'https://materializecss.com/images/office.jpg', link: '#teste' },
                { titulo: 'Tetse 9', descricao: 'descricao teste 9', detalhe: 'detalhe teste 9', imagem: 'https://materializecss.com/images/office.jpg', link: '#teste' },
                { titulo: 'Tetse 10', descricao: 'descricao teste 10', detalhe: 'detalhe teste 10', imagem: 'https://materializecss.com/images/office.jpg', link: '#teste' },
                { titulo: 'Tetse 11', descricao: 'descricao teste 11', detalhe: 'detalhe teste 11', imagem: 'https://materializecss.com/images/office.jpg', link: '#teste' },
                { titulo: 'Tetse 12', descricao: 'descricao teste 12', detalhe: 'detalhe teste 12', imagem: 'https://materializecss.com/images/office.jpg', link: '#teste' }
            ]
        });
    }


    render() {
        let noticias =this.state.dados;

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