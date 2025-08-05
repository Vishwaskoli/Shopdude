import React, { useState } from 'react'
// import img from "../assets/racket.webp"
// import racket from "../assets/nanoflare.webp"
// import shoe from "../assets/65z.webp"
// import bag from "../assets/bag.webp"
import court from "../assets/header.webp"
import {CardProduct,} from '../components/Card'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const naviagte = useNavigate()
  const[apiData,setApiData] = useState([])
  
   const getData =async ()=>{
        // try{
        //   const response = await fetch("https://dummyjson.com/products")
        //   setApiData(response.json().data.Products)
        //   // setApiData(api)
        // }catch(err){
        //   console.log(err)
        // }
        const res = await fetch("https://dummyjson.com/products?limit=8")
  
        const data = await res.json()
  
        setApiData(data.products)
        console.log(getData)
      }
    useEffect(()=>{
      getData()}
    ,[])

    const sendData = (props)=>{
      naviagte(`/detailedpage/${props.id}`)
    }
  return (
    <div>
      <div className="container-fluid p-0">
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item" data-bs-interval="3000">
      <img src={court} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item" data-bs-interval="3000">
      <img src="https://www.yonex.com/media/scandiweb/slider/2/8/2880x1120_vcore_key_visual.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item active" data-bs-interval="3000">
      <img src="https://www.yonex.com/media/scandiweb/slider/a/s/astrox88_sd_key_visual_2880x1120_.jpg" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

      </div>
      <div className="container my-5">
        <div>
            <div className="row row-cols-2 row-cols-md-4 g-4">
        {
           apiData.map((prod)=>{
             return(
               <CardProduct onClick={()=>{sendData(prod)}} img={prod.thumbnail} price={((prod.price)*10).toFixed(2)} title={prod.title}/>
             )
           })
         }
          
</div>

        </div>
      </div>

    </div>
  )
}
