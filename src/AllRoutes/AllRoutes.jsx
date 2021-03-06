import {  Route, Routes } from "react-router-dom"

import { LearningForIndividuals } from "../Pages/Products/LearningForIndividuals"
import { Home } from "../Pages/Home/Home"
import { HomeWithUser } from "../Pages/HomeWithUser/HomeWithUser"
import { LearningForTeams } from "../Pages/Products/LearningForTeams"
import {DevelopmentsTeam} from "../Pages/Solutions/DevelopmentsTeam/DevelopmentsTeam"
import {Developers} from "../Pages/Solutions/Developers/Developers"
import {TeamPricing} from "../Pages/TeamPricing/Components/team"
import {IndividualPricing} from "../Pages/IndividualPricing/individuals"
import { Course } from "../Pages/Course/Course"
import { Checkout } from "../Pages/Checkout/Checkout"
import {Login} from "../Pages/Login/Login"
import {Register} from "../Pages/Register/Register"
import { Onboard } from "../Pages/Onboarding/Components/Onboard"

export const AllRoutes = ()=>{
    return(
        <Routes>

            <Route path="/" element={<Home/>}/>

            <Route path="/explore" element={<LearningForIndividuals/>}/>
            <Route path="/business-pricing" element={<TeamPricing/>}/>
            <Route path="/unlimited" element={<IndividualPricing/>}/>
            <Route path="/learn" element={<HomeWithUser/>}/>
            <Route path="/upskill" element={<LearningForTeams/>}/>
            <Route path="/business" element={<DevelopmentsTeam/>}/>
            <Route path='/login'element={<Login/>}></Route>
            <Route path='/register'element={<Register/>}></Route>
            <Route path="/onboarding" element={<Onboard/>}/>
            <Route path="/individual-learner" element={<Developers/>}/>
            <Route path="/course/:name" element={<Course/>}/>
            <Route path = "/payment" element={<Checkout/>}/>

            <Route path = "*" element={"404 Page not Found"}/>
        </Routes>
    )
}

//https://educative-clone-server.herokuapp.com/