import PropTypes from 'prop-types';
import React, { useRef, useState } from "react";
function stopPlayer() {
  let show = document.getElementById('vid_show')
  let hide = document.getElementById('vid_hide')
  let button = document.getElementById('vid_btn')
  show.style.display = "none"
  hide.style.display = "block"
  button.style.display = "block"
  document.getElementById('vid_show').pause();
}

function startPlayer() {
  let show = document.getElementById('vid_show')
  let hide = document.getElementById('vid_hide')
  let button = document.getElementById('vid_btn')
  show.style.display = "block"
  hide.style.display = "none"
  button.style.display = "none"
  // document.getElementById('vid_show').autoplay = true;
  document.getElementById('vid_show').play();
}
const Video = ({videposter, videopath, btnimg}) => {
    return (
      <div className="video_block_box">
        <img onClick={startPlayer} className="vid_img_hide" id="vid_hide" src={videposter}/>
        <button onClick={startPlayer} className="play_vid" id="vid_btn"><img src={btnimg} /></button>
        <video onClick={stopPlayer}  className="vid_show" id="vid_show" src={videopath}  autobuffer='' loop='' muted=''></video>
      </div>
    );
}
export default Video;
