import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default function Showdata() {
    const [mydata, setMyData] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        let url = 'http://localhost:5000/products'
        fetch(url).then((res) => {
            return res.json()
        }).then((data) => {
            setMyData(data)
        }).then((error) => {
            console.log(error)
        })
    }, [])

    function handleDelete(id) {
        let url = 'http://localhost:5000/products/' + id
        fetch(url, {
            method: "DELETE"
        }).then((res) => {
            if (res.ok) {
                alert('product is removed successfully..')
            }
        }).then((data) => {
            window.location.reload()
        }).catch((error) => {
            console.log(error)
        })
    }
    function handleEdit(id) {
        navigate('/edit/' + id)
    }
    return (
        <>
            <div className="container">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Product id</th>
                            <th>Product Name</th>
                            <th>Total_price</th>
                            <th>Discount</th>
                            <th>Qty.</th>
                            <th>Image</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mydata.map((data, index) => {
                            return (
                                <tr key={index}>
                                    <td>{data.id}</td>
                                    <td>{data.prod_name}</td>
                                    <td>{data.total_price}</td>
                                    <td>{data.discount}</td>
                                    <td>{data.qty}</td>
                                    <td>
                                        <img src={data.path} style={{ height: "50px", width: "50px" }} />
                                    </td>
                                    <td>{data.description}</td>
                                    <td>
                                        <div onClick={() => { handleEdit(data.id) }} className="btn btn-outline-primary ms-2">Edit</div>
                                        <div onClick={() => { handleDelete(data.id) }} className="btn btn-outline-danger ms-2">Delete</div>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>

    )
}