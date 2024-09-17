"use client";

import { useEffect, useState } from "react";
import UserName from "./components/UserName";
import HeroMessage from "./components/HeroMessage";
import Cardio from "./components/Cardio";
import Gym from "./components/Gym";
import DailyChallenge from "./components/DailyChallenge";
import Stretching from "./components/Stretching";
import DisplayCard from "./components/DisplayCard";
import Header from "./components/Header";
import { CardioWorkout, challenge, GymWorkout, StretchingExercises } from "../../utils/data";

function getRandomExercise(exerciseArray: string | any[]) {
  const randomIndex = Math.floor(Math.random() * exerciseArray.length);
  return exerciseArray[randomIndex];
}

const Home = () => {
  const [savedName, setSavedName] = useState<string>("a"); //rimette vuoto
  const [category, setCategory] = useState<string>(""); 
  const [workoutType, setWorkoutType] = useState<string>(""); 
  const [selectedWorkout, setSelectedWorkout] = useState<any>(null); 

  
  useEffect(() => {
    if (workoutType === "cardio") {
      const randomCardioWorkout = getRandomExercise(CardioWorkout);
      setSelectedWorkout(randomCardioWorkout); 
    } else if (workoutType === "gym") {
      const randomGymWorkout = getRandomExercise(GymWorkout);
      setSelectedWorkout(randomGymWorkout); 
    } else if (workoutType === "challenge") {
      const randomChallenge = getRandomExercise(challenge);
      setSelectedWorkout(randomChallenge); 
    } else if (workoutType === "stretching") {
      const randomStretchingExercise = getRandomExercise(StretchingExercises);
      setSelectedWorkout(randomStretchingExercise); 
    }
  }, [workoutType]); 
  useEffect(() => {
    if (workoutType === "cardio") {
      const randomCardioWorkout = getRandomExercise(CardioWorkout);
      setSelectedWorkout(randomCardioWorkout); 
    } else if (workoutType === "gym") {
      const randomGymWorkout = getRandomExercise(GymWorkout);
      setSelectedWorkout(randomGymWorkout); 
    } else if (workoutType === "challenge") {
      const randomChallenge = getRandomExercise(challenge);
      setSelectedWorkout(randomChallenge); 
    } else if (workoutType === "stretching") {
      const randomStretchingExercise = getRandomExercise(StretchingExercises);
      setSelectedWorkout(randomStretchingExercise); 
    }
  }, [category]); 

  return (
    <>
      <Header />

      {savedName === "" && <UserName updateUser={setSavedName} />}

      {savedName !== "" && category !== "back" && (
        <>
          <HeroMessage name={savedName} />
          <div className="flex flex-col sm:flex-row bg-orange-400 items-center sm:justify-center">
            
            <Cardio updateFunction={setCategory} setWorkoutType={() => setWorkoutType("cardio")} />
            
            <Gym updateFunction={setCategory} setWorkoutType={() => setWorkoutType("gym")} />
           
            <DailyChallenge updateFunction={setCategory} setWorkoutType={() => setWorkoutType("challenge")} />
           
            <Stretching updateFunction={setCategory} setWorkoutType={() => setWorkoutType("stretching")} />
          </div>
        </>
      )}

      
      {savedName !== "" && category === "back" && selectedWorkout && (
        <DisplayCard onClick={() => setCategory("")} workout={selectedWorkout} type={workoutType} />
      )}
    </>
  );
};

export default Home;
