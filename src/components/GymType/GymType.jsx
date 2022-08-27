import { useEffect } from "react";
import { useState } from "react";
import { debounce } from "lodash";

import "./gymType.css";
export const GymType = () => {
  const [gymData, setgymData] = useState();
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

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
    //   "https://devapi.wtfup.me/gym/nearestgym?lat=28.596923663299105&long=77.32872149880232&type=gym"
      "https://api.wtfup.me/gym/nearestgym?lat=28.596923663299105&long=77.32872149880232&type=gym"
    );
    const data = await res.json();
    console.log("gym1", data);
    setgymData(data.data);
  }

  async function getGymData2(gymname) {
    const res = await fetch(
      `https://api.wtfup.me/gym/nearestgym?lat=28.596923663299105&long=77.32872149880232&gym_name=${gymname}`
    //   `https://devapi.wtfup.me/gym/nearestgym?lat=30.325488815850512&long=78.0042384802231&city=${gymname}`
    );
    const data = await res.json();
    console.log("gym2", data.data);
    setgymData(data.data.filter(d=>d.gym_name.toLocaleLowerCase().includes(gymname)));
  }
/*
  async function getGymPlan() {
    const res = await fetch(
      "https://wtfup.me/gym_details/WTF-The-Fitness-Point-Gym/gym/plan",
      {
        method: "POST",

        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify("GLKdIYAWDS2Q8"),
      }
    );
    const data = await res.json();
    console.log("planData", data);
  }
  */

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
            <select className="selectCity" name="" id="">
              <option value="delhi">Delhi</option>
              <option value="delhi">Mumbai</option>
            </select>
          </div>
          <div className="gymResults">
            {gymData?.map((data) => (
              <>
                <div className="gymResultsContainer">
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
                      <h2>{"₹3000 for 3 months"}</h2>
                      <button className="bookNow-button">Book Now</button>
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
