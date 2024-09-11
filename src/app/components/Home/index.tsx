"use client"

import { useState } from "react";
import UserName from "../UserName";

//must understand components they go inside 
//state that saves the name?
const Home = () => {
const [savedName,setSavedName]=useState<string>("")

    return (
        <div>
            <UserName updateUser={setSavedName} />
          
        </div>
    )
};

export default Home
