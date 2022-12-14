import React, { useState, useEffect } from "react";
import camera from "../Img/camera.png";
import { FaArrowLeft } from "react-icons/fa";
import Select from "./Select";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function FormPost() {
  let base64String;
  let history = useNavigate();

  const uploadImage = async (e) => {
    console.log(e.target.files);

    const file = e.target.files[0]; 

    const teste = await base64(file);

    base64String = teste;

    var receberArquivo = document.getElementById("fotos").files;

    if (receberArquivo.length > 0) {
      var carregarImagem = receberArquivo[0];

      //console.log(carregarImagem);

      var lerArquivo = new FileReader();

      lerArquivo.onload = function (arquivoCarregado) {
        var imagemBase64 = arquivoCarregado.target.result;

        console.log(imagemBase64);

        var novaImagem = document.createElement("img");

        novaImagem.src = imagemBase64;

        document.getElementById("verImagemCat").innerHTML =
          novaImagem.outerHTML;
      };
      lerArquivo.readAsDataURL(carregarImagem);
    }

    setObjCategoria({ ...objCategoria, ["fotos"]: base64String });
  };

  const base64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();

      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const categoria = {
    id: 0,
    categoria: "",
    fotos: "",
  };

  const [objCategoria, setObjCategoria] = useState(categoria);

  const cadastrar = (e) => {
    fetch("http://10.92.198.22:8080/api/categoria", {
      method: "POST",
      body: JSON.stringify(objCategoria),
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    })
      .catch((error) => {
        alert(error);
      })
      .then((retorno) => retorno.json())
      .then((response_convertido) => {
        console.log(response_convertido);
      });
  };

  //OBTENO DADOS
  const aoDigitar = (e) => {
    setObjCategoria({ ...objCategoria, [e.target.name]: e.target.value });
    console.log(objCategoria.categoria);
  };

  //////// PRODUTO

  // CONVERTER IMAGEM EM BASE64
  let base64StringProduto;
  const uploadImageProduto = async (e) => {
    console.log(e.target.files);

    const file = e.target.files[0];
    const teste = await base64Produto(file);

    base64StringProduto = teste;

    var receberArquivo = document.getElementById("imagem").files;

    if (receberArquivo.length > 0) {
      var carregarImagem = receberArquivo[0];

      //console.log(carregarImagem);

      var lerArquivo = new FileReader();

      lerArquivo.onload = function (arquivoCarregado) {
        var imagemBase64 = arquivoCarregado.target.result;

        console.log(imagemBase64);

        var novaImagem = document.createElement("img");

        novaImagem.src = imagemBase64;

        document.getElementById("verImagem").innerHTML = novaImagem.outerHTML;
      };
      lerArquivo.readAsDataURL(carregarImagem);
    }

    setObjProduto({ ...objProduto, ["imagem"]: base64StringProduto });
  };

  const base64Produto = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();

      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  // PEGAR AS CATEGORIAS PARA O SELECT
  const [objCategoriaSelect, setObjCategoriaSelect] = useState([]);

  useEffect(() => {
    fetch("http://10.92.198.22:8080/api/categoria/findAll", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .catch((error) => {
        alert(error);
      })
      .then((retorno) => retorno.json())
      .then((response_convertido) => {
        setObjCategoriaSelect(response_convertido);
      });
  }, []);

  // SALVAR PRODUTO
  const produto = {
    idProduto: 0,
    nome: "",
    preco: 0,
    imagem: "",
    categoria: { id: objCategoria },
  };

  const [objProduto, setObjProduto] = useState([]);

  const cadastrarProduto = (e) => {
    fetch("http://10.92.198.22:8080/api/produto", {
      method: "POST",
      body: JSON.stringify(objProduto),
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
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

  //OBTENO DADOS
  const aoDigitarProduto = (e) => {
    setObjProduto({ ...objProduto, [e.target.name]: e.target.value });
  };

  //OBTENO DADOS DA CATEGORIA
  const select = (e) => {
    setObjProduto({
      ...objProduto,
      categoria: {
        id: e.target.value,
        name: e.target.options[e.target.name],
      },
    });
  };

  return (
    <div className="body">
      <div className="container-cadProd">
        <div className="forms-container">
          <div className="signin-signup">
            <form className="sign-in-form">
              <h2 className="title">Cadastro de Produtos</h2>

              <div className="input-field">
                <input
                  type="text"
                  name="nome"
                  placeholder="Nome"
                  onChange={aoDigitarProduto}
                ></input>
              </div>
              <div className="input-field">
                <input
                  type="text"
                  name="preco"
                  placeholder="R$"
                  onChange={aoDigitarProduto}
                ></input>
              </div>

              <Select
                name="categoria_id"
                options={objCategoriaSelect}
                handleOnChange={select}
                value={objProduto.categoria ? objProduto.categoria.id : ""}
              />

              <br></br>
              <div className="imageContainer">
                <img
                  src={camera}
                  alt="Selecione uma imagem"
                  id="imgPhoto"
                  onClick={() => {
                    const file = document.getElementById("imagem");
                    file.click();
                  }}
                />
              </div>
              <input
                type="file"
                name="imagem"
                accept="image/*"
                id="imagem"
                onChange={uploadImageProduto}
              ></input>

              <div id="verImagem"></div>

              <button
                type="button"
                value="cadastrar"
                className="btn solid"
                onClick={cadastrarProduto}
              >Cadastrar</button>
            </form>

            <form className="sign-up-form">
              <h2 className="title">Adicionar Categorias</h2>
              <div className="input-field">
                <input
                  type="text"
                  name="categoria"
                  placeholder="Insira uma nova categoria..."
                  onChange={aoDigitar}
                ></input>
              </div>

              <div className="imageContainer">
                <img
                  src={camera}
                  alt="Selecione uma imagem"
                  id="imgPhoto"
                  onClick={() => {
                    const file = document.getElementById("fotos");
                    file.click();
                  }}
                />
              </div>
              <input
                type="file"
                name="fotos"
                accept="image/*"
                id="fotos"
                onChange={uploadImage}
              ></input>

              <div id="verImagemCat"></div>

              <input
                type="button"
                className="btn"
                value="cadastrar"
                onClick={cadastrar}
              ></input>
            </form>
          </div>
        </div>
        
        <div className="panels-container">
          <div className="panel left-panel">
          <FaArrowLeft className="icone-voltar" onClick={() => history("/")}/>
            <div className="content">
              <h3>Nova Categoria</h3>
              <p>Clique aqui para cadastrar uma nova categoria...</p>
              <button
                className="btn transparent botao1"
                id="sign-up-btn"
                onClick={() => {
                  const container =
                    document.querySelector(".container-cadProd");
                  container.classList.add("sign-up-mode");
                }}
              >
                Cadastrar
              </button>
            </div>
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3 className="h3-format">Voltar para a p??gina anterior</h3>

              <button
                className="btn transparent botao2"
                id="sign-in-btn"
                onClick={() => {
                  const container =
                    document.querySelector(".container-cadProd");
                  container.classList.remove("sign-up-mode");
                }}
              >
                Voltar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormPost;
