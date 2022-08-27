import { useState } from 'react';
import { useEffect } from 'react';
import {useLocation} from 'react-router-dom';
import { GymPlan } from '../../components/gymPlan/GymPlan';
import './planPage.css'

export const PlanPage=()=>{
    const location = useLocation();
    const [planData,setPlanData]=useState()

    useEffect(()=>{
   getGymPlan()
    },[])

    async function getGymPlan() {
        const res = await fetch(
          `https://api.wtfup.me/plan?gym_id=${location.state?.user_id}`,
          {
            method: "GET",
    
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
            },
            
          }
        );
        const datas = await res.json();
        console.log("planData", datas.data);
        setPlanData(datas.data)
      }
      console.log('check2',planData)
    return (
        <>
        <GymPlan planData={planData} gymData={location.state}/>
        
        </>
    )
}