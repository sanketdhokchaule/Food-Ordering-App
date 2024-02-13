import UserContext from "../utils/UserContext";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return (
            <div className=" flex flex-col space-y-4 justify-center items-center">
                <h1 className="font-bold text-xl">About Page</h1>
                <h2>This is a About page.</h2>
                <div>
                    loggedIn User : 
                    <UserContext.Consumer>
                        {({loggedIn})=>(
                            <h1 className="text-xl font-bold">{loggedIn}</h1>
                        )}
                    </UserContext.Consumer>
                </div>
                <UserClass name={"class component"} location={"Pune"}/>
            </div>
        );
    }
}

/*
const About = () => {
    return (
        <div>
            <h1>About</h1>
            <h2>This is Food Court About page.</h2>
            <UserClass name={"class component"} location={"Pune"}/>
        </div>
    );
};*/

export default About;