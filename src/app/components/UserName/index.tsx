"use client";

import { ChangeEvent, useState } from "react";

type UserNameProps = {
  updateUser: (name: string) => void;  
};

const UserName = ({ updateUser }: UserNameProps) => {
  const [name, setName] = useState<string>("");

 
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

 
  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault(); 
    updateUser(name);    
  };

  return (
    <form onSubmit={handleSubmit} className="bg-[#ffb703] flex flex-col items-center">
      <label htmlFor="name-input">Enter your name below</label>
      <input
        id="name-input"
        value={name}
        onChange={handleInput}
        aria-label="Enter your name below"
      />
      <button type="submit" data-testid="add-userName" className="p-4 m-2 border-solid border-2 border-indigo-60 bg-[#f15bb5] w-[100px]">Save</button>
    </form>
  );
};

export default UserName;
