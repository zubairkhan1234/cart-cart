import React, { useState } from 'react';
import './App.css';
// import ContextProvider from './Context/context'


function App() {
  const [cart, setCart] = useState([
    {
      title: "Jacket 01",
      price: "100",
      description: "",
      Image: "http://cdn.shopify.com/s/files/1/0023/9901/0881/products/K-Hometown-Down-Jacket-Sulpher-Spring_1024x1024.jpg?v=1598641607"
    },
  ])
  const [products] = useState([
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


    var abc = cart.find(function (element) {
      return element
    })
    if (abc.title === a.title) {
      alert('already added')
      
    } else {
      setCart(preval => {
        return preval.concat(a)
      })
    }
    
    // console.log(abc)
    // setCart(preval => {
    //   return preval.concat(abc)
    // })






    // var i;

    // for (i = 0; i < cart.length; i++) {
    //   console.log(cart[i])
    //  if (cart[i] === a) {
    //       alert('cart already added')
    //       break ;
    //     } else {
    //       setCart(preval => {
    //         return preval.concat(a)
    //       })
    //     }
    // }

    // if(abc !== a ) {
    //   setCart(preval => {
    //     return preval.concat(abc)
    //   })
    // }



    // console.log("cart ", cart)



  }



  console.log(cart)
  // function addQty(index) {
  //   var prevCart = [...cart];
  //   prevCart[index].quantity += 5;
  //   setCart(prevCart);

  // }


  return (
    <>
      {/* <ContextProvider> */}
        {products.map((value, index) => (
          <div key={index} style={{ display: 'flex', }}>
            <div style={{ width: "300px", border: "2px splid black", display: "inline-block" }}>
              <img style={{ width: "100%" }} src={value.Image} alt={value.Image} />
              <p id="title">{value.title}</p>
              <p id="description">{value.description}</p>
              <p id="price">Rs :{value.price}/=</p>
              <button onClick={() => AddToCart(index)}>add to Cart</button>
            </div>
          </div>
        ))}

        <div>

        </div>
      {/* </ContextProvider> */}

    </>
  );
}

export default App;
