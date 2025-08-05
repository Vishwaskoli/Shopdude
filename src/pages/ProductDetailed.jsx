import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ProductDetailed() {
    const {id} = useParams()

    const [api,setApi] = useState({})

    const fetchData = async ()=>{
        const res = await fetch(`https://dummyjson.com/products/${id}`);

        const data = await res.json()
        setApi(data)
    }


    useEffect(()=>{
        fetchData()
    },[])
  return (
    <div>
      <div className="container my-5 border border-black rounded">
      <div className="row bg-light bg-success-subtle p-4 rounded shadow-sm">
        
        {/* Product Image */}
        <div className="col-md-6 text-center mb-4 mb-md-0">
          <img
            src={api.thumbnail}
            alt="Product"
            className="img-fluid rounded"
          />
        </div>

        {/* Product Info */}
        <div className="col-md-6">
          <h2 className="fw-bold mb-3">{api.title}</h2>
          <h4 className="text-success mb-3">₹{((api.price)*10).toFixed(2)}</h4>
          <p className="text-muted">
            {api.description}
          </p>

          <ul className="list-unstyled my-3">
            <li><strong>Brand:</strong> {api.brand}</li>
            <li><strong>Pieces left:</strong> {api.stock}</li>
            <li><strong>Rating:</strong> {api.rating}/5</li>
          </ul>

          <div className="d-flex gap-2 mt-4">
            <button className="btn btn-primary">Add to Cart</button>
            <button className="btn btn-outline-success">Buy now</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
