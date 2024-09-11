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
const [category, setCategory] = useState<string>("")

    return (
        <div>
            
            {savedName==="" &&
                <UserName updateUser={setSavedName} />
            }
            {(savedName!=="" && category!=="back") && 
                <>
                    <HeroMessage name={savedName} />
                    <Cardio updateFunction={setCategory} /> 
                    <Gym updateFunction={undefined}/>
                    <DailyChallenge updateFunction={undefined}/>
                    <Stretching updateFunction={undefined}/>
                </> 
            }
            {(savedName!=="" && category==="back") && 
                <>
                    <DisplayCard onClick={setCategory} workout={undefined} type={category} />
                </> 
            }
            
          
        </div>
    )
};

export default Home
