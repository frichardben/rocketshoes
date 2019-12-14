import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

 import { Productlist } from './styles';

export default function Home() {
  return (
    <Productlist>
      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-vr-sneaker-meia-leve/06/E74-0492-006/E74-0492-006_detalhe2.jpg?ims=326x" alt="Tênis" />
        <strong>Tênis muito legal</strong>
        <span>R$ 129,90</span>

        <button type="button">
            <div>
              <MdAddShoppingCart size={16} color="#fff"/> 3
            </div>

            <span>ADICIONAR AO CARRINHO </span>
        </button>
      </li>
      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-vr-sneaker-meia-leve/06/E74-0492-006/E74-0492-006_detalhe2.jpg?ims=326x" alt="Tênis" />
        <strong>Tênis muito legal</strong>
        <span>R$ 129,90</span>

        <button type="button">
            <div>
              <MdAddShoppingCart size={16} color="#fff"/> 3
            </div>

            <span>ADICIONAR AO CARRINHO </span>
        </button>
      </li>
      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-vr-sneaker-meia-leve/06/E74-0492-006/E74-0492-006_detalhe2.jpg?ims=326x" alt="Tênis" />
        <strong>Tênis muito legal</strong>
        <span>R$ 129,90</span>

        <button type="button">
            <div>
              <MdAddShoppingCart size={16} color="#fff"/> 3
            </div>

            <span>ADICIONAR AO CARRINHO </span>
        </button>
      </li>
      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-vr-sneaker-meia-leve/06/E74-0492-006/E74-0492-006_detalhe2.jpg?ims=326x" alt="Tênis" />
        <strong>Tênis muito legal</strong>
        <span>R$ 129,90</span>

        <button type="button">
            <div>
              <MdAddShoppingCart size={16} color="#fff"/> 3
            </div>

            <span>ADICIONAR AO CARRINHO </span>
        </button>
      </li>
      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-vr-sneaker-meia-leve/06/E74-0492-006/E74-0492-006_detalhe2.jpg?ims=326x" alt="Tênis" />
        <strong>Tênis muito legal</strong>
        <span>R$ 129,90</span>

        <button type="button">
            <div>
              <MdAddShoppingCart size={16} color="#fff"/> 3
            </div>

            <span>ADICIONAR AO CARRINHO </span>
        </button>
      </li>
      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-vr-sneaker-meia-leve/06/E74-0492-006/E74-0492-006_detalhe2.jpg?ims=326x" alt="Tênis" />
        <strong>Tênis muito legal</strong>
        <span>R$ 129,90</span>

        <button type="button">
            <div>
              <MdAddShoppingCart size={16} color="#fff"/> 3
            </div>

            <span>ADICIONAR AO CARRINHO </span>
        </button>
      </li>
    </Productlist>
  );
}
