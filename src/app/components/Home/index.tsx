"use client"

import { useState } from "react";
import UserName from "../UserName";
import HeroMessage from "../HeroMessage";
import DailyChallenge from "../DailyChallenge";
import Stretching from "../Stretching";
import Cardio from "../Cardio";
import Gym from "../Gym";
import DisplayCard from "../DisplayCard";

//must understand components they go inside 
//state that saves the name?
const Home = () => {
const [savedName,setSavedName]=useState<string>("")
const [showPage, setShowPage] = useState<string>("")

    return (
        <div>
            
            {savedName==="" &&
                <UserName updateUser={setSavedName} />
            }
            {savedName!=="" && 
                <>
                    <HeroMessage name={savedName} />
                    <Cardio updateFunction={undefined} /> 
                    <Gym updateFunction={undefined}/>
                    <DailyChallenge updateFunction={undefined}/>
                    <Stretching updateFunction={undefined}/>
                </> 
            }
            {showPage==="exercise" && 
                <>
                    <DisplayCard onClick={undefined} workout={undefined} type={""} />
                </> 
            }
            
          
        </div>
    )
};

export default Home
