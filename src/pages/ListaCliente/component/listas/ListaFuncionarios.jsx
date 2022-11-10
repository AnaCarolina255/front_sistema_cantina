import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/ListFuncionarios.css";


function Funcionarios() {
    let history = useNavigate();
   

    const cliente = {

        idCliente:0,
        nome:'',
        email: '',
        tipoCliente:''

    }

     const [busca, setBusca] = useState('');
    console.log(busca)

    const [clientes, setClientes] = useState([]);

    useEffect(() =>  {

        fetch("http://10.92.198.22:8080/api/clientes/findall")
          .then(retorno => retorno.json())
          .then(convertido => setClientes(convertido))
          
        
      },[]);

      


    return (
        <div>

          
            <div className="numContas" onClick={() => history("/cadFunc")}><p>Adicionar Novo</p></div>
            <input className="busca" type="text" value={busca} onChange={(ev) => setBusca(ev.target.value)}></input>

            <div className="cont-list">
                {clientes.filter(cliente=>cliente.nome.toLowerCase().includes(busca)).map((cliente, x) => (

                    <div className="div_informacoes" key={x}>

                        <label className="nome">{cliente.nome}</label>
                        <p className="email">{cliente.email}</p>

                        <label className="tipo">{cliente.tipoCliente}</label>
                       

                    </div>
                ))}

            </div>


            



        </div>
    )
}

export default Funcionarios;