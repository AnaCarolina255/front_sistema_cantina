import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../App.css";

const CadFuncionario = () => {
  let history = useNavigate();
  /*const {form, SetForm} = useState ({
        name:"",
        email:"",
        document:"",
        cargo:""

    })
    */
  const form = {
    idCliente: 0,
    nome: "",
    email: "",
    identificador: "",
    senha: "",
    tipoCliente: "Funcionário",
  };

  const [formFuncionario, setformFuncionario] = useState(form);

  const cadastrarCliente = () => {
    fetch(`http://10.92.198.22:8080/api/clientes`, {
      method: "POST",
      body: JSON.stringify(formFuncionario),
      headers: {
        "Content-type": "application/json",
      },
    })
      .catch((error) => {
        alert(error);
      })
      .then((retorno) => retorno.json())
      .then((response_convertido) => {
        console.log(response_convertido);
        Array.from(document.querySelectorAll("input")).forEach(
          input => (input.value = "")
        );
        this.setState({
          itemvalues: [{}]
        });
        toast.success("Nova categoria cadastrada")
      });
  };

  const [emptyValue, SetEmptyValue] = useState(false);

  const nome = document.getElementById("name");
  const [validEmail, SetValidEmail] = useState(false);

  const handleChange = (e) => {
    SetValidEmail(true);
    setformFuncionario({ ...formFuncionario, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //verificar se existem campos não preenchidos
    let emptyValues = Object.values(formFuncionario).some((obj) => obj == "");
    SetEmptyValue(emptyValues);

    //verificar se o email é válido
    let validEmail = formFuncionario["email"]
      .toLocaleLowerCase()
      .match(/[a-z]+@[a-z]+\.com(\.br)*/);
    SetValidEmail(validEmail);

    if (!emptyValues && validEmail) {
      fetch("http://10.92.198.22:8080/api/clientes/buscarEmail/{email}", {
        method: "POST",
        body: JSON.stringify(formFuncionario),
      });
      e.currentTarget.submit();
    }
  };
  return (
    <div className="body">
      <div className="container-fun">
        <div className="forms-container-fun">
          <div className="signin-signup-fun">
            <div className="content2">
              <h3>Lista de Clientes</h3>
              <p>Clique aqui para visualizar os funcionários...</p>
              <button onClick={() => history("/listaCliente")} className="btn transparent botao1">Visualizar</button>
            </div>
            <FaArrowLeft
              className="icone-voltar2"
              onClick={() => history("/")}
            />
            <form
              className="sign-in-form-fun"
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <h2 className="title-fun">Cadastro de Funcionário</h2>

              <input
                className="input-field-fun"
                type="text"
                id="name"
                name="nome"
                placeholder="Insira o nome completo"
                onChange={handleChange}
              />
              {nome == "" ? (
                <span className="emptyText">
                  O campo nome precisa ser preenchido
                </span>
              ) : (
                ""
              )}
              {emptyValue && formFuncionario["nome"] == "" ? (
                <span className="emptyText">
                  O campo nome precisa ser preenchido
                </span>
              ) : (
                ""
              )}

              <input
                className="input-field-fun"
                type="email"
                name="email"
                placeholder="Insira um E-mail"
                onChange={(e) => handleChange(e)}
              />
              {emptyValue && formFuncionario["email"] == "" ? (
                <span className="emptyText">
                  O campo email precisa ser preenchido
                </span>
              ) : (
                ""
              )}
              {validEmail && formFuncionario["email"] == !"" ? (
                <span className="emptyText">E-mail inválido</span>
              ) : (
                ""
              )}

              <input
                className="input-field-fun"
                type="text"
                name="identificador"
                placeholder="Insira o NIF ou CPF"
                onChange={(e) => handleChange(e)}
              />
              {emptyValue && formFuncionario["identificador"] == "" ? (
                <span className="emptyText">
                  O campo NIF ou CPF precisa ser preenchido
                </span>
              ) : (
                ""
              )}

              <select
                className="cargo"
                name="tipoCliente"
                onChange={(e) => handleChange(e)}
              >
                <option
                  value="funcionario"
                  name="tipoCliente"
                  onChange={(e) => handleChange(e)}
                >
                  Funcionário
                </option>
              </select>

              <button
                type="submit"
                value="Salvar"
                className="btn fun "
                onClick={cadastrarCliente}
              >Salvar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CadFuncionario;
