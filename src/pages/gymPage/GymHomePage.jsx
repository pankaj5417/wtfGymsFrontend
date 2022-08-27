import { GymPoster } from "../../components/GymPoster/GymPoster"
import { GymType } from "../../components/GymType/GymType"
import LoginModal from "../../components/loginModal/LoginModal"
import { Navbar } from "../../components/navbar/Navbar"

export const GymHomePage=()=>{
    return (
        <>
        <Navbar/>
        <GymPoster/>
      <LoginModal/>
      {/* <Sidebar/> */}
      <GymType/>
        </>
    )
}