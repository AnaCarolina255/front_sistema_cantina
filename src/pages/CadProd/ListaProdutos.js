import React, { useEffect, useState } from "react";
import "../../components/Home/Banner/styles.css";

function Lista() {
  const [produtoAdd, setProdutoAdd] = useState([]);
  const [produtos, setProdutos] = useState([]);
  const total = produtoAdd.reduce((soma, item) => item.preco + soma, 0)

  const deletarProduto = (idProduto) => {
    fetch(`http://10.92.198.22:8080/api/produto/deletar/${idProduto}`, {
      method: 'DELETE',
    })
    .then(retorno_convertido => {      
      setProdutos(retorno_convertido)
      window.location.reload()
    })
    
  }

  //inserir input da conta
  const [val, setVal]=useState([]);
  const handleAdd=()=>{
    const abc=[...val,[]]
    setVal(abc)
  }
  const handleChange=(onChangeValue,i)=>{
    const inputdata=[...val]
    inputdata[i]=onChangeValue.target.value;
    setVal(inputdata)
  }
  const handleDelete=(i)=>{
    const deletVal=[...val]
    deletVal.splice(i,1)
    setVal(deletVal)
  }

  function Adicionar(produto) {
    setProdutoAdd((produtoAdd) => [...produtoAdd, produto]);
    console.log(produtoAdd);
  }

  function Limpar(){
    produtos.value = '';
}

  useEffect(() => {
    fetch("http://10.92.198.22:8080/api/produto/findAll")
      .then((retorno) => retorno.json())
      .then((response_convertido) => {
        setProdutos(response_convertido);
      });
  }, []);

  return (
    <div className="container-item">
      <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      {produtos.length &&
        produtos.map((p, x) => (
          <p className="item" id="cont-item" value={p.nome} key={x}>
            <div className="imagem-prod">
              <img src={p.imagem} />
            </div>
            <div className="nome-prod">{p.nome}</div>
            <div className="preco-prod">{p.preco}</div>
            <div className="categoria-prod">{p.categoria.categoria} </div>
            <button onClick={() => Adicionar(p)} className="btn-add">
              adicionar
            </button>
            <button onClick={() => deletarProduto(p.idProduto)} className="btnExcluir">X</button>
          </p>
        ))}
        </div>
      <div className="menu-ticket">
        <h1>Ticket</h1>
        <hr />
        <h3>Novo Pedido</h3>
        <div className="linha"></div>
        {produtoAdd.length &&
          produtoAdd.map((p, x) => (
            <p className="item" key={x}>
              <div className="nome-prod">{p.nome}</div>
              <div className="preco-prod">{p.preco}</div>
            </p>
          ))}

        <hr />
        <h4>Total: {total}</h4>
        <h4>Valor Pago: <input className="inp-vp" type='text'/></h4>
        <h4>Troco:</h4>
        <hr />
        <div className="cont-btn-ticket">
          <button className="btn-ticket">Finalizar</button>
          <button className="btn-ticket" onClick={Limpar()}>Limpar</button>
          <>
          <button onClick={()=>handleAdd()} className="btn-ticket">Conta</button>
          {val.map((data,i)=>{
            return(
              <div className="input-conta">
              <h5 className="h5-nif">Insira um NIF</h5>
              <input className="inp-nif" value={data} onChange={e=>handleChange(e,i)}/>
              <button className="btn-fechar" onClick={()=>handleDelete(i)}>X</button>
              </div>
              )
          })}
          </>
          <button className="btn-ticket">Reserva</button>
        </div>
      </div>
    </div>
  );
}
export default Lista;
