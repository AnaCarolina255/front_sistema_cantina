import React, { useEffect, useState } from 'react'
import './styles.css'

function Categoria(){
    const [categoria, setCategoria] = useState([]);

    useEffect(() => {
        fetch("http://10.92.198.22:8080/api/categoria/findAll")
          .then((retorno) => retorno.json())
          .then((response_convertido) => {
            setCategoria(response_convertido);
          });
      }, []);

      function LinkCategoria(){
        
      }

      return(
        <div className="categoria">
         {categoria.length &&
        categoria.map((p, x) => (
          <p value={p.nome} key={x}>          
            <a href='#' className="link-categoria">{p.categoria} </a>
          </p>
        ))}
        </div>
      )
}

export default Categoria
