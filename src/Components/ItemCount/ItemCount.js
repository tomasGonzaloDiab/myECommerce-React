import React, { useState } from "react";
import { Button, Card } from "semantic-ui-react";
import "./ItemCount.css";

const ItemCount = ({ onAdd ,  stock }) => {
  const [counter, setCounter] = useState(1);

  console.log(stock);
  const handleCounterUp = () => {
    incrementar(stock);
  };
  const incrementar = (stock) => {
    if (counter < stock) {
      setCounter(counter + 1);
      onAdd(counter + 1);
    }
  };
  const devolver = () => {
    return 2;
  };
  const handleCounterDown = () => {
    if (counter > 1) {
      setCounter(counter - 1);
      onAdd(counter - 1);
    }
  };
  return (
    <div>
      <Card>
        <Card.Content>
          <Card.Meta>Cantidad que desea(stock actual de {stock})</Card.Meta>
          <Card.Description>{counter}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Button onClick={handleCounterUp} basic color="green">
              +
            </Button>
            <div>{counter}</div>
            <Button onClick={handleCounterDown} basic color="red">
              -
            </Button>
          </div>
        </Card.Content>
      </Card>
    </div>
  );
};
export default ItemCount;
