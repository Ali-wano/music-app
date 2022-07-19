import React, { useEffect, useRef, useState } from "react"
import Details from "./details";
import Controls from "./control";
import OpenModal from "./musicList";
import "../App.css"
function Player(props) {
    const audioEl = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)
    useEffect(() => {
        if (isPlaying) {
            audioEl.current.play()
            const detailsImg = document.querySelector('.image-song')
            detailsImg.classList.add('animate')
        } else {
            audioEl.current.pause()
            const detailsImg = document.querySelector('.image-song')
            detailsImg.classList.remove('animate')
        }
    })
    const skipSong = (fowards = true) => {
        if (fowards) {
            props.setcurrentSongIndex(()=>{
                let temp = props.currentSongIndex
                temp++

                if (temp < props.songs.lenght  -1) {
                    temp= 0;
                   
                }
                return temp
            })
            
        }else{
            props.setcurrentSongIndex(()=>{
                let temp = props.currentSongIndex
                temp--

                if (temp <  0) {
                    temp= props.songs.lenght - 1;
                }
                return temp
            })
        }
    }
    return <div className="player">
        <OpenModal isPlaying={isPlaying} setIsPlaying={setIsPlaying} skipSong={skipSong} songs={props.songs} />
        <h1>Playing Now</h1>
        <Details songs={props.songs[props.currentSongIndex]} isPlaying={props.isPlaying} />
        <Controls isPlaying={isPlaying} setIsPlaying={setIsPlaying} skipSong={skipSong} />
        <audio src={props.songs[props.currentSongIndex].src} className="audio-play" ref={audioEl} controls onEnded={skipSong} ></audio>
        <p>Next Song {" "}
            <span>{props.songs[props.nextSongIndex].title} by {props.songs[props.nextSongIndex].artist}</span>
        </p>
    </div>;

}

export default Player;