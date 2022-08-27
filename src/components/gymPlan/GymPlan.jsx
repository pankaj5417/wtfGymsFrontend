import { Link } from "react-router-dom";
import "./gymPlan.css";
export const GymPlan = ({ planData, gymData }) => {
  console.log("check", planData, gymData);

  function handleColor(index){

    if(index%4===1){
        return '#1DE9B6'
    }else if(index%4===2){
        return '#9C27B0'
    }
    else if(index%4===3){
        return '#C62828'
    }
    else if(index%4===0){
        return '#1565C0'
    }
    
  }
  return (
    <>
    <Link to="/" style={{textDecoration:"none"}}>
          <h3>{"< Back"}</h3>
    </Link>
        <div className="gymInfoWrapper">
            <div className="gymName">
            <h1>{gymData?.gym_name}</h1>
          <h2>{gymData.address1 + "," + gymData.address2}</h2>
            </div>
            <div className="gymRating">

            </div>
        </div>
      <div className="gymPlan">
        <div className="gymPlanDesc">

          
          <h2>Description</h2>
          <p>{gymData?.description}</p>
          <h2>Facilities</h2>
          <div className="benefits">
            {gymData?.benefits.map((d) => (
              <>
                <p>{d.name}</p>
              </>
            ))}
          </div>
          <h2>Why to choose WTF</h2>
        </div>
        <div className="gymPlanMembership">
          <h1 style={{ textAlign: "center" }}>Choose MemberShip</h1>
          {planData?.map((plan, index) => (
            <>
              <div style={{backgroundColor:`${handleColor(index+1)}`}} className="planMembershipContainer">
                <div className="planPriceWrapper">
                <h3>PLAN{index + 1}</h3>
                <p className="planPrice">₹&nbsp;{plan.price}</p>

                </div>
                <div className="planWrapper">
                <img
                  className="planWtf"
                  src="https://wtfup.me/assets/assets/logo.png"
                  alt="wtf"
                />{" "}
                <h3>{plan.plan_name}</h3>

                </div>
                {plan.description.replace(/(<([^>]+)>)/gi, " ")}
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};
