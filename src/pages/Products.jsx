import React, { useEffect, useState } from 'react'
import racket from "../assets/nanoflare.webp"
import shoe from "../assets/65z.webp"
import bag from "../assets/bag.webp"
import img from "../assets/racket.webp"
import {CardProduct} from '../components/Card'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addtocart } from '../redux/slice'
// import api from "../../public/yonex_api.json"

export default function Products() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const[apiData,setApiData] = useState([])

 const getData =async ()=>{
      // try{
      //   const response = await fetch("https://dummyjson.com/products")
      //   setApiData(response.json().data.Products)
      //   // setApiData(api)
      // }catch(err){
      //   console.log(err)
      // }
      const res = await fetch("https://dummyjson.com/products?limit=52")

      const data = await res.json()

      setApiData(data.products)
    }
  useEffect(()=>{
    getData()}
  ,[])

  //sort  low-high
  const sortLowToHigh = () => {
    // Create a new sorted array to avoid mutating state directly
    const sorted = [...apiData].sort((a, b) => a.price - b.price);
    setApiData(sorted);
  };

  //sort high-low
  const sortHightoLow = () => {
    // Create a new sorted array to avoid mutating state directly
    const sorted = [...apiData].sort((a, b) => b.price - a.price);
    setApiData(sorted);
  };

  //open detailed page
  const sendData = (prod)=>{
    navigate(`/detailedpage/${prod.id}`)
  }

  // redux 

  const sendProductData=(prop)=>{
      dispatch(addtocart(prop))
  }

  return (
    <div>
        <div className="container my-5">

          <div class="dropdown mb-5">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Sort By:
  </button>
  <ul class="dropdown-menu">
    <li><button class="dropdown-item" type="button" onClick={sortLowToHigh}>Price : low to high</button></li>
    <li><button class="dropdown-item" type="button" onClick={sortHightoLow}>Price : high to low</button></li>
  </ul>
</div>
              
                  <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4">
                    
        {/* <CardProduct img={shoe} price={499} title="65Z Men's" />
        <CardProduct img={racket} price={699} title="Nanoflare 1000 ZZ" />
        <CardProduct img={bag} price={399} title="Tour Kitbag" />
        <CardProduct img={img} price={499} title="Astrox 3" /> */}

        {
          apiData.map((props)=>{
            return(
                
                    <div className="col">
          <div className="card h-100 bg-success-subtle"  style={{cursor:"pointer"}}>
            <img src={props.thumbnail} className="card-img-top img-fluid"  alt="..." onClick={()=>{sendData(props)}}  />
            <div className="card-body">
              <h5 className="card-title text-truncate">{props.title}</h5>
              <div className="h2 fs-2 text-primary my-1">${props.price}</div>
              <button className="btn btn-dark" onClick={()=>{sendProductData(props)}}>Add to Cart</button>
            </div>
          </div>
        </div>
                
            )
          })
        }
        
      </div>
      
              
            </div>
    </div>
  )
}
