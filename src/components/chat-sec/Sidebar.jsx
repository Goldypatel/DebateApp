import React from "react";
import Navbar from '../chat-sec/Navbar';
import Search from '../chat-sec/Search';
import Chats from '../chat-sec/Chats';

function Sidebar(){
    return(
        <div className="sidebar">
            <Navbar/>
            <Search/>
            <Chats/>
        
        </div>
    )
}

export default Sidebar;