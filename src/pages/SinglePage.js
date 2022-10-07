import React from 'react'
import { useLocation } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { SelectedProduct } from "../redux/action/productAction"

function SinglePage() {
    const location = useLocation()
    const product = useSelector(state => state)
    console.log(product)
    const dispatch = useDispatch()
    // console.log(location)
    let data = location.state

    return (
        <div>
            <h1>{data.title}</h1>
            <h2>{data.price}</h2>
            <h2>{data.category}</h2>
            <button onClick={() => dispatch(SelectedProduct(data))} className='border-black border-2 bg-blue-200 p-2 rounded hover:bg-blue-400 duration-300'>add Cart</button>
        </div>
    )
}

export default SinglePage