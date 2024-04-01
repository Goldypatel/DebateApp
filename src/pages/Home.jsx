import React from "react";
import Header from "../components/Header";
import SideNav from '../components/SideNav';
import Sidebar from '../components/chat-sec/Sidebar'
import Chat from '../components/chat-sec/Chat';

function Home(){
    return(
    <div>
            <Header/>
            <SideNav/>
        
        <div className="home">
            <div className="container">
               <Sidebar/>
               <Chat/>
    
            </div>
        </div>    
    </div>
    )
}
export default Home; 