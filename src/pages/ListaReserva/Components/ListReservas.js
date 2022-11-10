import React, { useState } from "react";
import '../App.css'

function ListReserva ()  {
    
    function show(id){
        
        if(id == "card_id"){
            const card = document.getElementById("card_id")

            if(card.classList.contains("desactive")){
                card.classList.replace("desactive", "active")
            }else{
                card.classList.replace("active", "desactive")
            }
            
        }else{
            const card = document.getElementById("card_id2")
            
            if(card.classList.contains("desactive")){
                card.classList.replace("desactive", "active")
            }else{
                card.classList.replace("active", "desactive")
            }
        }
    }
    
    return (

        <div className='container-principal'>
            

            <div className="card-container">
             <div className={'card desactive'} id='card_id'>
                <div className='contentBx' >
                    <div className='content-toggle'>
                        <h2>Almoço<br/><span> 05/09/2022 </span></h2>
                            <div className='infoBx'><h2> Aline Souza</h2> <br/> 
                                <h2>Prato feito de filé de frango com fritas</h2> <br/>
                                <h2> Suco da máquina </h2>
                            </div>
                    </div>
                    <div className="botao">
                    <button className="btn-concluir" type='submit'> CONCLUIR </button>
                    <button className="btn-alterar" type='submit'> ALTERAR </button>
                    <button className="btn-excluir" type='submit'> EXCLUIR </button>
                    </div>
                </div>
                <div className='toggle'>
                    <span onClick={() => show("card_id")}></span>
                </div>
            </div>
            <div className={'card desactive'} id='card_id2'>
                <div className='contentBx' >
                    <div className='content-toggle'>
                    <h2>Salgado<br/><span> 16/11/2022</span></h2>
                        <div className='infoBx'><h2> Renan</h2> <br/>
                            <h2>Pastel de Frango com catupiry</h2> <br/>
                            <h2>Coca-cola de 600 ml</h2></div>
                    </div>
                    <div className="botao">
                    <button className="btn-concluir" type='submit'> CONCLUIR </button>
                    <button className="btn-alterar" type='submit'> ALTERAR </button>
                    <button className="btn-excluir" type='submit'> EXCLUIR </button>
                    </div>
                </div>

                
                
                <div className='toggle' >
                    <span onClick={() =>  show("card_id2")}></span>
                </div>
            </div>

            
            </div>
        </div>
    )
}
export default ListReserva