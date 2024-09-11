"use client"

import { useState } from "react";
import UserName from "../UserName";
import HeroMessage from "../HeroMessage";
import DailyChallenge from "../DailyChallenge";
import Stretching from "../Stretching";
import Cardio from "../Cardio";
import Gym from "../Gym";

//must understand components they go inside 
//state that saves the name?
const Home = () => {
const [savedName,setSavedName]=useState<string>("")

    return (
        <div>
            <UserName updateUser={setSavedName} />
            <HeroMessage name={savedName} />
            <Cardio updateFunction={undefined} /> 
            <Gym updateFunction={undefined}/>
            <DailyChallenge updateFunction={undefined}/>
            <Stretching updateFunction={undefined}/>
          
        </div>
    )
};

export default Home
