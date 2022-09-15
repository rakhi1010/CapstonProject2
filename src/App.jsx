import { Container } from 'react-bootstrap'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import { ShoppingCartProvider } from './context/ShoppingCartContext'
import CategoryItem from './pages/CategoryItem'
import Home from './pages/Home'
import ShoppingCart from './pages/ShoppingCart'


function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className='mb-4'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/ShoppingCart' element={<ShoppingCart />} />
          <Route path='/category/:name' element={<CategoryItem />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  )
}

export default App
