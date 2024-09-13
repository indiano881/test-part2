"use client"

import { useState } from "react";
import UserName from "./components/UserName";
import HeroMessage from "./components/HeroMessage";
import Cardio from "./components/Cardio";
import Gym from "./components/Gym";
import DailyChallenge from "./components/DailyChallenge";
import Stretching from "./components/Stretching";
import DisplayCard from "./components/DisplayCard";
import Header from "./components/Header";



const Home = () => {
  const [savedName, setSavedName] = useState<string>("");
  const [category, setCategory] = useState<string>("");

  return (
    <>
      <Header />

      {/* Show UserName component if no name is saved */}
      {savedName === "" && <UserName updateUser={setSavedName} />}

      {/* Show HeroMessage and workout options when a name is saved */}
      {(savedName !== "" && category !== "back") && (
        <>
          <HeroMessage name={savedName} />
          <Cardio updateFunction={setCategory} />
          <Gym updateFunction={setCategory} />
          <DailyChallenge updateFunction={setCategory} />
          <Stretching updateFunction={setCategory} />
        </>
      )}

      {/* Show DisplayCard when the category is set to 'back' */}
      {(savedName !== "" && category === "back") && (
        <DisplayCard onClick={() => setCategory("")} workout={"undefined"} type={category} />
      )}
    </>
  );
};

export default Home;
