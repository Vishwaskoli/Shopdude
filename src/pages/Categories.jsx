import React, { useEffect, useState } from "react";
// import axios from "axios";
import { CardCategory } from "../components/Card";
import { useNavigate } from "react-router-dom";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  const navigate = useNavigate()

  useEffect(() => {

    const getData = async () => {
      // try {
      //   const response = await axios.get("/yonex_api.json");
      //   setApiData(response.data);

      //   // Extract one product per unique category
      //   const unique = {};
      //   response.data.forEach((item) => {
      //     if (!unique[item.category]) {
      //       unique[item.category] = item;
      //     }
      //   });
      //   setCategories(Object.values(unique));
      // } catch (err) {
      //   console.log(err);
      // }

      const res = await fetch('https://dummyjson.com/products/categories')
      const data = await res.json()

      setCategories(data)
    };
    getData();
  }, []);

  const sendData=(prod)=>{
    navigate(`/category/${prod.slug}`)
  }

  return (
    <div className="container my-5">
      <div className="row row-cols-2 row-cols-md-4 g-4">
        {categories.map((cat) => (
          <CardCategory onClick={()=>{sendData(cat)}} key={cat.slug} title={cat.name} />
        ))}
      </div>
    </div>
  );
}







































// import React from 'react'
// import badr from "../assets/category-r.webp"
// import str from "../assets/strings.webp"
// import shut from "../assets/shuttle.webp"
// import shoes from "../assets/shoes-c.webp"
// import bag from "../assets/bag-c.webp"
// import acc from "../assets/accesories.webp"
// import apar from "../assets/aparel.webp"
// import ball from "../assets/ball.webp"
// import club from "../assets/clubs.webp"
// import shaft from "../assets/shaft.webp"
// import gear from "../assets/gear.webp"
// import mens from "../assets/shoesmen.webp"
// import womens from "../assets/shoeswomen.webp"
// import boards from "../assets/boards.webp"
// import boot from "../assets/boots.webp"
// import glove from "../assets/Gloves.webp"
// import {CardCategory} from '../components/Card'

// export default function Categories() {
//    const[apiData,setApiData] = useState([])
  
//     useEffect(()=>{
//       const getData =async ()=>{
//         try{
//           const response =await axios.get("/yonex_api.json")
//           setApiData(response.data)
//           // setApiData(api)
//         }catch(err){
//           console.log(err)
//         }
//       }
//       getData()
//     },[])

//   return (
//     <div>
//         <div className="container my-5">
//             <div className="row row-cols-2 row-cols-md-4 g-4 ">
//                 <CardCategory img={badr} title="RACKET"/>
//                 {/* <CardCategory img={str} title="STRINGS"/>
//                 <CardCategory img={shut} title="SHUTTLE"/>
//                 <CardCategory img={shoes} title="INDOOR SHOES"/>
//                 <CardCategory img={bag} title="BAGS"/>
//                 <CardCategory img={acc} title="ACCESORIES"/>
//                 <CardCategory img={apar} title="APPAREL"/>
//                 <CardCategory img={ball} title="BALL"/>
//                 <CardCategory img={club} title="CLUBS"/>
//                 <CardCategory img={shaft} title="SHAFTS"/>
//                 <CardCategory img={gear} title="GEAR"/>
//                 <CardCategory img={mens} title="MEN'S SHOES"/>
//                 <CardCategory img={womens} title="WOMEN'S SHOES"/>
//                 <CardCategory img={boards} title="BOARDS"/>
//                 <CardCategory img={boot} title="BOOTS AND BINDING"/>
//                 <CardCategory img={glove} title="GLOVES"/> */}
         
//                {
//                          apiData.map((prod)=>{
//                            return(<div className="">
//                              <CardProduct img={prod.image} price={(prod.price * 100 *75).toFixed(2)} title={prod.title}/>
//                              </div>
//                            )
//                          })
//                        }
//             </div>
//         </div>
//     </div>
//   )
// }
