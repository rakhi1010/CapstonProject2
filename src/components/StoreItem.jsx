import { Button, Card } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";

const StoreItem = ({ id, name, price, imgUrl, category }) => {
  const {getItemQuantity,decreaseCartQuantity,increaseCartQuantity, removeFromCart} = useShoppingCart()
  const quantity = getItemQuantity(category, id);
  return (
    <Card>
      <Card.Body className="d-flex justify-content-around align-items-center">
      <div className="d-flex flex-column">
        <Card.Title className="fs-2">{name}</Card.Title>
        <div className="mt-auto">
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
          {quantity === 0 ? (
            <Button className="w-100" onClick={() => increaseCartQuantity(category,id)}>+ Add to Cart</Button>
          ) : <div className="d-flex flex-column align-items-center" style={{gap: "0.5rem"}}>
              <div className="d-flex justify-content-center align-items-center" style={{gap: "0.5rem"}}>
                <Button onClick={() => decreaseCartQuantity(category, id)}>-</Button>
                  <div><span className="fs-3">{quantity}</span> in cart</div>
                <Button onClick={() => increaseCartQuantity(category, id)}>+</Button>
              </div>
              <Button size="sm" variant="danger" onClick={() => removeFromCart(category, id)}>Remove</Button>
            </div>}
        </div>
      </div>
      <img src={imgUrl} height="100px" style={{objectFit: 'cover'}} />
      </Card.Body>
    </Card>
  )
}

export default StoreItem