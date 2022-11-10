import React from 'react'
import './styles.css'

const MenuItem = ({ 
    item
}) => {
    const { nome, categoria, imagem } = item;

    return (
        <div className='item'>
            <img src={imagem} alt="food" />
            <div className="item-head_desc">
                <p className='head_desc-name'>{nome}</p>
                <p className='head_desc-info'>
                    <small>{categoria}</small>
                </p>
            </div>
            
        </div>
    );
};



export default MenuItem;
