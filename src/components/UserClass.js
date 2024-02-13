import React from "react";


class UserClass extends React.Component {
    
    constructor(props){
        super(props);

        this.state = {
            userInfo:{
                name : "Name",
                location: "Default Location",
                avatar_url:""
            }
        }
    }

   
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/sanketdhokchaule");
        const json = await data.json();
        this.setState({
            userInfo : json,
        })

        this.timer = setInterval(()=>{
            //console.log("Class Component : In set Interval");
        },1000);
    }
    
    componentDidUpdate(){
        //console.log("Class Component : In component did update");
    }

    componentWillUnmount(){
        clearInterval(this.timer);
        //console.log("Class Component : In component Will Unmount");
    }


    render(){
        const {name, location, avatar_url} = this.state.userInfo;

        return(
            <div className="flex flex-col space-y-4 justify-center items-center border-solid border-2 border-black mx-3 my-3 p-5">
                <h2>Name : {name}</h2>
                <h3>Location : {location}</h3>
                <img src={avatar_url}/>
            </div>
        );
    }
}

export default UserClass;