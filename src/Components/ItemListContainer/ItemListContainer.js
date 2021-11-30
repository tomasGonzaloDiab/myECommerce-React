import React from 'react'
import { Card, Image, Button, Icon } from 'semantic-ui-react'
import './ItemListContainer.css'
import { Link } from 'react-router-dom';

const ItemListContainer = ({data}) => (
    <div className='userCard'>
      <Card className='cardContent'>
        <Image className='ImgCard' src={data.img} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{data.nombre}</Card.Header>
          <Card.Meta>
            <span className='date'> stock de {data.stock}</span>
          </Card.Meta>
         
          <Card.Description>
            {data.precio} $
          </Card.Description>
        </Card.Content>
      </Card>
      
  </div>
)


export default ItemListContainer

