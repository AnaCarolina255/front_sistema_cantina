import React, { useState } from "react";
import Banner from "../../../components/Home/Banner";
import '../App.css'

function ListPrazo ()  {

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
            <Banner />
            <div className="card-container">
             <div className={'card desactive'} id='card_id'>
                <div className='contentBx' >
                    <div className='content-toggle'>
                    <h2>José Roberto<br/><span> R$ 35,00</span></h2>
                        <div className='infoBx'><h2> Coxinha R$3.00</h2>
                        </div>
                    </div>
                </div>
                <div className='toggle'>
                    <span onClick={() => show("card_id")}></span>
                </div>
            </div>
            <div className={'card desactive'} id='card_id2'>
                <div className='contentBx' >
                    <div className='content-toggle'>
                    <h2>Bruna Câmara<br/><span> R$ 50,00</span></h2>
                        <div className='infoBx'><h2>Água com gás  R$ 3.50</h2></div>
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
export default ListPrazo