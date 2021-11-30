import React, { useContext } from "react";
import CartContext from "../Context/CartContext";
import { Link } from 'react-router-dom';

import { addDoc, collection } from "@firebase/firestore";
import {db} from '../../Firebase/Firebase'

import { useFormik } from "formik";

import { Form, Input, Item, Button, Icon } from "semantic-ui-react";

import swal from "sweetalert";

//css
import "./Cart.css";

const Cart = () => {
  const [cart, setCart] = useContext(CartContext);
  console.log(cart);

  
  const deleteCarrito = () => {
    setCart([]);
  };

  const totalPrecio = () => {
    return cart.reduce((acc, item) => (acc += item.precio), 0);
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      email:"",
      telefono: "",
    },
    onSubmit: async (data) => {
      const docRef = await addDoc(collection(db, "compras"), {
        data,
        cart,
      });

      swal({
        title: "Compra finalizada, muchas gracias!",
        text: "ID de seguimiento: " + docRef.id,
        icon: "success",
        button: "Volver",
      });
    },
  }
  );

  

  return (
    <div>
      {cart.map((item) => (
        <div>
          <Item.Group>
            <Item className="containerCart">
              <Item.Image src={item.img} />

              <Item.Content className="containerCartElements">
                <Item.Header as="a">{item.nombre}</Item.Header>
                <Item.Meta>cantidad: {item.cantidad}</Item.Meta>

                <Item.Extra>{item.precio} pesos</Item.Extra>
              </Item.Content>
            </Item>
          </Item.Group>
        </div>
      ))}
      
    
      {cart.length <= 0 ? null : (
        <div className='formulario'> 
        <Form onSubmit={formik.handleSubmit} >
          <Form.Group widths="equal">
            <Form.Field
              id="name"
              control={Input}
              label="Nombre"
              placeholder="Nombre"
              onChange={formik.handleChange}
            />
            <Form.Field
              id="telefono"
              control={Input}
              label="Telefono"
              placeholder="2281363727"
              onChange={formik.handleChange}
            />

          </Form.Group>
          <Form.Field
            control={Input}
            label="Email"
            placeholder="ejemplo@hotmail.com"
            
          />
          <Form.Field
            id="email"
            control={Input}
            label="Email confirmar"
            placeholder="ejemplo@hotmail.com"
            onChange={formik.handleChange}
            
          />
          
        </Form>
        </div>
      )}
        {cart.length <= 0 ? null : (
        <Button
          onClick={deleteCarrito}
          className="butttonClass buttonClass2"
          animated="vertical"
        >
          <Button.Content hidden>Eliminar carrito</Button.Content>

          <Button.Content visible>
            <Icon name="delete" />
          </Button.Content>
        </Button>
      )}
      {cart.length<= 0 ? null :(<div className="precioTotal">Precio Total: ${totalPrecio()}</div>
)}
      {cart.length <= 0 ? (
        <Link to="/" >
        <button className="containerEsVacio">Carrito vacio! </button>
        </Link>
      ) : (
        <Button
          onClick={formik.handleSubmit}
          className="butttonClass buttonClass2"
          animated="vertical"
        >
          <Button.Content hidden>finalizar compra</Button.Content>

          <Button.Content visible>
            <Icon name="shop" />
          </Button.Content>
        </Button>
      )}
    </div>
  );
};
export default Cart;
