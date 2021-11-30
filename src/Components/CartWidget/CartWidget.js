import React from 'react'
import carrito from '../../Assets/carrito.png'
import { Image } from 'semantic-ui-react'
import './CartWidget.css'

 export const CartWidget = () =>{
    return(
        <div className='ConteinerImg'>
            <Image width="400px" src={carrito}/>
        </div>
    )
}
