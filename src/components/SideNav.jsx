import React from "react";
import plus from '../images/icons/plus.png';
import edit from '../images/icons/edit.png';
import chat from '../images/icons/chat.png';
import profile from '../images/icons/user.png';
import setting from '../images/icons/setting.png';
import guide from '../images/icons/guidelines.png';


function SideNav(){
    return(
<div className="side-nav">
        <div className="bar-contents">
        <a href="#"><img src={plus} alt="icon"/>Join a Topic</a>
        <a href="#"><img src={edit} alt="icon"/>Create a Topic</a>
        <a href="#"><img src={chat} alt="icon"/>Chats</a>
        <a href="#"><img src={guide} alt="icon"/>Community Guidelines</a>
        <a href="#"><img src={profile} alt="icon"/>Profile</a>
        <a href=""><img src={setting} alt="icon"/>settings</a>
      
        </div>
        
        </div>
    );
}

export default SideNav;
