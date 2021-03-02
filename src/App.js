import { useState } from 'react';
import './App.css';

function App() {
  const [cart, setCart] = useState([])
  const [products, setproducts] = useState([
    {
      title: "Jacket 01",
      price: "100",
      description: "",
      Image: "http://cdn.shopify.com/s/files/1/0023/9901/0881/products/K-Hometown-Down-Jacket-Sulpher-Spring_1024x1024.jpg?v=1598641607"
    },
    {
      title: "Jacket 02",
      price: "200",
      description: "description 01",
      Image: "http://cdn.shopify.com/s/files/1/0023/9901/0881/products/K-Hometown-Down-Jacket-Sulpher-Spring_1024x1024.jpg?v=1598641607"
    },
    {
      title: "Jacket 03",
      price: "300",
      description: "description 03",
      Image: "http://cdn.shopify.com/s/files/1/0023/9901/0881/products/K-Hometown-Down-Jacket-Sulpher-Spring_1024x1024.jpg?v=1598641607"
    },
  ])

  function AddToCart(index) {

    var a = products[index]
  
  }

  // function addQty(index) {
  //   var prevCart = [...cart];
  //   prevCart[index].quantity += 5;
  //   setCart(prevCart);

  // }


  return (
    <>
      {products.map((value, index) => (
        <div key={index} style={{ display: 'flex', }}>
          <div style={{ width: "300px", border: "2px splid black", display: "inline-block" }}>
            <img style={{ width: "100%" }} src={value.Image} />
            <p id="title">{value.title}</p>
            <p id="description">{value.description}</p>
            <p id="price">Rs :{value.price}/=</p>
            <button onClick={() => AddToCart(index)}>add to Cart</button>
          </div>
        </div>
      ))}

      <div>

      </div>
    </>
  );
}

export default App;
