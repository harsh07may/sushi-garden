"use client";
import { useRef, useState } from "react";

const AudioPlayer: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  // useEffect(() => {
  //   const currentAudio = audioRef.current;

  //   if (currentAudio) {
  //     currentAudio.play();
  //     setIsPlaying(true);
  //   }

  //   return () => {
  //     if (currentAudio) {
  //       currentAudio.pause();
  //       currentAudio.currentTime = 0; // Reset to start on unmount
  //     }
  //   };
  // }, []);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div>
      <audio ref={audioRef} loop>
        <source src="/cute-bgm.mp3" type="audio/mpeg" />
      </audio>
      <button
        className="text-4xl cursor-pointer hover:scale-105 transition-opacity"
        onClick={togglePlayPause}
      >
        {isPlaying ? <p>🎵</p> : <p className="opacity-50">🎵</p>}
      </button>
    </div>
  );
};

export default AudioPlayer;
