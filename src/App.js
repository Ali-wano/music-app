import "./App.css";
import Player from "./components/player";
import React, { useState, useEffect } from "react";
// import OpenModal from "./components/musicList"

function App() {
  const [songs] = useState([
    {
      id: Math.random() * 400,
      title: "Alcohol",
      artist: "Joeboy",
      imageSrc: "https://i0.wp.com/www.entloaded.com/wp-content/uploads/2021/10/KOLORO_1633445724156.jpg?resize=300%2C300&ssl=1 ",
      src: "./songs/alcohol.mp3",
    },
    {
      id: Math.random() * 400,
      title: "Thats What i Want",
      artist: "Lil nas X",
      imageSrc: "./images/whatiwant.jpg",
      src: "./songs/thatwhatiwant.mp3",
    },
    {
      id: Math.random() * 400,
      title: "Medicine",
      artist: "Jaywlizz",
      imageSrc: "https://i2.wp.com/www.042nobs.com/wp-content/uploads/2021/07/Jaywillz-Medicine.jpeg?w=600&ssl=1",
      src: "./songs/medicine.mp3",
    },
    {
      id: Math.random() * 400,
      title: "Wishing Well",
      artist: "Juice Wrld",
      imageSrc: "https://i0.wp.com/netxclusive.com/wp-content/uploads/2021/05/wishing-well.jpeg?w=554&ssl=1",
      src: "./songs/wishingwell.mp3",
    },
    {
      id: Math.random() * 400,
      title: "Yummy",
      artist: "Justin bieber",
      imageSrc:   "https://i.ibb.co/dkDC9CP/Justin-Bieber-Song-Cover-Art.jpg",
      src: "https://res.cloudinary.com/cbanlawi/video/upload/v1614144520/Justin_Bieber-Yummy_vercib.mp3",
    },
    {
      id: Math.random() * 400,
      title: "Berries",
      artist: "Harry Wilson",
      imageSrc:     "https://i.ibb.co/7RhfRBZ/Fine-Line-Harry-Styles.jpg",
      src:   "https://res.cloudinary.com/cbanlawi/video/upload/v1614140796/HarryStyles-WatermelonSugar_f5471p.mp3",
    },
    {
      id: Math.random() * 400,
      title: "Body",
      artist: "Loud Luxury ft. Brando",
      imageSrc:    "https://is4-ssl.mzstatic.com/image/thumb/Music123/v4/ff/95/49/ff95499e-fef1-4948-f7a7-c493b2beb7e7/18UMGIM45531.rgb.jpg/500x500bb.webp",
      src:   "https://res.cloudinary.com/cbanlawi/video/upload/v1614186705/Loud_Luxury_ft._Brando_-_Body_fm7cdr.mp3"
      ,
    },
    {
      id: Math.random() * 400,
      title: "Industry Baby",
      artist: "Lil nas X Ft Jack Harlow",
      imageSrc:"https://trendybeatz.com/images/Jack-Harlow-Industry-Baby-Art.jpg",
      src:"https://cdn.trendybeatz.com/audio/Lil-Nas-X-Ft-Jack-Harlow-Industry-Baby-(TrendyBeatz.com).mp3"
    },
    {
      id: Math.random() * 400,
      title:"Peru Refix",
      artist:"Fireboy Ft Buju",
      imageSrc:"https://i2.wp.com/xclusiveloaded.com/wp-content/uploads/2021/08/buju-fireboy.jpg?fit=700%2C700&ssl=1",
      src:"https://www.xclusiveloaded.com/wp-content/uploads/2021/08/Buju_ft_Fireboy_DML_-_Peru_Refix_.mp3"
    },
    {
      id: Math.random() * 400,
      title:"Twice As Tall",
      artist:"Burna Boy",
      imageSrc:"https://source.boomplaymusic.com/group10/M00/08/13/8ee80468806841ab83f2c7edcbfb5303.jpg",
      src:"https://www.six9ja.com/wp-content/uploads/2021/09/Burna_Boy_ft_Youssou_N_Dour_-_Level_Up_Twice_as_Tall_.mp3"
    },
    {
      id: Math.random() * 400,
      title:"Despacito",
      artist:"Luis Fonsi ft  Justin Bieber",
      imageSrc:"https://trendybeatz.com/images/Luis-Fonsi-Ft-Daddy-Yankee-And-Justin-Bieber-Despacito-Remix-Art.jpg",
      src:"https://cdn.trendybeatz.com/audio/Luis-Fonsi-Ft-Daddy-Yankee-And-Justin-Bieber-Despacito-Remix-(TrendyBeatz.com).mp3"
    },
    {
      id: Math.random() * 400,
      title:"Stay High",
      artist:"The kid Laroi ft Justin bieber",
      imageSrc:"https://trendybeatz.com/images/The-Kid-Laroi-Fuck-%20Love-3-Over-You-Album-Art.jpg",
      src:"https://cdn.trendybeatz.com/audio/The-Kid-Laroi-Ft-Justin-Bieber-Stay-(TrendyBeatz.com).mp3"
    },
    {
      title:"Peru Refix",
      artist:"Fireboy Ft Buju",
      imageSrc:"https://i2.wp.com/xclusiveloaded.com/wp-content/uploads/2021/08/buju-fireboy.jpg?fit=700%2C700&ssl=1",
      src:"https://audiomack.com/burna-boy/song/level-up-twice-as-tall-africa.mp3"
    },
  ]);
  const [currentSongIndex, setcurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex > +1 > songs.length) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex, songs.length]);

  return (
    <div className="App">
      {/* <OpenModal songs={songs}/> */}
      <Player
        currentSongIndex={currentSongIndex}
        setNextSongIndex={setNextSongIndex}
        nextSongIndex={nextSongIndex}
        setcurrentSongIndex={setcurrentSongIndex}
        songs={songs}
      />
    </div>
  );
}

export default App;
