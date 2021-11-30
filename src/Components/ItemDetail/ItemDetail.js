import {React, useEffect, useState, useContext} from 'react'
import { Card, Image, Button, Icon, } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'


// Firebase
import { doc, getDoc} from 'firebase/firestore'
import {db} from '../../Firebase/Firebase'
import CartContext from '../Context/CartContext';


const ItemDetail = ({ match }) => {
    const itemID = match.params.id;
    const [item, setItem] = useState([]);
    const [cantidadItems, setCantidadItems] =useState(1)
    const [cart, setCart] =useContext(CartContext)
    const [stock, setStock] =useState()
    const counterHandler = (counter) => {  
      setCantidadItems(counter);
  }
    

  
  useEffect(() => {
    const getItem = async () => {
      const docRef = doc(db, "products", itemID);
      const docSnap = await getDoc(docRef);
      setStock(docSnap.data().stock);
  
     if (docSnap.exists()) {
        setItem({ ...docSnap.data(), id: docSnap.id });
      } else {
        console.log("no esta!");
      }
    }
    getItem();
  }, [])
  
  const agregarCarrito=()=>{
    const igual = cart.find((i)=> i.id === item.id)
    console.log(igual)
    console.log(item)
   
    if(igual){
      igual.cantidad+=cantidadItems
      igual.precio+=(item.precio*cantidadItems)
    }
    else{
      setCart(
        [...cart,{id: item.id,nombre: item.nombre, precio: item.precio*cantidadItems, tipo: item.tipo,img:item.img, cantidad: cantidadItems, stock: item.stock}]
      )

    }


  }
  return (
      
    <div className='productCardDetail'>
     {  <Card className='cardContent'>
        <Image className='ImgCard' src={item.img} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{item.nombre}</Card.Header>
          <Button  animated='vertical'>
            
             <Button.Content onClick={agregarCarrito} hidden>agregar</Button.Content>
            
             <Button.Content  visible>
                 <Icon  name='shopping cart' />
             </Button.Content>
         </Button>       
          <Card.Description>
            {item.precio*cantidadItems}  $
          </Card.Description>
          <Card.Description>
            {item.descripcion}
          </Card.Description>
        </Card.Content>
        <ItemCount  onAdd={counterHandler} stock={item.stock}/>

      </Card> }
{/*     <div className='cardDetailContent'>
      {item.nombre}
      <div className='cardDetails'>

        <img className='cardDetailImg'src={item.img}/>
        {item.precio * cantidadItems}$
      <div className='cardDetailDescription'>
        {item.descripcion}

      </div>
        
      </div>
    </div> */}
    </div>
    )
  }
    export default ItemDetail