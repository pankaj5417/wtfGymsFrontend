import { useEffect } from "react";
import { useState } from "react";
import "./gymType.css";
export const GymType = () => {

    const [gymData,setgymData]=useState()

    useEffect(()=>{
   getGymData()
   getGymPlan()
    },[])

    async function getGymData(){
      const res=await fetch("https://devapi.wtfup.me/gym/nearestgym?lat=30.325488815850512&long=78.0042384802231")
      const data=await res.json()
      console.log(data)
      setgymData(data.data)
    }

    async function getGymPlan(){
        const res=await fetch("https://wtfup.me/gym_details/WTF-The-Fitness-Point-Gym/gym/plan",{
            method:"POST",
        
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify("GLKdIYAWDS2Q8")
            
        })
        const data=await res.json()
        console.log("planData",data)
        
      }
//https://wtfup.me/gym_details/WTF-The-Fitness-Point-Gym/gym/plan
  return (
    <>
      <div className="gymTypeContainer">
        <div className="searchContainer">
          <i className="fa fa-search searchIcon fa-lg" aria-hidden="true"></i>

          <input className="searchGyms" type="text" placeholder="Search gym name here" />

          <button className="clear-button">Clear</button>
        </div>
        <div className="gymTypeBottomContainer">
          <div className="gymFilters">
            <h1>Filters</h1>
            <h2>Location</h2>
            <div className="searchFilter">
              <i
                className="fa fa-search searchIcon fa-lg"
                aria-hidden="true"
              ></i>

              <input className="locationTextBox" type="text" placeholder="Enter Location" />

            </div>
            <h2>Price</h2>
            <input className="PriceTextBox" type="text" placeholder="MIN"/>&nbsp;&nbsp;
            <input className="PriceTextBox" type="text" placeholder="MAX"/>
            <h2>Cities</h2>
            <select className="selectCity" name="" id="">
                <option value="delhi">Delhi</option>
                <option value="delhi">Mumbai</option>

            </select>

          </div>
          <div className="gymResults">
            {
                gymData?.map(data=>(
                    <>
                    <div className="gymResultsContainer">
                        <div className="gymFreeGif">
                            <img className="freeGifImg" src="https://wtfup.me/assets/assets/gif/free.gif" alt="gymFreeGif" />

                        </div>
                        <div className="gymInfo">
                    <h2>{data.gym_name}</h2>
                    <p>{data.rating}</p>
                    <p>{data.address1+","+data.address2}</p>
                    <p>{data.duration_text+""+data.distance_text}</p>

                    <div className="gymPrice">
                        <h2>{"3000 for 3 months"}</h2>
                        <button className="bookNow-button">Book Now</button>

                    </div>

                        </div>

                    </div>
                    </>
                )

                )
            }
          </div>
        </div>
      </div>
    </>
  );
};
