import { Button, Card, Stack } from 'react-bootstrap'
import { useShoppingCart } from '../context/ShoppingCartContext'
import { formatCurrency } from '../utilities/formatCurrency'
import storeItems from "../data/items.json"
import CartItem from '../components/CartItem'

const ShoppingCart = () => {
  const { cartItems, orderPlace } = useShoppingCart()
  return (
    <Card>
      <Card.Body>
      <Card.Title>Cart Items</Card.Title>
        <Stack gap={3}>
          {cartItems.map(item => (
            <CartItem key={item.category + item.id} {...item} />
          ))}

          <div className="ms-auto fw-bold fs-5">
            Total {formatCurrency(cartItems.reduce((total, cartItem) => {
                let item = storeItems.find(i => i.category === cartItem.category)
                item = item.itemList.find(a => a.id === cartItem.id)
                return total + (item?.price || 0) * cartItem.quantity
            }, 0))}
          </div>
        </Stack>
        {
          cartItems.length ? <Button size="sm" className='float-end mt-4' variant="danger" onClick={orderPlace}>Order Place</Button> : null
        }
      </Card.Body>
    </Card>
  )
}

export default ShoppingCart