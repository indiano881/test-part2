"use client"

import { useState } from "react";
import UserName from "../UserName";
import HeroMessage from "../HeroMessage";
import DailyChallenge from "../DailyChallenge";
import Stretching from "../Stretching";
import Cardio from "../Cardio";
import Gym from "../Gym";
import DisplayCard from "../DisplayCard";

const Home = () => {
  const [savedName, setSavedName] = useState<string>("");
  const [category, setCategory] = useState<string>("");

  return (
    <div>
      {/* Show UserName component if no name is saved */}
      {savedName === "" && <UserName updateUser={setSavedName} />}

      {/* Show HeroMessage and workout options when a name is saved */}
      {savedName !== "" && category !== "back" && (
        <>
          <HeroMessage name={savedName} />
          <Cardio updateFunction={setCategory} />
          <Gym updateFunction={setCategory} />
          <DailyChallenge updateFunction={setCategory} />
          <Stretching updateFunction={setCategory} />
        </>
      )}

      {/* Show DisplayCard when the category is set to 'back' */}
      {savedName !== "" && category === "back" && (
        <DisplayCard onClick={() => setCategory("")} workout={undefined} type={category} />
      )}
    </div>
  );
};

export default Home;
