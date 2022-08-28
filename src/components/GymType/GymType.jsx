import { useEffect } from "react";
import { useState } from "react";
import { debounce } from "lodash";

import "./gymType.css";
import { Link } from "react-router-dom";
export const GymType = () => {
  const [gymData, setgymData] = useState();
  // const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [cities,setCities]=useState()

  const handleCity=(e)=>{
  //  const {name,value}=e.target 
   
   getPlaces(e.target.value)
  }

  const handleChange = (e) => {
    const inputVal = e.target.value;

    debounceGymData(inputVal.toLocaleLowerCase());
  };

  const debounceGymData = debounce((query) => {
    getGymData2(query);
  }, 1000);

  useEffect(() => {
    getGymData();
    // getGymPlan();
  }, []);

  async function getGymData() {
    const res = await fetch(
    
      "https://api.wtfup.me/gym/nearestgym?lat=28.596923663299105&long=77.32872149880232&type=gym"
    );
    const data = await res.json();
    console.log("gym1", data);
    setgymData(data.data);
  }

  async function getGymData2(gymname) {
    const res = await fetch(
      `https://api.wtfup.me/gym/nearestgym?lat=28.596923663299105&long=77.32872149880232&gym_name=${gymname}`
   
    );
    const data = await res.json();
    console.log("gym2", data.data);
    setgymData(data.data.filter(d=>d.gym_name.toLocaleLowerCase().includes(gymname)));
  }
  useEffect(()=>{

  },[])
  async function searchByAddress(c){
    const res = await fetch(
      `https://api.wtfup.me/gym/nearestgym?lat=28.596923663299105&long=77.32872149880232&address1=${c.address1}&address2=${c.address2}`
   
    );
    const data = await res.json();
    console.log("searchData", data.data);
    setgymData(data.data?.filter(d=>(d.address1).toLocaleLowerCase().includes(c.address1.toLocaleLowerCase())));


  }

  async function getPlaces(city) {
    const res = await fetch(
    
      `https://api.wtfup.me/gym/nearestgym?lat=28.596923663299105&long=77.32872149880232&city=${city}`
    );
    const cityData = await res.json();
    console.log("cityData", cityData.data);
    setCities(cityData.data);
    setgymData(cityData.data)
  }
  
  

  return (
    <>
      <div className="gymTypeContainer">
        <div className="searchContainer">
          <i className="fa fa-search searchIcon fa-lg" aria-hidden="true"></i>
          <input
            className="searchGyms"
            type="text"
            placeholder="Search gym name here"
            onChange={handleChange}
          />
          &nbsp;&nbsp;
          <i class="fa fa-map-marker locationIcon" aria-hidden="true"></i>
          &nbsp;&nbsp;
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

              <input
                className="locationTextBox"
                type="text"
                placeholder="Enter Location"
              />
            </div>
            <h2>Price</h2>
            <input className="PriceTextBox" type="text" placeholder="MIN" />
            &nbsp;&nbsp;
            <input className="PriceTextBox" type="text" placeholder="MAX" />
            <h2>Cities</h2>
            <select className="selectCity" name="city" id="" onChange={handleCity}>
              <option  value="newdelhi">New Delhi</option>
              <option value="noida">Noida</option>
              <option value="delhi">Delhi</option>
              <option value="ghaziabad">Ghaziabad</option>
            </select>
            <h3>Locations</h3>

           {cities&& <div className="locationFilter">
            {cities?.map((c,index)=>(
              <>
              
              <p key={index} onClick={()=>searchByAddress(c)}>{c.address1+","+c.address2}</p>
             
              <hr />
              </>
            ))}
            </div>
            }
          </div>
          <div className="gymResults">
            {gymData?.map((data,index) => (
              <>
                <div key={index} className="gymResultsContainer">
                  <div className="gymFreeGif">
                    <img
                      className="freeGifImg"
                      src="https://wtfup.me/assets/assets/gif/free.gif"
                      alt="gymFreeGif"
                    />
                  </div>
                  <div className="gymInfo">
                    <h2>{data.gym_name}</h2>
                    <p>
                      {" "}
                      {[...Array(5)].map((star, index) => {
                        index += 1;
                        return (
                          <button
                            type="button"
                            key={index}
                            className={
                              index <= (hover || data.rating) ? "on" : "off"
                            }
                            // onClick={() => setRating(index)}
                            // onMouseEnter={() => setHover(index)}
                            // onMouseLeave={() => setHover(rating)}
                          >
                            <span className="star">&#9733;</span>
                          </button>
                        );
                      })}
                    </p>
                    <p style={{ fontSize: "23px" }}>
                      {data.address1 + "," + data.address2}
                    </p>
                    <p>
                      <i class="fa fa-paper-plane sendIcon" aria-hidden="true">
                        &nbsp;
                      </i>
                      {data.duration_text + " away | " + data.distance_text}
                    </p>

                    <div className="gymPrice">
                      <h3 style={{color:"#FBC02D",fontWeight:"700"}}>{data.plan_price?"₹ "+data.plan_price+" for 3 months":""}</h3>
                      <Link to="/planPage" state={data}>
                      <button className="bookNow-button">Book Now</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
