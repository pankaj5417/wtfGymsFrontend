import { useEffect } from "react";
import { useState } from "react";
import { debounce } from "lodash";

import "./gymType.css";
export const GymType = () => {

    const [gymData,setgymData]=useState()

    const handleChange = (e) => {
        const inputVal = e.target.value;
    
        // setCity(inputVal);
        debounceGymData(inputVal);
      };
    //   async function getWeather(cityname) {
    //     try {
    //       const res = await axios.get(
    //         `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=metric&appid=1fe85b3ad8fa502e23bf446831171936`
    //       );
    //       console.log("weatherRes",res);
    //       setWeatherData(await res.data);
    //     } catch (err) {
    //       console.log(err);
    //     }
    //   }
    
    //   useEffect(() => {
    //     weatherData && getWeather2();
    //   }, [weatherData]);
    
      const debounceGymData = debounce((query) => {
        getGymData2(query);
      }, 1000);

    useEffect(()=>{
   getGymData()
   getGymPlan()
    },[])

    async function getGymData(){
      const res=await fetch("https://devapi.wtfup.me/gym/nearestgym?lat=30.325488815850512&long=78.0042384802231")
      const data=await res.json()
      console.log('gym1',data)
      setgymData(data.data)
    }

    async function getGymData2(gymname){
        const res=await fetch(`https://devapi.wtfup.me/gym/places?`)
        const data=await res.json()
        console.log("gym2",data)
        setgymData(data.data)
      }

    async function getGymPlan(){
        const res=await fetch("https://wtfup.me/gym_details/WTF-The-Fitness-Point-Gym/gym/plan",{
            method:"POST",
            
            headers:{
                "Access-Control-Allow-Origin": "*",
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
          <input className="searchGyms" type="text" placeholder="Search gym name here" onChange={handleChange}/>&nbsp;&nbsp;
          <i class="fa fa-map-marker locationIcon" aria-hidden="true"></i>&nbsp;&nbsp;
          
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
