import React from "react";
import Messages from './Messages';
import Input from './Input';
import plus from '../../images/icons/plus.png';
import edit from '../../images/icons/edit.png';
import chat from '../../images/icons/chat.png';

function Chat(){
    return(
        <div className="chat">
            {/* <div className="chatInfo">
                <span>Goldy</span>
                <div className="chatIcons">
                    <img src={plus} alt=""/>
                    <img src={edit} alt=""/>
                    <img src={chat} alt=""/>
                </div>
            </div> */}

            <div className="chat-head">
                <span>
                AI BOON OR BAN
                </span>
                <p>
                Artificial intelligence, a boon in innovation's bloom, Yet its unchecked power, a bane that looms.
                </p>
            </div>

            <Messages/>
            <Input/>
        </div>
    )
}

export default Chat;