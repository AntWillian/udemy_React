import React from 'react';
import Cartao from './cartao';

class ListaCartao extends React.Component {
    render() {
        let noticias = [
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
        ];

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

        let tamanhoCol = "col m" + this.props.tamanhoCol
        let listaCartoes = function (grupo) {
            return grupo.map(function (item, index) {
                return (
                    <div key={index} className={tamanhoCol}>
                        <Cartao dados={item} />
                    </div>
                );
            });
        };


        let linha = novaLista.map(function (grupo, index) {
            return (
                <div key={index} className="row">
                    {listaCartoes(grupo)}
                </div>
            );
        });


        return (
            <div className="row">
                {linha}
            </div>
        );
    }
}

export default ListaCartao;