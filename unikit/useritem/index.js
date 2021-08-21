import PropTypes from 'prop-types';
import React, { useRef, useState } from "react";
function opensotrudmodal() {
 document.getElementById('sotrudmodalpart2').style.display = "block";
}
function opensotrudmodal2() {
 document.getElementById('sotrudmodacustom').style.display = "block";
}
const Useritem = ({userimg,username,userwork}) => {
    return (
      <div className="user_item">
        <div className="user_item_left">
          <img src={userimg} />
          <div className="user_item_left_text">
            <p>{username}</p>
            <span>{userwork}</span>
          </div>
        </div>
        <div className="user_item_right">
          <div className="user_item_right_top">
            <button onClick={opensotrudmodal} type="button" name="button"><img src="/icons/fi-sr-pencil.svg" alt="" /></button>
            <button type="button" name="button"><img src="/icons/fi-sr-cross-small.svg" alt="" /></button>
          </div>
          <div className="user_item_right_bottom">
            <button onClick={opensotrudmodal2} type="button" name="button"><img src="/icons/fi-sr-eye.svg" alt="" /></button>
            <button type="button" name="button"><img src="/icons/fi-sr-ussdaers.svg" alt="" /></button>
            <button type="button" name="button"><img src="/icons/fi-sr-settascings.svg" alt="" /></button>
            <button type="button" name="button"><img src="/icons/fi-sr-shopping-bag.svg" alt="" /></button>
            <button type="button" name="button"><img src="/icons/fi-sr-money.svg" alt="" /></button>
            <button type="button" name="button"><img src="/icons/fi-sr-box-alt.svg" alt="" /></button>
          </div>
        </div>
      </div>
    );
}
export default Useritem;
