import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./styles.css";

const Banner = () => {
  let history = useNavigate();

  return (
    <header>
      <div className="search-container">
        <label for="search-input" class="search-icon"></label>
        <input type="text" class="search-input" id="search-input" required />
        <i class="fas fa-bell sino" onClick={() => history("/cart")}></i>

        <div className="box_menu">
          <input type="checkbox" id="check" />
          <div className="menu-icon">
            <label htmlFor="check">
              <i className="fas fa-bars" style={{ cursor: "pointer" }}></i>
            </label>
          </div>

          <div className="sidebar_menu">
            <div className="sidebar_titulo">
              <a>Painel de Controle</a>
            </div>
            <nav className="menu">
              <ul style={{ color: "transparent" }}>
                <li>
                  <i className="fas fa-stream"></i>
                  <a onClick={() => history("/cadProd")}>
                    Cadastro de Produtos
                  </a>
                </li>
                <li>
                  <i className="fas fa-stream"></i>
                  <a onClick={() => history("/cadFunc")}>
                    Cadastro de Funcionários
                  </a>
                </li>
                <li>
                  <i className="fas fa-stream"></i>
                  <a onClick={() => history("/listaCliente")}>
                    Lista de Clientes
                  </a>
                </li>
                <li>
                  <i className="fas fa-stream"></i>
                  <a onClick={() => history("/listaPrazo")}>Lista de Compras a Prazo</a>
                </li>
                <li>
                  <i className="fas fa-stream"></i>
                  <a onClick={() => history("/listaReserva")}>Lista das Reservas</a>
                </li>
                <li>
                  <i className="fas fa-stream"></i>
                  <a href="#">Tela de Faturamento</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
