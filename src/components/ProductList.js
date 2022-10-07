import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from "../redux/action/productAction"
import axios from "axios"
import { Link } from "react-router-dom"

function ProductList() {

    const allproducts = useSelector((state) => state.allProducts);
    // console.log(allproducts)
    const { products } = allproducts
    console.log(products)
    const dispatch = useDispatch();


    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios
                .get("https://fakestoreapi.com/products")
                .catch((err) => {
                    console.log("Err: ", err);
                });
            dispatch(setProducts(response.data))
        };
        fetchProducts()
    }, [])

    return (
        <div className='grid grid-cols-3 mt-[100px]'>
            {
                products.map(product => {
                    return (

                        <div className="border-gray-400 cursor-pointer border-2 p-3 text-white bg-red-300 w-[300px] m-2 rounded-[8px]">
                            <Link state={product} to={`product/${product.id}`} className='w-full h-full'>
                                <h1>{product.title}</h1>
                            </Link>
                        </div>

                    )
                })
            }

        </div>
    )
}

export default ProductList