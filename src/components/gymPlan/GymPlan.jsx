import './gymPlan.css'
export const GymPlan=({planData,gymData})=>{
    console.log("check",planData,gymData)
    return (
        <>
        <div className="gymPlan">
            <div className="gymPlanDesc">
                <h3>{"< Back"}</h3>
                
                <h1>{gymData?.gym_name}</h1>
                <h2>{gymData.address1+","+gymData.address2}</h2>
                <h2>Description</h2>
                <p>{gymData?.description}</p>
                <h2>Facilities</h2>
                <div className="benefits">
                {gymData?.benefits.map(d=>(
                    <>
                    
                        <p>{d.name}</p>
                    
                    </>
                ))}
                </div>
                <h2>Why to choose WTF</h2>

            </div>
            <div className="gymPlanMembership">
                <h1>Choose MemberShip</h1>
                {planData?.map((plan)=>(
                    <>
                    <div className="planMembershipContainer">
                    <h3>{plan.plan_name}</h3>
                    {
                       
                    (plan.description.replace(/(<([^>]+)>)/ig, ' '))}

                    </div>
                    </>
                ))}
            </div>

        </div>
        
        </>
    )
}