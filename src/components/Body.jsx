import { useEffect, useState } from "react";
import Shimmer from "./Shimmer"
function Body(){
    let [data,setdata]=useState();

    let img_link="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
        function getdata(){
            fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
            .then((res)=>res.json())
            .then((val)=>setdata(val.data.cards[4].card.card.gridElements.infoWithStyle.restaurants))
           
        }

        useEffect(()=>getdata(),[]);

    return ( data === undefined?<Shimmer/>:<div className="bodyContainer">
        <div className="mainContainer">
            <input></input>
            <button>Search</button>
        </div>
        <div className="secondaryContainer">
            {
                data.map((x)=><div className="card">
                    <img className="image"src={img_link+x.info.cloudinaryImageId}/>
                    <div>{x.info.name}</div>
                    <div>{x.info.avgRating}</div>
                    <div>{x.info.cuisines.join(', ')}</div>
                    <div>{x.info.areaName}</div>
                </div>)
           
                
            }
        </div>
       
    </div>)
    
}

export default Body;