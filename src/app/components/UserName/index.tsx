"use client"

import { useState } from "react";


type UserNameProps= {
    updateUser: () => {}
}

const UserName = ({updateUser}:UserNameProps) => {
 const [name, setName] = useState<string>("")
    return (
        <form>
            <label htmlFor="name-input" >Enter your name below</label>
            <input id="name-input" />
          <button data-testid="add-userName">Save</button>
        </form>
    )
};

export default UserName
