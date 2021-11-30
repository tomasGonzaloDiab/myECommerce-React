import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import {CartWidget} from '../CartWidget/CartWidget.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import  DropdownCat  from '../DropdownCat/DropdownCat';
import CartContext from "../Context/CartContext";


// import de Boostrap
import Button from 'react-bootstrap/Button';

export const Nav = () => {
    const [cart] = useContext(CartContext);
    const numItems = cart.length;
    return (
        <div className="Nav">
            <ul class="nav nav-pills">
            {/* <Link to='/Cart'>
            {}
            <CartWidget />
             
            </Link> */}
            {cart.length > 0 ? (<div className='carritoContainer'>
              <Link to="/cart">
                <div className='carrito' ><CartWidget /></div>
                <div className="numItems">{numItems}!</div>
              </Link></div>
            ) : null}
            <Link to='/' class="">
                <a className="sections" href="#">Productos</a>
            </Link>
           
            <DropdownCat></DropdownCat>
            </ul>
        </div>
    )
}


