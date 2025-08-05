import React, { useEffect, useState } from 'react'
import { CardProduct } from '../components/Card'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addtocart } from '../redux/slice'

export default function CategoryDetail() {
    const dispatch = useDispatch()

    const navigate = useNavigate()

    const {slug} = useParams()

    const[categoryData,setCategoryData] = useState([])

    const getdata = async ()=> {
        const res = await fetch(`https://dummyjson.com/products/category/${slug}`);
        const data = await res.json()
        setCategoryData(data.products)
    }

    useEffect(()=>{
        getdata()
    },[])

    const sendData = (props)=>{
        navigate(`/detailedpage/${props.id}`)
    }
  return (
    <div>
      <div className="container my-5">
                    
                        <div className="row row-cols-2 row-cols-md-4 g-4">
              {
                categoryData.map((prod)=>{
                  return(
                    <CardProduct onClick={()=>{sendData(prod)}} key={prod.id} img={prod.thumbnail} price={((prod.price)*10).toFixed(2)} title={prod.title}/>
                  )
                })
              }
              
            </div>
            
                    
                  </div>
    </div>
  )
}
