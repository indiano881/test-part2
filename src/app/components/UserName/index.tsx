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

 
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 
    updateUser(name);    
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name-input">Enter your name below</label>
      <input
        id="name-input"
        value={name}
        onChange={handleInput}
        aria-label="Enter your name below"
      />
      <button type="submit" data-testid="add-userName">Save</button>
    </form>
  );
};

export default UserName;
