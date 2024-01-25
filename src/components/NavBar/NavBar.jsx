import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {

    return(
        <>
            <img id='logo' src="../public/logo.png" alt="logo empresa"/>

            <ul>
                <li>
                    <a href="">Inicio</a>
                </li>
                <li>
                    <a href="">Producto</a>
                </li>
                <li>
                    <a href="">Contacto</a>
                </li>
            </ul>

            <CartWidget/>

        </>
    )
}

export default NavBar;