import React, { useState } from 'react';
import './App.css';
// import ContextProvider from './Context/context'


export default function Cart() {
    const [cart, setCart] = useState([])
    const [products, setproducts] = useState([
        {
            id: '01',
            title: "Jacket 01",
            price: "100",
            qty: 1,
            description: "description 01",
            Image: "http://cdn.shopify.com/s/files/1/0023/9901/0881/products/K-Hometown-Down-Jacket-Sulpher-Spring_1024x1024.jpg?v=1598641607"
        },
        {
            id: '02',
            title: "Jacket 02",
            price: "200",
            qty: 1,
            description: "description 02",
            Image: "http://cdn.shopify.com/s/files/1/0023/9901/0881/products/K-Hometown-Down-Jacket-Sulpher-Spring_1024x1024.jpg?v=1598641607"
        },
        {
            id: '03',
            title: "Jacket 03",
            price: "300",
            qty: 1,
            description: "description 03",
            Image: "http://cdn.shopify.com/s/files/1/0023/9901/0881/products/K-Hometown-Down-Jacket-Sulpher-Spring_1024x1024.jpg?v=1598641607"
        },
    ])

    function AddToCart(value) {
        var result = cart.find((findCart) => findCart.id === value.id)
        if (result === undefined) {
            // setCart([...cart, value]) dono kar saktay hain 
            setCart(pre => {
                pre.push(value)
                pre = [].concat(pre)
                return pre
            })

            // setCart(pre => {
            //     return pre.concat([value])
            // })
        } else {
            alert('cart already added')
        }
    }

    function increament(value) {
        var match = cart.find((cart) => cart.qty === value.qty)
        // var qty = increament.qty

        if (match) {
            setCart(
                cart.map((cart) =>
                    cart.id === value.id ? { ...match, qty: match.qty + 1 } : cart
                )
            )
        }



    }
    function decreament(value) {
        var match = cart.find((cart) => cart.qty === value.qty)
        // var qty = increament.qty

        if (match.qty === 1) {
            setCart(
                cart.map((cart) =>
                    cart.id === value.id ? { ...match, qty: match.qty - 1 } : cart
                )
            )
        }
    }






    return (
        <>
            <div style={{ display: 'flex', }}>

                {products.map((value, index) => (
                    <div key={index} >
                        <div style={{ width: "300px", border: "2px splid black", display: "inline-block" }}>
                            <img style={{ width: "100%" }} src={value.Image} alt={value.Image} />
                            <p id="title">{value.title}</p>
                            <p id="description">{value.description}</p>
                            <p id="price">Rs :{value.price}/=</p>
                            <button onClick={() => AddToCart(value)}>add to Cart</button>
                        </div>
                    </div>
                ))}

            </div>
            <div style={{ display: 'flex', }}>
                {cart.map((value, i) => {
                    return (
                        <div key={i} style={{ display: 'flex' }}>
                            <div style={{ width: "300px", border: "2px splid black", display: "inline-block" }}>
                                <img style={{ width: "100%" }} src={value.Image} alt={value.Image} />
                                <p id="title">{value.title}</p>
                                <p id="description">{value.description}</p>
                                <p id="price">Rs :{value.price}/=</p>
                                <div>
                                    <button onClick={() => decreament(value)}>-</button>
                                    <span>{value.qty}</span>
                                    <button onClick={() => increament(value)}>+</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>


        </>
    );
}

