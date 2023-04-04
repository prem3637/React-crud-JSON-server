import React, { useState } from 'react'
import { Link } from 'react-router-dom'
export default function Create_product() {
    const [prod_name, setProd_name] = useState('')
    const [total_price, setTotal_price] = useState('')
    const [discount, setDiscount] = useState('')
    const [Qty, setQty] = useState('')
    const [path, setPath] = useState('')
    const [description, setDescription] = useState('')
    function handleSubmit(e) {
        e.preventDefault()
        let url = 'http://localhost:5000/products'
        let mydata = { prod_name, total_price, discount, Qty, path, description }
        let promise = fetch(url, {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(mydata)
        })
        promise.then((res) => {
            if (res.ok) {
                alert('Product has been Added...')
            }
        }).then((data) => {
            setProd_name('')
            setPath('')
            setDiscount('')
            setQty('')
            setTotal_price('')
            setDescription('')
        }).catch((error) => {
            console.log(error)
        })
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-sm-3"></div>
                    <div className="col-sm-6 p-3">
                        <div className="card">
                            <div className="card-title p-2">
                                <h1 className="text-success text-center">Add Product</h1>
                                <Link to='/show'>
                                    <div className="btn btn-outline-warning">Show Products</div>
                                </Link>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <label>Product Name:</label>
                                    <input type="text" className="form-control" placeholder='Enter Product Name....'
                                        onChange={(e) => { setProd_name(e.target.value) }} value={prod_name} />

                                    <label>Total_price:</label>
                                    <input type="number" className="form-control" placeholder='total price....'
                                        onChange={(e) => { setTotal_price(e.target.value) }} value={total_price} />

                                    <label>Discount_price:</label>
                                    <input type="number" className="form-control" placeholder='discount price...'
                                        onChange={(e) => { setDiscount(e.target.value) }} value={discount} />

                                    <label>Qty:</label>
                                    <input type="number" className="form-control" placeholder='Enter Product Name....'
                                        onChange={(e) => { setQty(e.target.value) }} value={Qty} />

                                    <label>image path:</label>
                                    <input type="text" className="form-control" placeholder='Enter image path here...'
                                        onChange={(e) => { setPath(e.target.value) }} value={path} />

                                    <label>Description :</label>
                                    <textarea className="form-control" onChange={(e) => { setDescription(e.target.value) }} value={description}></textarea>
                                    <br />
                                    <input type="submit" value="Add Product" className="btn btn-outline-success" />
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3"></div>
                </div>
            </div>
        </>
    )
}