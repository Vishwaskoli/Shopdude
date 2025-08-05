import React from 'react'

export function CardProduct(props) {
  return (
    <div>
      <div className="col">
          <div className="card h-100 bg-success-subtle" onClick={()=>{}} style={{cursor:"pointer"}}>
            <img src={props.img} className="card-img-top img-fluid"  alt="..."  />
            <div className="card-body">
              <h5 className="card-title text-truncate">{props.title}</h5>
              <div className="h2 fs-2 text-primary my-1">₹{props.price}</div>
              <button className="btn btn-dark">Add to Cart</button>
            </div>
          </div>
        </div>
    </div>
  )
}


export function CardCategory(props) {


  return (
    <div>
      <div className="col">
                          <div className="card bg-secondary-subtle" style={{cursor:"pointer"}} onClick={props.onClick}>
                              <div className="card-body">
                                  <h3 className="card-title text-center fs-4">{props.title}</h3>
                                  <p className='text-primary text-center'>view {props.title}</p>
                              </div>
                          </div>
                      </div>         
    </div>
  )
}
