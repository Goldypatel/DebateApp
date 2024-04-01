import React from "react";

function Search(){
    return(
        <div className="search">
            <div className="searchForm">
                <input type="text" placeholder="Find a Chat"/>
            </div>
            <div className="userChat">
                <img src="https://images.pexels.com/photos/15625357/pexels-photo-15625357/free-photo-of-white-flower-against-purple-background.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt=""/>
                <div className="userChatinfo">
                    <span>Goldy</span>
                </div>
            
            </div>
        </div>
    )
}

export default Search;