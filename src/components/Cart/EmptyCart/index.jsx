import React from 'react'
import './styles.css'
import emptyCartImg from './sacola.png'
import { useNavigate } from 'react-router-dom'
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.1.2/css/fontawesome.min.css" integrity="sha384-X8QTME3FCg1DLb58++lPvsjbQoCT9bp3MsUU3grbIny/3ZwUJkRNO8NPW6zqzuW9" crossorigin="anonymous"></link>

const EmptyCart = () => {
    let history = useNavigate();
    return (
        <body className='bodi'>
        <div className='emptyCart'>
            <img src={emptyCartImg} alt="empty" />
            <button onClick={() => history("/")}>
                <i className='fas fa-long-arrow-alt-left'></i> Shop Now
            </button>
        </div>
        </body>
    )
}

export default EmptyCart
