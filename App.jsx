// import React from 'react'
// import Header from './Components/Header'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import { routes } from './Routes'
// import Cart from './Screens/Cart'
// import Index from './Screens/Index'
// import ShopItems from './Screens/ShopItems'
// import Footer from './Components/Footer'
// import Login from './Screens/Login'

// const App = () => {
//   return (
//     <div>

//       <BrowserRouter>
//         <Header />
//         <Routes>
//           {routes.map(({ path, screen }, index) => (
//             <Route key={index} path={path} element={screen} />
//           ))}
//           <Route path='/cart' element={<Cart />} />
//           <Route path='/account' element={<Login />} />
//           <Route path='*' element={"Page Not Found"} />
//           <Route path='/' element={<Index/>}>
//             <Route path='shopitems' element={<ShopItems/>}/>
//           </Route>
//         </Routes>
//         <Footer/>
//       </BrowserRouter>
//     </div>
//   )
// }

// export default App















import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Products from './Pages/Products';
import Products from './Screens/Products';
// import ProductDetails from './Pages/ProductDetails';
import ProductDetails from './Screens/ProductDetails';
// import CartPage from './Pages/CartPage';
import CartPage from './Screens/CartPage';
// import CartIcon from './Components/CartIcon';
import CartIcon from './Screens/CartIcon';
// import { CartProvider } from './Contexts/CartContext';
import { CartProvider } from './Screens/CartContext';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <CartIcon />
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='/product/:id' element={<ProductDetails />} />
          <Route path='/cart' element={<CartPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
