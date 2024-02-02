import { useEffect, useState } from "react";

const User = ({name, location}) =>{
    const [count] = useState(12);

    useEffect(()=>{
        const timer = setInterval(()=>{
            //console.log("Functional Component : In set Interval Function");
        },1000);

        return (()=>{
            clearInterval(timer);
            //console.log("Functional Component : In clear interval")
        })
    },[])
    return(
        <div className="user-card">
            <h1>Count : {count}</h1>
            <h2>Name : Sanket</h2>
            <h3>Location : {location}</h3>
            <h4>Contact : @sanketd</h4>
            <h4>Component : {name}</h4>
        </div>
    )
}

export default User;