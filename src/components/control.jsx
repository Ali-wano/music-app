import React from "react"
import "../App.css"
function Controls (props) {
   
        return <div className="controls">
<button className="prev" onClick={() =>props.skipSong(false)}>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-skip-back"><polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line></svg></button>

<button className="play" onClick={() => props.setIsPlaying(!props.isPlaying)}>
        <i className={`fa fa-play ${props.isPlaying ? "fa-pause" : "fa-play"}`}></i>
</button>

        <button className="next" onClick={() =>props.skipSong()} >
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-skip-forward"><polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line></svg></button>
        </div>;
   
}

 
export default Controls;