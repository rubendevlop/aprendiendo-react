import React, {Fragment, useState} from 'react'
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';
import Carrito from './components/Carrito';

function App() {

  //Listado de productos
  const [ productos, guardarProductos ] = useState([
    { id: 1, nombre:'Camisa ReactJS', precio: 50 },
    { id: 2, nombre:'Camisa ReactJS2', precio: 40 },
    { id: 3, nombre:'Camisa ReactJS3', precio: 30 },
    { id: 4, nombre:'Camisa ReactJS4', precio: 20 },
  ]);

  //Stat para un carrito de compra

  const [ carrito, agregarProductos ] = useState( [] );


  // obtener fecha
  const fecha = new Date().getFullYear();

  


  return (
    <Fragment>
      <Header
        titulo='Tienda virtual'
      />

      <h1>Lista de Productos</h1>
      {productos.map(producto => (
        <Producto
              key={producto.id}
              producto={producto}
              productos={productos}
              carrito={carrito}
              agregarProductos={agregarProductos}
        />
      ))}

      <Carrito
        carrito={carrito}
        agregarProductos={agregarProductos}
      />

      <Footer
      fecha={fecha}
      />
    </Fragment>
  );
}

export default App;
