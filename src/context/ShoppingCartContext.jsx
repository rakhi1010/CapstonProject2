import { createContext, useContext } from "react"
import { useLocalStorage } from "../hooks/useLocalStorage"

const ShoppingCartContext = createContext({})

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children }) {
  const [cartItems, setCartItems] = useLocalStorage("shopping-cart", [])

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  )

  function getItemQuantity(category, id) {
    return cartItems.find(item => item.id === id && item.category === category)?.quantity || 0
  }

  function increaseCartQuantity(category, id) {
    return setCartItems(currItems => { 
      if(currItems.find(item => item.category === category && item.id === id) == null) {
        return [...currItems, { category, id, quantity : 1}]
      } else {
        return currItems.map(item => {
          if(item.id === id && item.category === category) {
            return { ...item, quantity: item.quantity + 1}
          }
          return item
        })
      }
    })
  }

  function decreaseCartQuantity(category, id) {
    return setCartItems(currItems => { 
      if(currItems.find(item => item.id === id && item.category === category)?.quantity === 1) {
        return currItems.filter(item => item.id !== id)
      } else {
        return currItems.map(item => {
          if(item.id === id && item.category === category) {
            return { ...item, quantity: item.quantity - 1 }
          }
          return item
        })
      }
    })
  }

  function removeFromCart(category, id) {
    setCartItems(currItems => {
      return currItems.filter(item => item.id !== id && item.category === category)
    })
  }

  function orderPlace(){
    setCartItems([])
  }

  return <ShoppingCartContext.Provider 
    value={{
      getItemQuantity, 
      increaseCartQuantity,
      decreaseCartQuantity, 
      removeFromCart,
      orderPlace,
      cartQuantity,
      cartItems
      }}>
    {children}
  </ShoppingCartContext.Provider>
}